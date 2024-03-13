import Feed from "./assets/Feed";
import posts from "./assets/posts";
import liconImage from "./assets/licon.jpg";
function App() {
  const postDetails = posts.map((post) => {
    return (
      <Feed
        usernameinfo={post.username}
        contentinfo={post.content}
        timestampinfo={post.timestamp}
        likesinfo={post.likes}
        liconinfo={liconImage}
      />
    );
  });
  return <>{postDetails}</>;
}

export default App;
