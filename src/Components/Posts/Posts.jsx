// import Stories from "../Stories/Stories";
import Post from "./Post";
import "./Posts.css";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import SendIcon from "@mui/icons-material/Send";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

function Posts({ profile }) {
  return (
    <div className="posts">
      {/* <Stories /> */}
      {!profile && (
        <div className="posts__share">
          <div className="posts__shareTop">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.SvzF6cf-xMTgMkEt9q0YzgHaJQ&pid=Api&P=0&w=132&h=165"
              alt=""
              className="posts__userImg"
            />
            <input
              placeholder="What's on your mind, Muzamil"
              className="posts__description"
            />
          </div>
          <hr />
          <div className="posts__shareBottom">
            <div className="posts__photo">
              <InsertPhotoIcon className="posts__icon posts__iconPhoto" />
              <span className="posts__bottomDetail">Photo/video</span>
            </div>
            <div className="posts__tag">
              <LocalOfferIcon className="posts__icon posts__iconTag" />
              <span className="posts__bottomDetail">Tags</span>
            </div>
            <div className="posts__feelings">
              <EmojiEmotionsIcon className="posts__icon posts__iconEmoji" />
              <span className="posts__bottomDetail">Feeling/Activity</span>
            </div>
            <div className="posts__send">
              <button>
                <SendIcon className="posts__icon posts__iconShare" />
              </button>
            </div>
          </div>
        </div>
      )}
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Posts;
