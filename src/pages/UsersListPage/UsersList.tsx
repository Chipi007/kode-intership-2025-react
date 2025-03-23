import { ApiUser, SortValues } from "../../models/types.api";
import UserCard from "./UserCard";
import YearDivider from "./YearDivider";
import { Fragment } from "react";

type Props = {
    users: ApiUser[];
    sort: SortValues;
};

const UsersList = ({ users, sort }: Props) => {
    if (sort === SortValues.alphabet) {
        return (
            <div>
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        );
    }

    const currentYear = new Date().getFullYear();
    let isNextYearShown = false;

    return (
        <div>
            {users.map((user) => {
                const birthDate = new Date(user.birthday);
                const birthThisYear = new Date(
                    currentYear,
                    birthDate.getMonth(),
                    birthDate.getDate()
                );
                const now = new Date();

                const isNextYear = birthThisYear < now;
                const showDivider = isNextYear && !isNextYearShown;

                if (showDivider) isNextYearShown = true;

                return (
                    <Fragment key={user.id}>
                        {showDivider && <YearDivider year={currentYear + 1} />}
                        <UserCard user={user} isBirthdayShown />
                    </Fragment>
                );
            })}
        </div>
    );
};

export default UsersList;
