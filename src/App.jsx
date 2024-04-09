import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import { useState } from "react";
function App() {
  const [selectTab, setSelectTab] = useState("Home");

  return (
    <>
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
    </>
  );
}

export default App;
