import styled from "styled-components";

import { ApiFilterValues } from "../../models/types.api";

import ErrorImage from "../../assets/icons/error-image.svg?react";

const Container = styled.div`
    display: flex;
    height: calc(100vh - 170px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin: 0 auto;
    max-width: 343px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const Title = styled.h3`
    font-weight: 600;
    font-size: 17px;
    line-height: 22px;
    color: #050510;
`;

const Subtitle = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #97979b;
`;

const Button = styled.button`
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #6534ff;
    cursor: pointer;
`;

type Props = {
    refetchUsers: (filter: ApiFilterValues, search?: string) => Promise<void>;
    inputValue: string;
    activeFilter: ApiFilterValues;
};

const UsersError = ({ refetchUsers, inputValue, activeFilter }: Props) => {
    const handleClick = async () => {
        await refetchUsers(activeFilter, inputValue);
    };
    return (
        <Container>
            <ErrorImage />
            <Content>
                <Title>Какой-то сверхразум все сломал</Title>
                <Subtitle>Постараемся быстро починить</Subtitle>
                <Button onClick={handleClick}>Попробовать снова</Button>
            </Content>
        </Container>
    );
};

export default UsersError;
