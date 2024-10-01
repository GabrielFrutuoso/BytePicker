import "./App.css";
import { TitleBar } from "./components/TitleBar/TitleBar";

function App() {

  return (
    <div className="bg-transparent">
      <div className="bg-background rounded-md overflow-hidden h-screen w-screen">
        <TitleBar />
      </div>
    </div>
  );
}

export default App;
