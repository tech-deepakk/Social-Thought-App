import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
function App() {
  return (
    <>
      <div className="main-container">
        <SideBar></SideBar>
        <div className="contant-container">
          <Header></Header>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
