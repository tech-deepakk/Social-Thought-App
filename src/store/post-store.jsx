import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostReducer = (currList, action) => {
  let newList = currList;
  if (action.type == "DELETE_POST") {
    newList = currList.filter((item) => item.id != action.payload.postId);
  } else if (action.type == "ADD_POST") {
    newList = [action.payload.newPost, ...currList];
  }
  return newList;
};

function PostListProvider({ children }) {
  const [postList, dispatchPostlist] = useReducer(PostReducer, defaultPost);
  const deletePost = (postId) => {
    dispatchPostlist({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  const addPost = (newPost) => {
    dispatchPostlist({
      type: "ADD_POST",
      payload: {
        newPost,
      },
    });
  };

  return (
    <PostListContext.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
}
export default PostListProvider;

const defaultPost = [
  {
    id: 1,
    title: "His mother had always taught him",
    body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    userId: 9,
    tags: ["history", "american", "crime"],
    reactions: 2,
  },
  {
    id: 23,
    title: "Learning React",
    body: "Hi Friends Today I am learning the concept of use reducer that is use to change the state using the dipatch function if any action call then the state change and return the new state.",
    userId: 23,
    tags: ["React", "useReducer", "contextApi"],
    reactions: 5,
  },
  {
    id: 2,
    title: "Going to Delhi",
    body: "Last friday i amgoing to delhi ,delhi is a huge polpulated city and there are polution also the problem .",
    userId: 232,
    tags: ["Delhi", "Tourism", "India"],
    reactions: 2,
  },
];
