import "./ProfileBottom.css";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import Posts from "../Posts/Posts";

function ProfileBottom() {
  return (
    <div className="profileBottom">
      <div className="profileBottom__icons">
        <div className="profileBottom__iconsContent">
          <InsertPhotoOutlinedIcon className="profileBottom--icon" />
          <span>POSTS</span>
        </div>
        <div className="profileBottom__iconsContent">
          <BookmarkBorderOutlinedIcon className="profileBottom--icon" />
          <span>SAVED</span>
        </div>
        <div className="profileBottom__iconsContent">
          <AssignmentIndOutlinedIcon className="profileBottom--icon" />
          <span>TAGS</span>
        </div>
      </div>
      <div className="profileBottom__pos">
        <Posts profile />
      </div>
    </div>
  );
}

export default ProfileBottom;
