import {FC} from "react";
import {IUser} from "../../types/users.ts";

interface IUserItemProps {
    user: IUser
}

const UserItem: FC<IUserItemProps> = ({user}) => {
    return (
        <tr>
            <td className="py-2 px-4 border-b">{user.id}</td>
            <td className="py-2 px-4 border-b">{user.name}</td>
            <td className="py-2 px-4 border-b">{user.username}</td>
            <td className="py-2 px-4 border-b">{user.email}</td>
            <td className="py-2 px-4 border-b">{user.phone}</td>
            <td className="py-2 px-4 border-b">{user.website}</td>
        </tr>
    )
}
export default UserItem
