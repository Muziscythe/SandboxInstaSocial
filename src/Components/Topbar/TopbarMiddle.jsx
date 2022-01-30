import "./TopbarMiddle.css";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function TopbarMiddle() {
  return (
    <>
      <div className="topbarMiddle">
        <div className="topbarMiddle__search">
          <div className="topbarMiddle__iconContainer">
            <HomeIcon className="topbarMiddle__icons clickable use-icon" />
          </div>
          <div className="topbarMiddle__iconContainer">
            <SearchIcon className="topbarMiddle__icons" />
          </div>
          <div className="topbarMiddle__iconContainer">
            <OndemandVideoIcon className="topbarMiddle__icons" />
          </div>
          <div className="topbarMiddle__iconContainer">
            <FavoriteBorderIcon className="topbarMiddle__icons" />
          </div>
        </div>
      </div>
    </>
  );
}

export default TopbarMiddle;
