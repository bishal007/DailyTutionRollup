var foo = "Hello hi Rollup";

var foo$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': foo
});

// import foo from "./foo.js";

module.exports = function() {       
    Promise.resolve().then(function () { return foo$1; }).then();
    console.log(foo);
};
