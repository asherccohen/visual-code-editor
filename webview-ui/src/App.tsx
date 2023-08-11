import { vscode } from "./utilities/vscode";
import { VSCodeButton } from "@vscode/webview-ui-toolkit/react";
import "./App.css";

function App() {
  function handleHowdyClick() {
    vscode.postMessage({
      command: "hello",
      text: "Hey there! 🤠",
    });
  }

  return (
    <main>
      <h1>Hello Visual Code Editor!</h1>
      <VSCodeButton onClick={handleHowdyClick}>Say Hello</VSCodeButton>
    </main>
  );
}

export default App;
