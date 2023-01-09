import "./App.css";
// import { Button } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";
function App() {
  return (
    <div className="App">
      {/* <Button colorScheme="blue">Button</Button> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chats" element={<ChatPage />} />
        {/* <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Error />} /> */}
      </Routes>
    </div>
  );
}

export default App;
