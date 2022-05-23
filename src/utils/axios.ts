import Axios, { AxiosResponse } from "axios";

/**
 * Base instance of axios
 */
export const axios = Axios.create({
  baseURL: "http://localhost:1337/api",
  timeout: 5000,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Axios get helper method
 *
 * @param {string} url
 */
export async function axiosGet<T>(url: string): Promise<T> {
  try {
    const res: AxiosResponse<T> = await axios.get<T>(encodeURI(url));
    return res.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }

    throw error;
  }
}
