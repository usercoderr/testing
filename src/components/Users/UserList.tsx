import {useCallback, useEffect, useState} from "react";
import {IUser} from "../../types/users.ts";
import {testAPI} from "../../axios/api.ts";
import UserItem from "./UserItem.tsx";

const UserList = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<null | string>(null);

    const fetchUsers = useCallback(async () => {
        setLoading(true);
        try {
            const response = await testAPI.getUsers()
            setUsers(response.data);
        } catch (err) {
            // @ts-expect-error
            setError(err)
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchUsers().then(r => r);
    }, []);

    if (error) {
        return (
            <section>
                <div className="container mx-auto mt-10">
                    {error}
                </div>
            </section>
        )
    }

    return (
        <section>
            <div className="container mx-auto mt-10">
                <h1 className="text-2xl font-bold mb-4">User List</h1>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-4 rounded"
                    onClick={fetchUsers}
                    disabled={loading}
                >
                    Обновить
                </button>
                <div className="overflow-x-auto">
                    <table className="max-w-full bg-white">
                        <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">ID</th>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Username</th>
                            <th className="py-2 px-4 border-b">Email</th>
                            <th className="py-2 px-4 border-b">Phone</th>
                            <th className="py-2 px-4 border-b">Website</th>
                        </tr>
                        </thead>
                        <tbody>
                        {loading ? <h2>Loading</h2> : <> {users && users.map(user => (
                            <UserItem key={user.id} user={user}/>
                        ))}</>}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
export default UserList
