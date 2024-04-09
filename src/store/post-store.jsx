import { createContext } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

function PostListProvider({ children }) {
  return <PostListContext.Provider>{children}</PostListContext.Provider>;
}
export default PostListProvider;
