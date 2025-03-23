import { useContext } from "react";
import { useParams } from "react-router-dom";

import { UsersContext } from "../../context/UsersContext";

import Header from "./Header";
import Content from "./Content";

const UserDetails = () => {
    const { id } = useParams();
    const { users } = useContext(UsersContext);
    const user = users?.find((u) => u.id === id);

    return (
        user && (
            <div>
                <Header user={user} />
                <Content user={user} />
            </div>
        )
    );
};

export default UserDetails;
