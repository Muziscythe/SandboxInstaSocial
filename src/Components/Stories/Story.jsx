import "./Story.css";

function Story({ profile_pic, username }) {
  return (
    <div className="story">
      <img src={profile_pic} alt="profile" className="story__profile" />
      <span>{username}</span>
    </div>
  );
}

export default Story;
