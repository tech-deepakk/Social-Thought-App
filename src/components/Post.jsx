function Post({item}) {
  return (
    <div className="card post-card " style={{ maxWidth: "80%" }}>
      <div className="card-body ">
        <h5 className="card-title">{item.title}</h5>
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
