'use strict';

// import foo from "./foo.js";

// module.exports = function() {       
//     console.log(foo);
// }   


module.exports = function() {       
    Promise.resolve().then(function () { return require('./foo-b8c3806d.js'); }).then(({ default: foo }) => {
        console.log(foo);
    });
};
