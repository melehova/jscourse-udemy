'use.strict';

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const res = [];
    for (let i = 0; i < arr.length; i += 3) {
        res.push(arr.slice(i, i+3));
    }
    const last = res[res.length-1];
    if (last.length === 3) {
        res.push('Оставшиеся студенты: -');
    } else if (last.length < 3) {
        res.splice(res.length-1, 1, `Оставшиеся студенты: ${last.join(', ')}`)
    }
    return res;
}

console.log(sortStudentsByGroups(students));