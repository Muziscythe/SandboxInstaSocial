import Suggestion from "../Suggestion/Suggestion";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.SvzF6cf-xMTgMkEt9q0YzgHaJQ&pid=Api&P=0&w=132&h=165"
          alt=""
          className="sidebar__profileImg"
        />
        <div className="sidebar__profileInfo">
          <h4 className="sidebar__username">muzamil__md48</h4>
          <p className="sidebar__nickname">scythe</p>
        </div>
      </div>

      <div className="sidebar__suggestions">
        <h4>Suggestions For You</h4>
        <span>See All</span>
      </div>

      <Suggestion
        img="https://tse1.mm.bing.net/th?id=OIP.0ftTWi1qjpiOyIwzKWRQwgHaNK&pid=Api&P=0&w=97&h=172"
        suggestionName="annette"
      />
      <Suggestion
        img="https://tse1.mm.bing.net/th?id=OIP.0ftTWi1qjpiOyIwzKWRQwgHaNK&pid=Api&P=0&w=97&h=172"
        suggestionName="annette"
      />
      <Suggestion
        img="https://tse1.mm.bing.net/th?id=OIP.0ftTWi1qjpiOyIwzKWRQwgHaNK&pid=Api&P=0&w=97&h=172"
        suggestionName="annette"
      />
      <Suggestion
        img="https://tse1.mm.bing.net/th?id=OIP.0ftTWi1qjpiOyIwzKWRQwgHaNK&pid=Api&P=0&w=97&h=172"
        suggestionName="annette"
      />
      <Suggestion
        img="https://tse1.mm.bing.net/th?id=OIP.0ftTWi1qjpiOyIwzKWRQwgHaNK&pid=Api&P=0&w=97&h=172"
        suggestionName="annette"
      />
    </div>
  );
}

export default Sidebar;
