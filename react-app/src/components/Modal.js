function Modal(props) {
  function cancelHandler(params) {
    props.onCancel();
  }
  function confirmHandler(params) {
    props.onConfirm();
  }
  return (
    <div className="modal">
      <p>Are you sure ?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        Delete
      </button>
    </div>
  );
}

export default Modal;
