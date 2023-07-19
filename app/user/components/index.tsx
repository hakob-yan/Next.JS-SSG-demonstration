import React from "react";

const UserPosts = async ({ promise }: { promise: Promise<Post[]> }) => {
  const content = await promise;
  return (
    <div>
      {content.map((post) => {
        return (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        );
      })}
    </div>
  );
};

export default UserPosts;
