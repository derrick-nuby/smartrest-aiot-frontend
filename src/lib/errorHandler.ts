// file location: src/lib/errorHandler.ts

import { AxiosError } from "axios";
import toast from "react-hot-toast";

export const handleAxiosError = (error: unknown, defaultMessage = "An error occurred"): string => {
  if (error instanceof AxiosError) {
    // Handle Axios errors
    const errorMessage = error.response?.data?.error || error.message || defaultMessage;
    toast.error(errorMessage);
    return errorMessage;
  } else if (error instanceof Error) {
    // Handle generic errors
    toast.error(error.message || defaultMessage);
    return error.message || defaultMessage;
  } else {
    // Handle unknown errors
    toast.error(defaultMessage);
    return defaultMessage;
  }
}

