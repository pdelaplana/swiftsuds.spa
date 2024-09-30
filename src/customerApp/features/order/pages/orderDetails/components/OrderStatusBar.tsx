import React, { useMemo } from 'react';

import type { BookingStatus } from '@domain/entities/booking';
import { IonIcon } from '@ionic/react';
import { ticketOutline, bicycleOutline,  checkmark, happyOutline } from 'ionicons/icons';
import { Step, Stepper } from 'react-form-stepper';
import './OrderStatusBar.css';

interface OrderStatusBarProps {
  bookingStatus: BookingStatus;
}
const OrderStatusBar: React.FC<OrderStatusBarProps> = ({ bookingStatus }) => {
  const activeStep = useMemo(() => {
    switch (bookingStatus) {
      case 'BOOKED':
        return 0;
      case 'PICKEDUP':
        return 1;
      case 'INSHOP':
        return 2;
      case 'DISPATCHED':
        return 3;
      case 'COMPLETED':
        return 4;
      default:
        return 0;
    }
  },[bookingStatus]);

  return (
    <div>
        <Stepper
          activeStep={activeStep}
          styleConfig={{
            activeBgColor: '#2b7cff',
            activeTextColor: '#fff',
            inactiveBgColor: '#e0e0e0',
            inactiveTextColor: '#2b7cff',
            completedBgColor: '#2b7cff',
            completedTextColor: '#fff',
            size: '2em',
            circleFontSize: '.8em',
            labelFontSize: '.8em',
            fontWeight: '200',
            borderRadius: '60%',
          }}
          connectorStateColors={true}
          connectorStyleConfig={{
            activeColor: '#2b7cff',
            completedColor: '#2b7cff',
            inactiveColor: '#e0e0e0',
            size: '0.2em',
            disabledColor: '#e0e0e0',
            style: 'solid',
          }}
          stepClassName={'stepper-step'}

        >
          <Step label="Booked" children={<IonIcon icon={ticketOutline} size='small'  /> }  />
          <Step label="Picked Up" children={<IonIcon icon={bicycleOutline} size='small' />} />
          <Step label="In Shop" children={<IonIcon icon={happyOutline} size='small'  />} />
          <Step label="Dispatched" children={<IonIcon icon={bicycleOutline} size='small' />} />
          <Step label="Delivered" children={<IonIcon icon={checkmark} size='small'  />} />

        </Stepper>
        </div>
  );
};

export default OrderStatusBar;
