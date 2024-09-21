import { useState } from "react";
import "./addformList.css";
import { postAdded } from "./postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
const AddFormList = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const users = useSelector(selectAllUsers);
  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onAuthourChange = (e) => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));
  return (
    <section
      style={{
        display: "flex",
        gap: "10px",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>Add a new post</h2>
      <form
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <label htmlFor="postTitle">post Title :</label>
          <input
            style={{ width: "250px", marginLeft: "25px" }}
            type="text"
            value={title}
            onChange={onTitleChange}
            id="postTitle"
            name="postTitle"
          />
        </div>
        <div>
          <label htmlFor="postAuthour">post Authour :</label>
          <select
            style={{ width: "260px" }}
            id="postAuthour"
            value={userId}
            onChange={onAuthourChange}
          >
            <option value=""></option>
            {usersOptions}
          </select>
        </div>
        <div>
          <label htmlFor="postContent">post Content :</label>
          <input
            style={{ width: "250px" }}
            type="text"
            value={content}
            onChange={onContentChange}
            id="postContent"
            name="postContent"
          />
        </div>
        <button
          type="button"
          onClick={onSavePostClicked}
          style={{ backgroundColor: "orange", fontWeight: "bold" }}
          disabled={!canSave}
        >
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddFormList;
