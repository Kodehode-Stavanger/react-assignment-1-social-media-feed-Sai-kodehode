import Post from "./Post/Post";
import posts from "./posts";
import liconImage from "./licon.jpg";

export default function Feed() {
  const postDetails = posts.map((post) => {
    return (
      <Post
        usernameinfo={post.username}
        contentinfo={post.content}
        timestampinfo={post.timestamp}
        likesinfo={post.likes}
        liconinfo={liconImage}
      />
    );
  });
  return <div>{postDetails} </div>;
}
