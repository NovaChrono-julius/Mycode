import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
function Todo(props) {
  const [showModal, setShowModal] = useState(false);
  const handleDelete = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
      {showModal && <Modal onCancel={closeModal} onConfirm={closeModal} />}
      {showModal && <Backdrop onCancel={closeModal} />}
    </div>
  );
}
export default Todo;
