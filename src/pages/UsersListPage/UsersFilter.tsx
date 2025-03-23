import styled from "styled-components";

import { ApiFilterValues } from "../../models/types.api";

import { filterValues, FilterValuesMap } from "./constants";

type Props = {
    onChange: (filter: ApiFilterValues) => Promise<void>;
    activeFilter: ApiFilterValues;
};

const Filters = styled.div`
    display: flex;
    align-items: center;
    padding: 0 4px;
    border-bottom: 1px solid #c3c3c6;
    overflow-x: auto;
`;

const Filter = styled.button<{ $active: boolean }>`
    position: relative;
    padding: 8px 12px;
    cursor: pointer;
    color: ${({ $active }) => ($active ? "#050510" : "#97979b")};

    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: ${({ $active }) =>
            $active ? "#6534FF" : "transparent"};
    }
`;
const UsersFilter = ({ onChange, activeFilter }: Props) => {
    return (
        <Filters>
            {filterValues.map((filter) => (
                <Filter
                    key={filter}
                    onClick={() => onChange(filter)}
                    $active={filter === activeFilter}
                >
                    {FilterValuesMap[filter]}
                </Filter>
            ))}
        </Filters>
    );
};

export default UsersFilter;
