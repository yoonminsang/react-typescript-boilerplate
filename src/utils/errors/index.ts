import axios from 'axios';
import { toast } from 'react-toastify';

const errorHandler = {
  status: {
    401: () => toast.error('401 error'),
    403: () => toast.error('403 error'),
    409: () => toast.error('409 error'),
  },
  common: () => toast.error('common error'),
};

const handleError = (err: unknown) => {
  if (axios.isAxiosError(err)) {
    const status = err.response?.status;
    switch (status) {
      case 401:
      case 403:
      case 409:
        return errorHandler.status[status]();
      default:
        errorHandler.common();
    }
  }
};

export const ERROS = {
  handleError,
};
