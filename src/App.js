import "./App.css";
import Followers from "./components/Followers/Followers";
import Header from "./components/Header/Header";
import Toggle from "./components/UI/Toggle/Toggle";

function App() {
  return (
    <div className='App'>
     <Header />
     <Toggle />
     <Followers/>
    </div>
  );
}

export default App;
