export const DESC = 'DESCENDING'

export const createTaskHolder = function taskHolderFactory() {
    let tasks = []

    function addTask(taskList) {
        return function add(task) {
            tasks = [...taskList, task]
            return { tasks, add: addTask(tasks), sortBy }
        }
    }

    const sortBy = function sortTask(sortOrder) {
        if (typeof sortOrder == 'string') {
            let sortFunc
            if (sortOrder == DESC) {
                sortFunc = (task1, task2) => task2.reward - task1.reward
            }
            tasks = [...tasks].sort(sortFunc)
        }
        return { tasks, add: addTask(tasks), sortBy }
    }
    return { tasks, add: addTask(tasks), sortBy }
}