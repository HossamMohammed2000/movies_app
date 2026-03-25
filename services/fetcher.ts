import axios from "axios";
import { api } from "./api";
export async function fetcher<T>(
  url: string,
  params: Record<string, any> = {},
): Promise<T> {
  try {
    const res = await api.get<T>(url, { params });
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.status_message ||
        error.response?.data?.message ||
        error.message ||
        "TMDB request failed"
      );
    }

    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error("TMDB request failed");
  }
}