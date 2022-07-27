/* eslint-disable @typescript-eslint/no-explicit-any */

import axios, { AxiosInstance, AxiosRequestHeaders } from 'axios';
import { toast } from 'react-toastify';

import { addQuery, changeParam } from './api.helper';

const client: AxiosInstance = axios.create();

// client.defaults.baseURL = process.env.NODE_ENV === 'development' ? '/api' : '';
client.defaults.withCredentials = true;

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

const getUrl = (url: string, query?: Record<string, any>, param?: Record<string, any>): string => {
  return changeParam(addQuery(url, query), param);
};

async function request<T>({
  method,
  url,
  body,
  query,
  param,
  headerOption,
}: {
  method: Method;
  url: string;
  body?: any;
  query?: Record<string, any>;
  param?: Record<string, any>;
  headerOption?: AxiosRequestHeaders;
}): Promise<T> {
  try {
    const { data } = await client({
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headerOption,
      },
      withCredentials: true,
      data: body,
      url: getUrl(url, query, param),
    });
    return data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      if (err.response?.status && err.response?.status >= 500) {
        toast.error('server error');
      }
    } else {
      toast.error('inner error');
    }
    throw err;
  }
}

export default request;
