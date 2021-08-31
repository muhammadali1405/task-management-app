import "./App.css";

function App() {
  return (
    <div className="main">
      <Topbar />
      <hr size="1" />
      <Addtask />
    </div>
  );
}

function Topbar() {
  return (
    <div className="top-bar">
      <div className="title">
        <div className="top-title">TASKS</div>
        <div className="bottom-title">
          TASK &nbsp;
          <i class="fas fa-caret-down"></i>
        </div>
      </div>
      <div className="close-icon">
        <i class="fas fa-times"></i>
      </div>
    </div>
  );
}

function Addtask() {
  return (
    <div className="add-task">
      <div className="add-icon">
        <span>
          <i class="fas fa-plus"></i>
        </span> &nbsp;
        <input className="input-box" placeholder="Add a Task" />
      </div>
      <div className="three-dots">
        <i class="fas fa-ellipsis-v"></i>
      </div>
    </div>
  )
}



export default App;
