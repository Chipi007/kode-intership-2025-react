import axios, { AxiosRequestConfig, AxiosResponse, isAxiosError } from "axios";
import { API_URL } from "../config";

export enum Methods {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
}

export const request = async <T>(
    method: Methods,
    opts: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
    const headers: AxiosRequestConfig["headers"] = {
        ...opts.headers,
        "Content-Type": "application/json",
    };

    try {
        return await axios.request<T>({
            baseURL: API_URL,
            ...opts,
            headers,
            method,
        });
    } catch (error) {
        if (isAxiosError(error)) {
            console.error("API Error:", error.response?.data || error.message);
        }
        throw error;
    }
};
