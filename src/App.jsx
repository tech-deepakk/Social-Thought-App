import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import { useState } from "react";
import PostListProvider from "./store/post-store";
function App() {
  const [selectTab, setSelectTab] = useState("Home");

  return (
    <>
      <PostListProvider>
        <div className="main-container">
          <SideBar selectTab={selectTab} setSelectTab={setSelectTab}></SideBar>
          <div className="contant-container">
            <Header></Header>
            {selectTab == "Home" ? (
              <PostList></PostList>
            ) : (
              <CreatePost> </CreatePost>
            )}
          </div>
        </div>
        <Footer></Footer>
      </PostListProvider>
    </>
  );
}

export default App;
