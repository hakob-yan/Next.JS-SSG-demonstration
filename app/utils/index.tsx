export async function getPost(id: number): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Bad response");
  const response = res.json();
  return response;
}

export async function getUser(id: number): Promise<User> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: "force-cache",
  });

  if (!res.ok) throw new Error("Bad response");
  const response = res.json();
  return response;
}

export async function getUsers(): Promise<User[]> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);

  if (!res.ok) throw new Error("Bad response");
  const response = res.json();
  return response;
}

export async function getPosts(id: number): Promise<Post[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );

  if (!res.ok) throw new Error("Bad response");
  const response = res.json();
  return response;
}
