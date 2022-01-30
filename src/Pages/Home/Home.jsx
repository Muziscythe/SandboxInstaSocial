import Posts from "../../Components/Posts/Posts";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Topbar />
      <div className="home__body">
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
}

export default Home;
