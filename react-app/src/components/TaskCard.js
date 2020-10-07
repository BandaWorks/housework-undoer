import React from 'react'

function TaskCard({ task, reward }) {

    function getColour(points) {
        points = (typeof points == 'number') ? points : 0
        if (points >= 125) {
            return '#FF467D'
        } else if (points >= 100 && points < 125) {
            return '#FF5F5F'
        } else if (points >= 75 && points < 100) {
            return '#FE8368'
        } else {
            return '#FFB966'
        } 
    }

    return (
        <div className='task-card' style={{ backgroundColor: getColour(Number(reward)) }}>
            <div className='reward'><span className='reward-points'>{reward}</span></div>
            <div className='task-title'>{task}</div>
        </div>
    )
}

export default TaskCard