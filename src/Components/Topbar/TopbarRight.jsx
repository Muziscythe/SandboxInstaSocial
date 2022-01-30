import { Avatar } from "@mui/material";
import "./TopbarRight.css";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function TopbarRight() {
  return (
    <>
      <div className="topbarRight">
        <HomeIcon className="topbarRight__icons clickable use-icon" />
        <i className="fab fa-facebook-messenger  fa__icons"></i>
        {/* <i className="fas fa-ellipsis-v topbarRight__icons"></i> */}
        <OndemandVideoIcon className="topbarRight__icons" />
        <FavoriteBorderIcon className="topbarRight__icons" />
        <Avatar alt="user-profile" src="" sx={{ width: 25, height: 25 }} />
        <i className="fas fa-sign-out-alt  fa__icons"></i>
      </div>
    </>
  );
}

export default TopbarRight;
