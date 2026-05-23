import { useContext } from "react";
import UserCard from "../../components/UserCard/UserCard";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

function Overview() {
  const { users } = useContext(UserContext);

  return (
    <>
      {users.map((user) => (
        <Link to={`/edit/${user.id}`} key={`usercardlink-${user.id}`}>
          <UserCard user={user} key={`usercard-${user.id}`} />
        </Link>
      ))}
    </>
  );
}

export default Overview;
