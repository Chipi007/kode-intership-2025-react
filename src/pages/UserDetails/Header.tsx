import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { ApiUser } from "../../models/types.api";

import BackIcon from "../../assets/icons/back-icon.svg?react";

const Wrapper = styled.div`
    padding: 24px;
    background-color: #f7f7f8;
`;

const BackButton = styled.button`
    width: 24px;
    height: 24px;
    cursor: pointer;
`;

const Content = styled.div`
    width: 100%;
    margin: 12px auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Avatar = styled.img`
    width: 104px;
    height: 104px;
    border-radius: 50%;
    margin-bottom: 24px;
`;

const NameBlock = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    margin-bottom: 12px;
`;

const Name = styled.h1`
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #050510;
`;

const Tag = styled.h3`
    font-weight: 400;
    font-size: 17px;
    line-height: 22px;
    color: #97979b;
`;

const Position = styled.p`
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #55555c;
`;

type Props = {
    user: ApiUser;
};

const Header = ({ user }: Props) => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    const { firstName, lastName, userTag, position, id } = user;
    return (
        <Wrapper>
            <BackButton onClick={handleBack}>
                <BackIcon />
            </BackButton>
            <Content>
                {/* Its impossible to use api-link for user avatar. It isnt loading :( */}
                <Avatar src={`https://i.pravatar.cc/150?u=${id}`} />
                <NameBlock>
                    <Name>
                        {firstName} {lastName}
                    </Name>
                    <Tag>{userTag}</Tag>
                </NameBlock>
                <Position>{position}</Position>
            </Content>
        </Wrapper>
    );
};

export default Header;
