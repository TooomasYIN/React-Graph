import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import ComponentBarChart from './Components/ComponentBarChart';
import BarChart from './Components/BarChart';
import ScatterChart from './Components/ScatterChart';
import PieChart from './Components/PieChart';
import { Idata, csv2JSON } from './Utilies/utilies';

const sampleInput = "A1 ,10, 20, 30\n\A2 ,45, 20, 23\n\A3 ,12, 25, 20\n\A4 ,140, 20, 30\n\A5 ,45, 270, 23\n\A6 ,132, 25, 20\n\A7 ,10, 270, 30\n\A8 ,45, 210, 23\n\A9 ,122, 25, 20\n\A10 ,110, 20, 30\n\A11 ,45, 260, 23\n\A12 ,172, 25, 200"

function App() {
  const [graph, setGraph] = useState<number>(0);
  const [textAreaInput, setTextAreaInput] = useState<string>(sampleInput);
  const [data, setData] = useState<Idata[]>([
    { name: "A1", value: [10, 20, 30] },
  ])
  const ref = useRef<any>()

  useEffect(() => {
    let tmp = csv2JSON(textAreaInput);
    setData(tmp);
  }, [textAreaInput])

  const handleSubmitButton = () => {
    if (ref.current.value !== "")
      setTextAreaInput(ref.current.value)
  }

  const graphList = [
    <ComponentBarChart data={data} />,
    <BarChart data={data} />,
    <ScatterChart data={data} />,
    <PieChart data={data} />
  ]

  return (
    <div className="App">
      <div className="header">
        React Graph
        {graphList.map((d, i) =>
        <button onClick={() => setGraph(i)}>{d.type.name}</button>)}
      </div>

      <div className="container">
        <div className="left">
          <textarea ref={ref} defaultValue={textAreaInput} />
          <button onClick={() => handleSubmitButton()}>Submit</button>
        </div>
        {graphList[graph]}
      </div>
    </div>
  );
}

export default App;
