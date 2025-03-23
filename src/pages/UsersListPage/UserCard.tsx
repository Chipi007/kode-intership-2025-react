import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { ApiUser } from "../../models/types.api";
import { formatBirthdayShort } from "../../utils/format-birthday";

type Props = {
    user: ApiUser;
    isBirthdayShown?: boolean;
};

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px 0;
    cursor: pointer;
`;

const MainUserInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

const UserAvatar = styled.img`
    width: 72px;
    height: 72px;
    border-radius: 50%;
`;

const UserInfo = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
`;

const UserName = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
`;

const UserTag = styled.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #97979b;
`;

const UserPosition = styled.div`
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #55555c;
`;

const Birthday = styled.div`
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    color: #55555c;
`;
const UserCard = ({ user, isBirthdayShown = false }: Props) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/users/${user.id}`);
    };

    return (
        <Card onClick={handleCardClick}>
            {/* Its impossible to use api-link for user avatar. It isnt loading :( */}
            <MainUserInfo>
                <UserAvatar src={`https://i.pravatar.cc/150?u=${user.id}`} />
                <div>
                    <UserInfo>
                        <UserName>
                            {user.firstName} {user.lastName}
                        </UserName>
                        <UserTag>{user.userTag}</UserTag>
                    </UserInfo>
                    <UserPosition>{user.position}</UserPosition>
                </div>
            </MainUserInfo>
            {isBirthdayShown && (
                <Birthday>{formatBirthdayShort(user.birthday)}</Birthday>
            )}
        </Card>
    );
};

export default UserCard;
