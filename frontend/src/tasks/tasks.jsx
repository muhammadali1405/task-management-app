import "./tasks.css"

function Tasks() {
    return(
        <div className="tasks-view">


            <div className="tasks-list">
                <input className="checkbox" type="checkbox"></input> 
                <p className="task-name">task 1</p>               
            </div> <hr size="1" className="seperation" />



            <div className="tasks-list ">
                <i className="checkbox fas fa-check"></i>
                <p className="task-name done">task 4</p>               
            </div>
            <hr size="1"  className="seperation" />



        </div>
    );
}

export default Tasks;