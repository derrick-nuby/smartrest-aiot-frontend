// file located at src/lib/errorHandler.ts

import { AxiosError } from "axios";

export const handleAxiosError = (error: unknown): string => {
  if (error instanceof AxiosError) {
    if (error.response) {
      const errorData = error.response.data;

      if (typeof errorData === 'string') {
        return errorData;
      }

      if (errorData && typeof errorData === 'object') {
        if ('error' in errorData && typeof errorData.error === 'string') {
          return errorData.error;
        }
        if ('message' in errorData && typeof errorData.message === 'string') {
          return errorData.message;
        }
      }

      return `Server error: ${error.response.status}`;
    }

    if (error.request) {
      return 'Unable to reach the server. Please check your internet connection.';
    }

    return error.message || 'An error occurred while processing your request.';
  }

  if (error instanceof Error) {
    return error.message;
  }

  return 'An unexpected error occurred.';
};
