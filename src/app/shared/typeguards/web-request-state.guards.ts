import {
  ErrorState,
  LoadingState,
  NotAskedState,
  ResultState,
  WebRequestState,
} from '../interfaces/web-request-state.interface';

export const isNotAskedState = <D, E>(
  rs: WebRequestState<D, E>
): rs is NotAskedState => 'isNotAsked' in rs;

export const isLoadingState = <D, E>(
  rs: WebRequestState<D, E>
): rs is LoadingState => 'isLoading' in rs;

export const isResultState = <D, E>(
  rs: WebRequestState<D, E>
): rs is ResultState<D> => 'data' in rs;

export const isErrorState = <D, E>(
  rs: WebRequestState<D, E>
): rs is ErrorState<E> => 'error' in rs;
