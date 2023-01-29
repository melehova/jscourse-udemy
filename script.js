// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }

// function pow(x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }

// console.log(pow(2, 1));
// console.log(pow(2, 2));
// console.log(pow(2, 5));
// console.log(pow(2, 8));

let students = {
    js: [{
        name: 'john',
        progress: 100
    }, {
        name: 'ivan',
        progress: 60
    }],
    html: {
        basic: [{
            name: 'peter',
            progress: 20
        }, {
            name: 'ann',
            progress: 18
        }],
        pro: [{
            name: 'sam',
            progress: 10
        }],
        semi: {
            students: [{
                name: 'test',
                progress: 100
            }]
        }
    }
};

function getTotalProgressByIteration(data) {
    let total = 0,
        students = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;
            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else {
            for (let subCourse of Object.values(course)) {
                students += subCourse.length;
                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                }
            }
        }
    }
    return total / students;
}

function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];
    } else {
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }

        return total;
    }
}

// console.log(getTotalProgressByIteration(students));
const res = getTotalProgressByRecursion(students);
// console.log(res[0] / res[1]);

function factorial(n) {
    if (!Number.isInteger(n) || Number.isNaN(n)) {
        return 'wrong input (must be integer)';
    }
    if (n <= 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));
console.log(factorial(12));
console.log((factorial(170)));
console.log(BigInt(factorial(170)));