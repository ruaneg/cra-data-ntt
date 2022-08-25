import { useCallback, useEffect, useState } from "react";

export type TApiResponse<DataType> = {
  status: number;
  statusText: string;
  data: DataType | undefined;
  error?: string;
  loading: boolean;
};

/**
 * A custom hook that utilizes fetch library
 * The hook provides a loading property for showing loading status, as well
 * as boilerplate for handling promises with fetch
 */
export default function useApiFetch<T>(url: string): TApiResponse<T> {
  const [status, setStatus] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>("");
  const [data, setData] = useState<T | undefined>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const getAPIData = useCallback(async (urlFetch: string) => {
    setLoading(true);
    try {
      const apiResponse = await fetch(urlFetch);
      const json = await apiResponse.json();
      setStatus(apiResponse.status);
      setStatusText(apiResponse.statusText);
      setData(json);
    } catch (errorMsg) {
      let message;
      if (errorMsg instanceof Error) message = errorMsg.message;
      else message = String(errorMsg);
      setError(message);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getAPIData(url);
  }, [url, getAPIData]);

  return { status, statusText, data, error, loading };
}
