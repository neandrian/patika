const posts = [
  { title: "Post 1", content: "Post 1 içerik yazısı..." },
  { title: "Post 2", content: "Post 2 içerik yazısı..." },
  { title: "Post 3", content: "Post 3 içerik yazısı..." },
  { title: "Post 4", content: "Post 4 içerik yazısı..." },
  { title: "Post 5", content: "Post 5 içerik yazısı..." },
];

const listPosts = () => {
  posts.map((post) => {
    console.log(post.title);
  });
};

const addPost = (newPost) => {
  const postPromise = new Promise((resolve, reject) => {
    posts.push(newPost);
    resolve(posts);
    // reject("Bir hata oluştu");
  });

  return postPromise;
};

async function showPosts() {
  try {
    await addPost({ title: "Post 6", content: "Post 6 içerik yazısı..." });
    listPosts();
  } catch (err) {
    console.log(err);
  }
}

showPosts();
