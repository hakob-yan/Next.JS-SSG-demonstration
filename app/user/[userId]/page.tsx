import React from "react";
import { getUser, getPosts } from "@/app/utils";
import { Suspense } from "react";
import UsersPosts from "../components/index";
import Link from "next/link";
type Params = {
  params: {
    userId: string;
  };
};

async function User({ params: { userId } }: Params) {
  const usersData: Promise<User> = getUser(+userId);
  const postsData: Promise<Post[]> = getPosts(+userId);

  const user = await usersData;

  return (
    <div>
      <Link href="/">Back to Home</Link>
      <br />
      <h1>User{user.name}</h1>

      <br />
      <Suspense fallback={<h2>...Loading</h2>}>
        <UsersPosts promise={postsData} />
      </Suspense>
      
    </div>
  );
}

export default User;
