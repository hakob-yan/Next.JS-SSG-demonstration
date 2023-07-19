import React from "react";
import { getUsers } from "@/app/utils";
import Link from "next/link";
type Params = {
  params: {
    userId: string;
  };
};

async function Users() {
  const usersData: Promise<User[]> = getUsers();

  const users = await usersData;

  return (
    <div>
      <Link href="/">Back to Home</Link>
      <br />
      <br />
      <br />
      <br />

      {users.map((user) => {
        return (
          <p key={user.id}>            
            <Link href={String('user/'+user.id)}>{user.name}</Link>
          </p>
        );
      })}
    </div>
  );
}

export default Users;
