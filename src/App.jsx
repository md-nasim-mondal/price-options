// import DaisyNav from "./components/DaisyNav/DaisyNav"; 

import LineChart from "./components/LineChart/LineChart"
import NavBar from "./components/NavBar/NavBar"
import PriceOptions from "./components/PriceOptions/PriceOptions"

function App() {
  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <NavBar></NavBar>
      <h1 className="text-7xl bg-rose-600">Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </>
  )
}

export default App
