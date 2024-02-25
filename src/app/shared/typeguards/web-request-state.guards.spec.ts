import {
  LOADING_WEB_REQUEST,
  NOT_ASKED_WEB_REQUEST,
} from '../constants/web-request-state.constants';
import {
  ErrorState,
  ResultState,
} from '../interfaces/web-request-state.interface';
import {
  isErrorState,
  isLoadingState,
  isNotAskedState,
  isResultState,
} from './web-request-state.guards';

const resultState: ResultState<string> = {
  data: 'data',
};

const errorState: ErrorState<string> = {
  error: 'error',
};

describe('Web request state', () => {
  describe('isNotAskedState guard', () => {
    it('should return true for NOT_ASKED_WEB_REQUEST', () => {
      expect(isNotAskedState(NOT_ASKED_WEB_REQUEST)).toBe(true);
    });
  });

  describe('isLoadingState guard', () => {
    it('should return true for LOADING_WEB_REQUEST', () => {
      expect(isLoadingState(LOADING_WEB_REQUEST)).toBe(true);
    });
  });

  describe('isResultState guard', () => {
    it('should return true for resultState', () => {
      expect(isResultState(resultState)).toBe(true);
    });
  });

  describe('isErrorState guard', () => {
    it('should return true for errorState', () => {
      expect(isErrorState(errorState)).toBe(true);
    });
  });
});
