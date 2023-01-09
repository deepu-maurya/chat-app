import React, { useState } from "react";
// import axios from "axios";
// import { useEffect } from "react";
import { Box } from "@chakra-ui/layout";
// import { useState } from "react";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";
const ChatPage = () => {
  // const [chats, setChats] = useState([]);
  // const fetchChats = async () => {
  //   const data = await axios.get("/api/chat");
  //   setChats(data.data);
  // };
  // useEffect(() => {
  //   fetchChats();
  // }, []);
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer bg="#060822" />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {/* {user && <MyChats />}
        {user && <Chatbox />} */}

        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
    //  <>
    //  {/* {chats.map((chat) => {
    //    return <div key={chat._id}>{chat.chatName}</div>;
    //  })} */}
    // </>
  );
};

export default ChatPage;
