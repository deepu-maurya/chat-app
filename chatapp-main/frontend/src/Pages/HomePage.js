import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
// import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { useNavigate } from "react-router-dom";
function Homepage() {
  const history = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    // if (user) history.push("/chats");
    if (user) history("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={2}
        // bg="white"
        w="100%"
        m="10px 0 10px 0"
        borderRadius="lg"
        borderWidth="1px"
        bg="#060822"
        color="white"
      >
        <Text fontSize="3xl" fontFamily="Work sans">
          CHAT APP
        </Text>
      </Box>
      <Box
        // bg="white"
        bg="#060822"
        w="100%"
        p={2}
        borderRadius="lg"
        borderWidth="1px"
        color="white"
      >
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
