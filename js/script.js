'use.strict';

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: (plan) => {
        return `Мне ${plan.age} и я владею языками: ${plan.skills.languages.map(l => l.toUpperCase()).join(' ')}`;
    },
};

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

function showProgrammingLangs(plan) {
    let res = '';
    for (let lang in plan.skills.programmingLangs) {
        res += `Язык ${lang} изучен на ${plan.skills.programmingLangs[lang]}\n`;
    }
    return res;
}

console.log(showExperience(personalPlanPeter));
console.log(showProgrammingLangs(personalPlanPeter));

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));