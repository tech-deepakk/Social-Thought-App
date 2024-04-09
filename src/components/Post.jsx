import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostListContext } from "../store/post-store";

function Post({ item }) {
  const { deletePost } = useContext(PostListContext);
  return (
    <div className="card post-card " style={{ maxWidth: "80%" }}>
      <div className="card-body ">
        <h5 className="card-title">
          {item.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge  rounded-pill bg-danger"
            onClick={() => deletePost(item.id)}
          >
            <AiFillDelete />
          </span>
        </h5>
        <p className="card-text">{item.body}</p>

        {item.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary post-hashtags">
            {tag}
          </span>
        ))}
        <p type="button" className="btn btn-info post-reaction">
          This post reacted by {item.reactions} people
        </p>
      </div>
    </div>
  );
}

export default Post;
