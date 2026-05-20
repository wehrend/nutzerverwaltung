import { Link } from "react-router-dom";
import "./sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <img src="./devkarriere.png" className="sidebar-header-image" />
      </div>
      <div className="sidebar-body"></div>
      <Link to={"overview"}>
        <button className="sidebar-item">Übersicht</button>
      </Link>
      <Link to={"overview"}>
        <button className="sidebar-item">Erstellen</button>
      </Link>
    </div>
  );
}

export default Sidebar;
