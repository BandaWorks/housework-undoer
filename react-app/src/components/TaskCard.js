import React from 'react'

function TaskCard({ task }) {
    const { title, rewardPoints, colour } = task
    return (
        <div className='task-card' style={{ backgroundColor: colour }}>
            <div className='reward'><span className='reward-points'>{rewardPoints}</span></div>
            <div className='task-title'>{title}</div>
        </div>
    )
}

export default TaskCard