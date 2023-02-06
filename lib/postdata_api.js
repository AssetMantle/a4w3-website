export async function GetPost(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const postData = await response.json();
  return postData;
}

export async function GetPosts() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_page=1"
  );
  const postList = await response.json();
  return postList;
}
