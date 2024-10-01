import "./App.css";
import { TitleBar } from "./components/TitleBar/TitleBar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable";
import { RequestForm } from "./layout/RequestForm/RequestForm";

function App() {
  return (
    <div className="bg-transparent">
      <div className="bg-background rounded-md overflow-hidden h-screen w-screen">
        <TitleBar />
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>
            <RequestForm />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>teste</ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}

export default App;
