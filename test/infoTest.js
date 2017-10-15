import test from "tape";
const requirejs = require("requirejs");

test("info.js tests", (assert) => {
    requirejs(["../require-config", "../js/info"], function(config, info) {
        assert.notEqual(null, info);
        assert.end();
    });
});