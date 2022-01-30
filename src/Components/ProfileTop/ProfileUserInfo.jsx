import "./ProfileUserInfo.css";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

function ProfileUserInfo() {
  return (
    <div className="profileUserInfo">
      <div className="profileUserInfo__top">
        <span className="profileUserInfo--username">muzamil__md48</span>
        <button className="profileUserInfo--follow">Follow</button>
        <SettingsOutlinedIcon className="profileUserInfo--settings" />
      </div>
      <div className="profileUserInfo__bottom">
        <div className="profileUserInfo__bottomTitle">
          <span>31</span> posts
        </div>
        <div className="profileUserInfo__bottomTitle">
          <span>31</span> followers
        </div>
        <div className="profileUserInfo__bottomTitle">
          <span>31</span> following
        </div>
      </div>
    </div>
  );
}

export default ProfileUserInfo;
