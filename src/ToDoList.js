import React from "react";
import { useState } from "react";
import ToDoItem from "./ToDoItem";
import {
  Container,
  Button,
  Heading,
  Input,
  ButtonGroup,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, taskChecked, deleteTask } from "./todoSlice";
// import {useCallback} from "react"

function ToDoList() {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const tasks = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  function handleInputChange(event) {
    setNewTaskTitle(event.target.value);
  }

  // const handleInputChange = useCallback((event) => {
  //   setNewTaskTitle(event.target.value);
  // }, []);

  function handleAddTask() {
    if (newTaskTitle) {
      dispatch(addTask(newTaskTitle));
      setNewTaskTitle("");
    }
  }

  // deleteTask(3)
  function handleDeleteTask(id) {
    dispatch(deleteTask(id));
    // setTasks(tasks.filter(task => task.id !== id));
  }

  function handleTaskChecked(id) {
    dispatch(taskChecked(id));
    // let newTaskList = tasks.map(task => {
    //     if (task.id === id) {
    //         task.completed = checked
    //     }
    //     return task
    // })
    // setTasks(newTaskList)
  }

  return (
    <Container maxW="container.sm" centerContent>
      <div>
        <Heading mb={3} textAlign="center">
          To Do List
        </Heading>
        {tasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            deleteTask={handleDeleteTask}
            taskChecked={handleTaskChecked}
          />
        ))}
        <Input
          size="md"
          variant="filled"
          type="text"
          focusBorderColor="blue.600"
          placeholder="Enter task here"
          onChange={handleInputChange}
          value={newTaskTitle}
        />
        <ButtonGroup placement="center" display={"flex"} flexWrap={"wrap"}>
          <Button
            className="add-button"
            colorScheme="linkedin"
            variant="outline"
            size="md"
            border="3px"
            borderColor="green"
            margin={"8px"}
            onClick={() => handleAddTask()}
          >
            Add task
          </Button>
          <Button
            className="delete-button"
            colorScheme="linkedin"
            variant="outline"
            size="md"
            border="3px"
            borderColor="green"
            margin={"8px"}
            onClick={() => handleDeleteTask(tasks[0].id)}
          >
            Delete task
          </Button>
        </ButtonGroup>
      </div>
    </Container>
  );
}

export default ToDoList;
