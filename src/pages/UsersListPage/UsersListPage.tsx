import { useEffect, useState } from "react";
import styled from "styled-components";
import { useContext } from "react";

import { UsersContext } from "../../context/UsersContext";

import { ApiFilterValues, SortValues } from "../../models/types.api";

import UsersFilter from "./UsersFilter";
import UsersList from "./UsersList";
import UserCardLoader from "./UserCardLoader";
import UsersError from "./UsersError";
import SortModal from "./SortModal";

import SortIcon from "../../assets/icons/sort-icon.svg?react";
import SearchIcon from "../../assets/icons/search-icon.svg?react";
import UsersNotFound from "./UsersNotFound";

const Container = styled.div`
    padding: 16px 16px 0;
`;

const Title = styled.h1`
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 18px;
`;

const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    background: #f7f7f8;
    border-radius: 16px;
    padding: 8px 12px;
    margin-bottom: 14px;

    &:focus-within {
        border-color: #aaa;
    }
`;

const SearchInput = styled.input`
    flex: 1;
    border: none;
    background: transparent;
    outline: none;
    font-size: 15px;
    color: #050510;

    &::placeholder {
        color: #c3c3c6;
    }
`;

const SortButton = styled.button<{ $isSortByBirth: boolean }>`
    cursor: pointer;
    svg {
        path {
            fill: ${({ $isSortByBirth }) =>
                $isSortByBirth ? "#6534FF" : "#C3C3C6"};
        }
    }
`;

const UsersListPage = () => {
    const [inputValue, setInputValue] = useState("");
    const [activeFilter, setActiveFilter] = useState(ApiFilterValues.all);
    const [isSortModalOpen, setIsSortModalOpen] = useState(false);

    const {
        users,
        isLoading,
        fetchUsers,
        filterUsers,
        isError,
        changeSort,
        sort,
    } = useContext(UsersContext);

    useEffect(() => {
        fetchUsers(activeFilter);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleInputChange = (value: string) => {
        setInputValue(value);
        filterUsers(value);
    };

    const handleChangeFilter = async (filter: ApiFilterValues) => {
        setActiveFilter(filter);
        await fetchUsers(filter, inputValue);
    };

    const toggleModalOpen = () => {
        setIsSortModalOpen(!isSortModalOpen);
    };

    const handleChangeSort = (value: SortValues) => {
        changeSort(value);
        toggleModalOpen();
    };

    return (
        <>
            <Container>
                <Title>Поиск</Title>
                <SearchWrapper>
                    <button>
                        <SearchIcon />
                    </button>
                    <SearchInput
                        type="text"
                        placeholder="Введи имя, тег, почту..."
                        value={inputValue}
                        onChange={(e) => handleInputChange(e.target.value)}
                    />
                    <SortButton
                        onClick={toggleModalOpen}
                        $isSortByBirth={sort === SortValues.birthday}
                    >
                        <SortIcon />
                    </SortButton>
                </SearchWrapper>
            </Container>
            <UsersFilter
                onChange={handleChangeFilter}
                activeFilter={activeFilter}
            />
            <Container>
                {isLoading && <UserCardLoader />}
                {users.length > 0 ? (
                    <UsersList users={users} sort={sort} />
                ) : (
                    <UsersNotFound />
                )}
                {isError && (
                    <UsersError
                        refetchUsers={fetchUsers}
                        inputValue={inputValue}
                        activeFilter={activeFilter}
                    />
                )}
            </Container>
            {isSortModalOpen && (
                <SortModal
                    value={sort}
                    onChange={handleChangeSort}
                    onClose={toggleModalOpen}
                />
            )}
        </>
    );
};

export default UsersListPage;
