import "./DeleteButton.scss";

type DeleteButtonProps = {
  onClick: () => void;
};

function DeleteButton({ onClick }: DeleteButtonProps) {
  return (
    <button className="delete-button" onClick={onClick}>
      X
    </button>
  );
}

export default DeleteButton;
