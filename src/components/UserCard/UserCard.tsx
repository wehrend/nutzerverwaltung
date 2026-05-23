import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./UserCard.scss";
import { faCakeCandles } from "@fortawesome/free-solid-svg-icons/faCakeCandles";
import {
  faAddressBook,
  faEnvelope,
  faPhone,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import type { User } from "../../types/User";
import DeleteButton from "../DeleteButton/DeleteButton";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

type UserCardProps = {
  user: User;
};

function UserCard({ user }: UserCardProps) {
  const { usersDispatch } = useContext(UserContext);

  function deleteUser(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    usersDispatch({ type: "REMOVE_USER", user: user });
    alert("Deleted user");
  }

  return (
    <div className="usercard-container">
      <DeleteButton onClick={deleteUser} />

      <div className="usercard-header">
        <img
          className="usercard-header-image"
          src="https://randomuser.me/api/portraits/men/75.jpg"
        />
      </div>
      <div className="usercard-body">
        <div className="usercard-body-title">
          <strong>{user.name}</strong>
        </div>
        <div className="usercard-body-content">
          <div className="usercard-data-list">
            <div className="usercard-data-list-item">
              <span className="usercard-data-icon">
                <FontAwesomeIcon icon={faCakeCandles} />
              </span>
              <span className="usercard-data-text">{user.birthdate}</span>
            </div>
            <div className="usercard-data-list-item">
              <span className="usercard-data-icon">
                <FontAwesomeIcon icon={faVenusMars} />
              </span>
              <span className="usercard-data-text">{user.gender}</span>
            </div>
            <div className="usercard-data-list-item">
              <span className="usercard-data-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span className="usercard-data-text">{user.email}</span>
            </div>
          </div>
          <div className="usercard-data-list">
            <div className="usercard-data-list-item">
              <span className="usercard-data-icon">
                <FontAwesomeIcon icon={faAddressBook} />
              </span>
              <span className="usercard-data-text">{user.address}</span>
            </div>
            <div className="usercard-data-list-item">
              <span className="usercard-data-icon">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <span className="usercard-data-text">{user.phone}</span>
            </div>
            <div className="usercard-data-list-item">
              <span className="usercard-data-icon">
                <FontAwesomeIcon icon={faGlobe} />
              </span>
              <span className="usercard-data-text">{user.website}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
