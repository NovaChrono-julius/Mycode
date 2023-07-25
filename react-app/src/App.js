import "./App.css";
import Todo from "./components/Todo";
// import Modal from "./components/Modal";
// import Backdrop from "./components/Backdrop";
function App() {
  return (
    <div>
      <h1>TO DO</h1>
      <Todo text='first block' />
      <Todo text='two'></Todo>
      <Todo text='data'></Todo>
      {/* <Modal></Modal>
      <Backdrop></Backdrop> */}
    </div>
  );
}

export default App;
