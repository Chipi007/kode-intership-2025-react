import { ApiUser } from "../../models/types.api";

import StarIcon from "../../assets/icons/star-icon.svg?react";
import PhoneIcon from "../../assets/icons/phone-icon.svg?react";
import styled from "styled-components";
import { formatBirthdayLong } from "../../utils/format-birthday";
import { formatPhone } from "../../utils/format-phone";
import { years } from "../../utils/declination";
import { getAge } from "../../utils/get-age";

const Wrapper = styled.div`
    padding: 24px 16px;
`;

const LongItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 46px;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const Age = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #97979b;
`;

type Props = {
    user: ApiUser;
};

const Content = ({ user }: Props) => {
    const { birthday, phone } = user;
    return (
        <Wrapper>
            <LongItem>
                <Item>
                    <StarIcon />
                    <p>{formatBirthdayLong(birthday)}</p>
                </Item>
                <Age>{`${getAge(birthday)} ${years(getAge(birthday))}`}</Age>
            </LongItem>
            <a href={`tel:${phone}`}>
                <Item>
                    <PhoneIcon />
                    <p>{formatPhone(phone)}</p>
                </Item>
            </a>
        </Wrapper>
    );
};

export default Content;
