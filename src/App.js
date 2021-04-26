import "./App.css";
import Followers from "./components/Followers/Followers";
import Header from "./components/Header/Header";
import TodayOverview from "./components/TodayOverview/TodayOverview";
import Toggle from "./components/UI/Toggle/Toggle";

function App() {
  return (
    <div className='App'>
     <Header />
     <Toggle />
     <Followers/>
     <TodayOverview />
    </div>
  );
}

export default App;
