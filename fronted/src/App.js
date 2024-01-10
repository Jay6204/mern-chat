import "./App.css";
import { Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ChatPage from "./Pages/ChatPage";

function App() {
  return (
    <div className="App">
      <Route path="/" exact render={() => <Homepage />} />
      <Route path="/chats" render={() => <ChatPage />} />
    </div>
  );
}

export default App;
