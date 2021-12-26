import React,{ useState } from "react";
import Row from "./Row";

const originalData = [
  { name: "CSS", completed: true },
  { name: "JavaScript", completed: true },
  { name: "Learn React", completed: false },
  { name: "Learn mongoDB", completed: false },
  { name: "Learn Node JS", completed: false },
  ];
const App = () => {
  const [data, setData] = useState([...originalData])

  const completeTask = (row) => {
    const id = data.indexOf(row);
    let temp = [...data];
    temp[id].completed = !temp[id].completed;
    setData(temp);
  }

  return (
    <div>
      {data.map((row, i)=> <Row key={i} row={row} onButtonClick={completeTask}/>)}
    </div>
  );
};

export default App;
