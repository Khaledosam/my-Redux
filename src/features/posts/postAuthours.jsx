import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const PostAuthour = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id === userId);
  return <span>by {author ? author.name : "unKnown author"}</span>;
};

export default PostAuthour;
