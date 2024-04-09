import { useContext, useRef } from "react";
import {  PostListContext } from "../store/post-store";

function CreatePost() {
  const { addPost } = useContext(PostListContext);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const postReactionElement = useRef();
  const postTagsElement = useRef();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const postTags = postTagsElement.current.value.split(",");
    const postReaction = postReactionElement.current.value;

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    postReactionElement.current.value = "";
    postTagsElement.current.value = "";

    const newPost = {
      title: postTitle,
      body: postBody,
      reactions: postReaction,
      userId: userId,
      tags: postTags,
    };

    addPost(newPost);
  };
  return (
    <form className="createPost-cointainer" onSubmit={handleOnSubmit}>
      <div className="mb-3">
        <label htmlFor="user-id" className="form-label">
          Your Id
        </label>
        <input
          ref={userIdElement}
          type="text"
          className="form-control"
          id="user-id"
          placeholder="Enter yours id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="post-input-title" className="form-label">
          title
        </label>
        <input
          ref={postTitleElement}
          type="text"
          className="form-control"
          id="post-input-title"
          placeholder="Enter a title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="post-input-body" className="form-label">
          Post Content
        </label>
        <textarea
          ref={postBodyElement}
          rows={4}
          type="text"
          className="form-control"
          id="post-input-body"
          placeholder="More info about it..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="post-reaction" className="form-label">
          How many react on this post
        </label>
        <input
          ref={postReactionElement}
          type="text"
          className="form-control"
          id="post-reaction"
          placeholder="Enter reactions... "
        />
      </div>
      <div className="mb-3">
        <label htmlFor="post-tags" className="form-label">
          #hashtags
        </label>
        <input
          ref={postTagsElement}
          type="text"
          className="form-control"
          id="post-tags"
          placeholder="Enter here... "
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}
export default CreatePost;
