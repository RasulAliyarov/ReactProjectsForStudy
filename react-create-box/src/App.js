import Form from "./components/Form";
import Box from "./components/Box";
import { useState } from "react";

function App() {
  let [boxes, setBoxes] = useState([])
  return (
    <>
      <Form boxes={boxes} setBoxes={setBoxes} />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Box boxes={boxes} />
      </div>
    </>
  );

}

export default App;
