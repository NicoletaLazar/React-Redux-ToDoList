import React from 'react';
import { HStack, Checkbox, Button } from '@chakra-ui/react'

function ToDoItem({ task, deleteTask, taskChecked }) {

    return (
        <HStack>
            <Checkbox size='md' colorScheme='purple' iconColor='blue' iconSize='2rem' iconborder='0.5px' borderColor='black'
                isChecked={task.completed}
                onChange={(e) => taskChecked(task.id)}>
            </Checkbox>
            <p>{task.id + ". " + task.text}</p>
            <Button colorScheme='teal' variant='ghost' size='xs' border='2px'
                borderColor='green.500' onClick={() => deleteTask(task.id)}>
                Delete
            </Button>
        </HStack>
    );
}

export default ToDoItem;