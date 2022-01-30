import "./Suggestion.css";

function Suggestion({ img, suggestionName }) {
  return (
    <div className="suggestion">
      <img src={img} alt="profile" className="suggestion__img" />
      <div className="suggestion__username">
        <h4>{suggestionName}</h4>
      </div>
      <h4 className="suggestion__follow">Follow</h4>
    </div>
  );
}

export default Suggestion;
