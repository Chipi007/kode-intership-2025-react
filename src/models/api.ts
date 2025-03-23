import { Methods, request } from "../api/request";
import { API_URL } from "../config";

import { ApiUsersRsponse } from "./types.api";

export const getUsersRequest = (example: string) =>
    request<ApiUsersRsponse>(Methods.GET, {
        url: "/users",
        baseURL: API_URL,
        params: {
            __example: example,
        },
    });
