export const createTask = function userFactory({ title, rewardPoints = 0 }) {
    const colour = getColour(rewardPoints)
    return { title, rewardPoints, colour }
}

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