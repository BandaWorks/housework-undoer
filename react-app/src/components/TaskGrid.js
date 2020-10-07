import React, { useEffect, useState } from 'react'
import TaskCard from './TaskCard';

function TaskGrid({}) {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
       const taskList = [
           {
               title: 'Find dad\'s wallet',
               reward: 125
           },
           {
               title: 'Put away old toys to white boxes on the balconey',
               reward: 100
           },
           {
               title: 'Wash the dishes',
               reward: 75
           },
           {
               title: 'Make your bed in the morning',
               reward: 20
           },
           {
               title: 'Fix the pillowcase',
               reward: 50
           },
           {
               title: 'Water the plants',
               reward: 80
           },
        ] 
        setTasks(
            sortTask(taskList)
        )
    }, [])

    function sortTask(tasks) {
        if (Array.isArray(tasks)) {
            const sortFunc = (task1, task2) => task2.reward - task1.reward
            return [...tasks].sort(sortFunc)
        }
        return []
    }

    return (
        <div className='task-grid'>
            {
                tasks && tasks.map((task, i) => {
                    return <TaskCard key={i} task={task.title} reward={task.reward}/>
                })
            }
        </div>
    )
}

export default TaskGrid