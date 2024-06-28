// import foo from "./foo.js";

// module.exports = function() {       
//     console.log(foo);
// }   

import './style.css';

module.exports = function() {       
    import('./foo.js').then(({ default: foo }) => {
        console.log(foo);
    });
}   