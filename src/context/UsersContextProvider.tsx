import React, { useCallback, useMemo, useRef, useState } from "react";
import { UsersContext } from "./UsersContext";
import { ApiUser, ApiFilterValues, SortValues } from "../models/types.api";
import { getUsersRequest } from "../models/api";

const UsersContextProvider = ({ children }: { children: React.ReactNode }) => {
    const initialUsers = useRef<ApiUser[]>([]);
    const [users, setUsers] = useState<ApiUser[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [sort, setSort] = useState<SortValues>(SortValues.alphabet);

    const sortUsers = useCallback(
        (list: ApiUser[], currentSort: SortValues) => {
            return [...list].sort((a, b) => {
                if (currentSort === SortValues.alphabet) {
                    return a.firstName.toLowerCase() > b.firstName.toLowerCase()
                        ? 1
                        : -1;
                } else {
                    const now = new Date();
                    const getDate = (dateStr: string) => {
                        const d = new Date(dateStr);
                        const dThisYear = new Date(
                            now.getFullYear(),
                            d.getMonth(),
                            d.getDate()
                        );
                        return dThisYear < now
                            ? dThisYear.setFullYear(now.getFullYear() + 1)
                            : dThisYear.getTime();
                    };
                    return getDate(a.birthday) - getDate(b.birthday);
                }
            });
        },
        []
    );

    const filterUsers = useCallback(
        (query: string) => {
            if (!query.trim()) {
                setUsers(sortUsers(initialUsers.current, sort));
                return;
            }

            const filtered = initialUsers.current.filter((user) =>
                `${user.firstName} ${user.lastName} ${user.userTag}`
                    .toLowerCase()
                    .includes(query.toLowerCase())
            );

            setUsers(sortUsers(filtered, sort));
        },
        [sort, sortUsers]
    );

    const fetchUsers = useCallback(
        async (filter: ApiFilterValues, search?: string) => {
            initialUsers.current = [];
            setUsers([]);
            setIsError(false);
            setIsLoading(true);

            try {
                const { data } = await getUsersRequest(filter);
                initialUsers.current = data.items;

                const filtered = search?.trim()
                    ? data.items.filter((user) =>
                          `${user.firstName} ${user.lastName} ${user.userTag}`
                              .toLowerCase()
                              .includes(search.toLowerCase())
                      )
                    : data.items;

                setUsers(sortUsers(filtered, sort));
            } catch {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        },
        [sort, sortUsers]
    );

    const changeSort = useCallback(
        (value: SortValues) => {
            setSort(value);
            setUsers((prev) => sortUsers(prev, value));
        },
        [sortUsers]
    );

    const contextValue = useMemo(
        () => ({
            users,
            isLoading,
            isError,
            sort,
            fetchUsers,
            filterUsers,
            changeSort,
        }),
        [users, isLoading, isError, sort, fetchUsers, filterUsers, changeSort]
    );

    return (
        <UsersContext.Provider value={contextValue}>
            {children}
        </UsersContext.Provider>
    );
};

export default UsersContextProvider;
