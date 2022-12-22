'use.strict';

function fisrt() {
    // do smth
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

fisrt();
second();

function learnJs(lang, callback) {
    console.log(`i learn: ${lang}`);
    callback();
}

function done() {
    console.log('i`ve learnt it');
} 

learnJs('jabascript', done);