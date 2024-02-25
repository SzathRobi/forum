import { ErrorMessage } from './error-message.interface';

export interface NotAskedState {
  readonly isNotAsked: true;
}

export interface LoadingState {
  readonly isLoading: true;
}

export interface ResultState<D> {
  readonly data: D;
}

export interface ErrorState<E> {
  readonly error: E;
}

export type WebRequestState<D, E> =
  | NotAskedState
  | LoadingState
  | ResultState<D>
  | ErrorState<E>;

export type StandardWebRequestState<D> = WebRequestState<
  D,
  readonly ErrorMessage[]
>;
