import React, { createContext, useContext, useEffect, useState } from 'react';

import type {
	AuthenticationResult,
	EventMessage,
	IPublicClientApplication,
	IdTokenClaims
} from '@azure/msal-browser';
import { EventType } from '@azure/msal-browser';
import { MsalProvider, useMsal } from '@azure/msal-react';
import type { AuthError } from 'msal';

import { b2cPolicies, loginRequest, protectedResources } from './AuthConfig';
import { compareIssuingPolicy } from '../../utils/claimsUtils';

interface AuthProviderProps {
	msalInstance: IPublicClientApplication;
	children: React.ReactNode;
}

interface AuthContextType {
	login: () => Promise<void>;
	logout: () => void;
	isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<AuthProviderProps> = ({ msalInstance, children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

	//const [msalInstance, setMsalInstance] = useState<PublicClientApplication | null>(null);

	const { instance } = useMsal();

  //const history = useHistory();


	useEffect(() => {
		const callbackId = instance.addEventCallback((event: EventMessage) => {
			const payload = event.payload as AuthenticationResult;
      console.log('payload', payload);
			if (
				(event.eventType === EventType.LOGIN_SUCCESS || event.eventType === EventType.ACQUIRE_TOKEN_SUCCESS) &&
				payload.account
			) {

        console.log('Event', event);
				/**
				 * For the purpose of setting an active account for UI update, we want to consider only the auth
				 * response resulting from SUSI flow. "tfp" claim in the id token tells us the policy (NOTE: legacy
				 * policies may use "acr" instead of "tfp"). To learn more about B2C tokens, visit:
				 * https://docs.microsoft.com/en-us/azure/active-directory-b2c/tokens-overview
				 */
				if (compareIssuingPolicy(payload.idTokenClaims as Record<string, string>, b2cPolicies.names.editProfile)) {
					// retrieve the account from initial sing-in to the app
					const originalSignInAccount = instance
						.getAllAccounts()
						.find(
							(account) =>
								account.idTokenClaims?.oid === (payload.idTokenClaims as IdTokenClaims).oid &&
								account.idTokenClaims?.sub === (payload.idTokenClaims as IdTokenClaims).sub &&
								compareIssuingPolicy(account.idTokenClaims as Record<string, string>, b2cPolicies.names.signUpSignIn),
						);

					let signUpSignInFlowRequest = {
						authority: b2cPolicies.authorities.signUpSignIn.authority,
						account: originalSignInAccount,
					};

					// silently login again with the signUpSignIn policy
					instance.ssoSilent(signUpSignInFlowRequest);


				}

				/**
				 * Below we are checking if the user is returning from the reset password flow.
				 * If so, we will ask the user to reauthenticate with their new password.
				 * If you do not want this behavior and prefer your users to stay signed in instead,
				 * you can replace the code below with the same pattern used for handling the return from
				 * profile edit flow
				 */
				if (compareIssuingPolicy(payload.idTokenClaims as Record<string, string>, b2cPolicies.names.forgotPassword)) {
					let signUpSignInFlowRequest = {
						authority: b2cPolicies.authorities.signUpSignIn.authority,
						scopes: [...protectedResources.apiTodoList.scopes.read, ...protectedResources.apiTodoList.scopes.write],
					};
					instance.loginRedirect(signUpSignInFlowRequest);
				}

        //history.push("/home");
			}

			if (event.eventType === EventType.LOGIN_FAILURE) {
				// Check for forgot password error
				// Learn more about AAD error codes at https://docs.microsoft.com/en-us/azure/active-directory/develop/reference-aadsts-error-codes
				if ((event.error as AuthError).errorMessage.includes('AADB2C90118')) {
					const resetPasswordRequest = {
						authority: b2cPolicies.authorities.forgotPassword.authority,
						scopes: [],
					};
					instance.loginRedirect(resetPasswordRequest);
				}
			}
		});

		return () => {
			if (callbackId) {
				instance.removeEventCallback(callbackId);
			}
		};
	}, [instance]);

	const login = async () => {
		if (!instance) return;
		instance.loginRedirect(loginRequest).catch((error) => console.log(error));
	};

	const logout = () => {
		if (instance) {
			instance.logoutRedirect({
				account: instance.getActiveAccount(),
			});
		}
	};

	return (
		<MsalProvider instance={msalInstance}>
			<AuthContext.Provider value={{ login, logout, isAuthenticated }}>{children}</AuthContext.Provider>
		</MsalProvider>
	);
};

const useAuth = (): AuthContextType => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};

export { AuthProvider, useAuth };
