function CreatePost() {
  return (
    <form className="createPost-cointainer">
      <div className="mb-3">
        <label htmlFor="user-id" className="form-label">
          Your Id
        </label>
        <input
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
