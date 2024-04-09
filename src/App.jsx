import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import PostList from "./components/PostList";
function App() {
  return (
    <>
      <div className="main-container">
        <SideBar></SideBar>
        <div className="contant-container">
          <Header></Header>
          <PostList></PostList>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
