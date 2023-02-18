import axios from "axios";

export const getData = async (user_id) => {
  const user = await axios.get(`https://jsonplaceholder.typicode.com/users/${user_id}`);

  const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);
  return { ...user.data, posts: posts.data };
};
