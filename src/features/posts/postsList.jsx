import { useSelector } from "react-redux";
import { selelectAllposts } from "./postsSlice";
import PostAuthour from "./postAuthours";
import TimeAgo from "./timeAgo";
import ReactionButtons from "./reactionButtons";

const PostsList = () => {
  const posts = useSelector(selelectAllposts);
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  const renderedPosts = orderedPosts.map((post) => (
    <article
      key={post.id}
      style={{
        border: " 2px solid aliceblue",
        textAlign: "center",
        backgroundColor: "bisque",
        borderRadius: "20px",
        width: "400px",
      }}
    >
      <h3 style={{ color: "rebeccapurple" }}>{post.title}</h3>
      <p style={{ color: "black" }}>{post.content.substring(0, 100)}</p>
      <p style={{ color: "orangered" }}>
        <PostAuthour userId={post.userId} />
        <TimeAgo timeTamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  ));
  return (
    <section
      style={{
        display: "flex",
        gap: "20px",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
