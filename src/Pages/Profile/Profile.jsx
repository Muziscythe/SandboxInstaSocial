import ProfileBottom from "../../Components/ProfileBottom/ProfileBottom";
import ProfileTop from "../../Components/ProfileTop/ProfileTop";
import Topbar from "../../Components/Topbar/Topbar";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile">
      <Topbar />
      <div className="profile__body">
        <ProfileTop />
        <ProfileBottom />
      </div>
    </div>
  );
}

export default Profile;
