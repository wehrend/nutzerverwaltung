import { useContext, useEffect, useState } from "react";
import UserForm from "../../components/UserForm/UserForm";
import { UserContext } from "../../context/UserContext";
import type { User } from "../../types/User";
import { useNavigate, useParams } from "react-router-dom";

function EditView() {
  const [editUser, setEditUser] = useState<User | undefined>();

  const { users, usersDispatch } = useContext(UserContext);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const user = users.find((user: { id: string }) => "" + user.id === id);
    setEditUser(user);
  }, [users, id]);

  function updateUser(user: User) {
    usersDispatch({ type: "UPDATE_USER", user: user });
    alert("Updated User");
    navigate(-1);
  }

  function displayUserForm() {
    if (editUser) {
      return (
        <>
          <UserForm user={editUser} onSubmit={() => {}} />
        </>
      );
    } else {
      return "User not found";
    }
  }
  return displayUserForm();
}

export default EditView;
