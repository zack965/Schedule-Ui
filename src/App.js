import logo from "./logo.svg";
import "./App.css";
import Layout from "./Componenets/Layout";
import Tes01 from "./Componenets/Tests/Tes01";
import { HeightProvider } from "./Context/SqueresHeightContext";

function App() {
  return (
    <HeightProvider>
      <Layout />
    </HeightProvider>
  );
}

export default App;
