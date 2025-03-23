import { createContext } from "react";
import { ApiUser, ApiFilterValues, SortValues } from "../models/types.api";

export type UsersContextState = {
    users: ApiUser[];
    isLoading: boolean;
    isError: boolean;
    sort: SortValues;
    fetchUsers: (filter: ApiFilterValues, search?: string) => Promise<void>;
    filterUsers: (filter: string) => void;
    changeSort: (value: SortValues) => void;
};

export const UsersContext = createContext<UsersContextState>({
    users: [],
    isLoading: false,
    isError: false,
    sort: SortValues.alphabet,
    fetchUsers: async () => {},
    filterUsers: () => {},
    changeSort: () => {},
});
