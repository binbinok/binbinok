// console.log('home');

// class Log {
//     constructor() {
//         console.lo('error')
//     }
// }

// let log = new Log();
import 'bootstrap';
let xhr = new XMLHttpRequest();

xhr.open('GET', '/api/user', true);

xhr.onload = function() {
    console.log(xhr.response);
}

xhr.send();