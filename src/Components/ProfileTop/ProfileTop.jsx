import ProfileImage from "./ProfileImage";
import "./ProfileTop.css";
import ProfileUserDesc from "./ProfileUserDesc";
import ProfileUserInfo from "./ProfileUserInfo";

function ProfileTop() {
  return (
    <div className="profileTop">
      <div className="profileTop__image">
        <ProfileImage />
      </div>
      <div className="profileTop__body">
        <ProfileUserInfo />
        <ProfileUserDesc />
      </div>
    </div>
  );
}

export default ProfileTop;
