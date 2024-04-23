import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: 1,
      text: 'Wake-up at 7',
      completed: false
    },
    {
      id: 2,
      text: 'Take a shower',
      completed: false
    },
    {
      id: 3,
      text: 'Eat healthy breakfast',
      completed: false
    },
    {
      id: 4,
      text: 'Go to gym',
      completed: true
    },
    {
      id: 5,
      text: 'Walk the dog',
      completed: false
    }
  ],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        // id = id + 1
        text: action.payload,
        completed: false
      };
      state.push(newTask);
      // setTasks([...tasks, newTask]);
      // setNewTaskTitle('');
    },
    taskChecked: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
      //let newTaskList = tasks.map(task => {
      //       if (task.id === id) {
      //         task.completed = checked
      //     }
      //     return task
      // })
      // setTasks(newTaskList)
    },

    deleteTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
      //setTasks(tasks.filter(task => task.id !== id));
    },
  },
});
export const { addTask, taskChecked, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;