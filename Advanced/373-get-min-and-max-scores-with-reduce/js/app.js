let users = [
    {id: 1, name: 'Ali', score: 90},
    {id: 2, name: 'Amir', score: 88},
    {id: 3, name: 'Amin', score: 99},
    {id: 4, name: 'Qadir', score: 79},
    {id: 5, name: 'Shahram', score: 100},
    {id: 6, name: 'Sasan', score: 54},
]

let maxScore = users.reduce((prevScore, currentUser) => {
    // console.log(prevUser.score, currentUser.score); // 90 88 | 88 99 | ...

    if (prevScore < currentUser.score) {
        return currentUser.score
    } else {
        return prevScore
    }
    
}, 0)

let minScore = users.reduce((prevScore, currentUser) => {
    // console.log(prevUser.score, currentUser.score); // 90 88 | 88 99 | ...

    if (prevScore > currentUser.score) {
        return currentUser.score
    } else {
        return prevScore
    }
}, users[0].score)

console.log('Max Score:', maxScore);
console.log('Min Score:', minScore);