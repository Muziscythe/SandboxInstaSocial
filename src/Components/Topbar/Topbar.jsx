import "./Topbar.css";
import TopbarLeft from "./TopbarLeft";
import TopbarMiddle from "./TopbarMiddle";
import TopbarRight from "./TopbarRight";

function Topbar() {
  return (
    <>
      <div className="topbar">
        <div className="topbarWrapper">
          <TopbarLeft />
          {/* <TopbarMiddle /> */}
          <TopbarRight />
        </div>
      </div>
    </>
  );
}

export default Topbar;
