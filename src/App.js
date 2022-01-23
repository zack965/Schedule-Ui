import logo from "./logo.svg";
import "./App.css";
import Layout from "./Componenets/Layout";
import Tes01 from "./Componenets/Tests/Tes01";
import { HeightProvider } from "./Context/SqueresHeightContext";
import { DayCountProvider } from "./Context/DayCounrContext";

function App() {
  return (
    <HeightProvider>
      {/* <DayCountProvider>
        <Layout />
      </DayCountProvider> */}
      <Layout />
    </HeightProvider>
  );
}

export default App;
