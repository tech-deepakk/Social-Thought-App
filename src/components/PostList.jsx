import Post from "./Post";
function PostList() {
  const postList = [
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
      title: "His mother had always taught him",
      body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
      userId: 23,
      tags: ["history", "american", "crime"],
      reactions: 2,
    },
    {
      id: 2,
      title: "His mother had always taught him",
      body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
      userId: 232,
      tags: ["history", "american", "crime"],
      reactions: 2,
    },
  ];
  return (
    <>
      {postList.map((item) => (
        <Post key={item.id} item={item}></Post>
      ))}
    </>
  );
}

export default PostList;
