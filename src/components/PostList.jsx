import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-store";

function PostList() {
  const { postList } = useContext(PostListContext);
  return (
    <>
      {postList.map((item) => (
        <Post key={item.id} item={item}></Post>
      ))}
    </>
  );
}

export default PostList;
