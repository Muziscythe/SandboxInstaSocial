import "./Post.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerProfile">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.SvzF6cf-xMTgMkEt9q0YzgHaJQ&pid=Api&P=0&w=132&h=165"
            alt=""
          />
        </div>
        <h4 className="post__headerUsername">muzamil__md48</h4>
        <MoreHorizIcon className="post__moreIcon" />
      </div>
      <hr />
      <div className="post__content">
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.-QLX6djIsB4-r3Yyp4LJWAHaGW&pid=Api&P=0&w=194&h=166"
          alt=""
        />
      </div>
      <div className="post__likeComment">
        <div className="post__likeCommentIcons">
          <FavoriteBorderIcon className="post__like" />
          <ModeCommentOutlinedIcon className="post__comment " />
          <SendOutlinedIcon className="post__share " />
          <BookmarkBorderIcon className="post__save " />
        </div>
        <p className="post__likesCount">162 likes</p>
      </div>
      <div className="post__description">
        <div className="post__desc">
          <p className="post__descriptionUsername">muzamil__md48</p>
          <p className="">hey there My first post hey there My first post</p>
        </div>
        <span className="post__time">35 mins ago</span>
      </div>
    </div>
  );
}

export default Post;
