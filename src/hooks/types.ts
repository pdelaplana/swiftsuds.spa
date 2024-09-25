export type FetchResult<TData = unknown> = {
  data: TData;
  error: unknown;
  isLoading: boolean;
}

export type CreateResult<TData = unknown, TParams = unknown> = {
  data: TData;
  error: unknown;
  mutate: (params:  TParams) => void;
}

