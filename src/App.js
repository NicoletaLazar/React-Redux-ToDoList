import React from "react";
import ToDoList from "./ToDoList";
import { ChakraProvider } from "@chakra-ui/react";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <div className="App">
          <ToDoList />
          {/* <Header /> */}
          {/* <ToDoList></ToDoList> */}
          {/* <ToDoForm /> */}
        </div>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
