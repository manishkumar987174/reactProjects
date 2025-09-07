import { useState } from "react";
import Tours from "./components/Tours";
import Data from "./components/Data";

function App() {
  const [tours, setTours] = useState(Data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if (tours.length == 0) {
    return (
      <>
        <div className="refresh">
          <h2>No Tours Left</h2>
          <button className ="button-white" onClick={()=>setTours(Data)}>Refresh</button>
        </div>
      </>
    );
  }
  return (
    <>
    
      <Tours className="app" tours={tours} removeTour={removeTour} />
    </>
  );
}
export default App;
