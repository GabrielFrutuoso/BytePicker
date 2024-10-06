import "./App.css";
import { TitleBar } from "./components/TitleBar/TitleBar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable";
import { ValueRenderer } from "./components/ValueRenderer/ValueRenderer";
import { RequestForm } from "./layout/RequestForm/RequestForm";
import useRequestStore from "./store/RequestStore";
import { JSONTree } from "react-json-tree";
const theme = {
  scheme: "dark",
  author: "mhart",
  base00: "#00000000",
  base01: "#111111",
  base02: "#222222",
  base03: "#33333300", //root
  base04: "#444444",
  base05: "#555555",
  base06: "#666666",
  base07: "#777777",
  base08: "#888888",
  base09: "#ADD8E6", //number
  base0A: "#AAAAAA",
  base0B: "#FFFF00", //string
  base0C: "#CCCCCC",
  base0D: "#DDDDDD50", //key
  base0E: "#EEEEEE",
  base0F: "#FFFFFF",
};
function App() {
  const { data } = useRequestStore();

  const theme = {
    scheme: 'monokai',
    author: 'wimer hazenberg (http://www.monokai.nl)',
    base00: '#27282200',
    base01: '#3838300',
    base02: '#49483',
    base03: '#75715e',
    base04: '#a59f85',
    base05: '#f8f8f0',
    base06: '#f5f4f1',
    base07: '#f9f8f5',
    base08: '#f92672',
    base09: '#fd971f',
    base0A: '#f4bf75',
    base0B: '#44475A',
    base0C: '#a1efe40',
    base0D: '#66d9ef0',
    base0E: '#ae81ff0',
    base0F: '#cc66330',
  };

  return (
    <div className="bg-transparent">
      <div className="dark bg-background rounded-radius overflow-hidden h-screen w-screen">
        <TitleBar />
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>
            <RequestForm />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>
            <JSONTree
              data={data}
              theme={theme}
              hideRoot
              sortObjectKeys
              labelRenderer={([key]) => <span className="text-primary">{key}</span>}
              valueRenderer={
                (raw) => <ValueRenderer raw={raw} />
              }
              />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}

export default App;
