import styled from "styled-components";

import SearchImage from "../../assets/icons/search-image.svg?react";

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
    text-align: center;
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

const UsersNotFound = () => (
    <Container>
        <SearchImage />
        <Content>
            <Title>Мы никого не нашли</Title>
            <Subtitle>Попробуй скорректировать запрос</Subtitle>
        </Content>
    </Container>
);

export default UsersNotFound;
