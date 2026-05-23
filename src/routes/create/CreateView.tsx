import { useContext } from "react";
import UserForm from "../../components/UserForm/UserForm";
import "./createView.scss";
import { UserContext } from "../../context/UserContext";
import type { User } from "../../types/User";

function CreateView() {
  const { usersDispatch } = useContext(UserContext);

  function handleSubmitNewUser(user: User) {
    console.log("Submit button clicked");
    usersDispatch({ type: "ADD_USER", user: user });
    alert("Added User");
  }
  return <UserForm user={undefined} onSubmit={handleSubmitNewUser} />;
}

export default CreateView;
