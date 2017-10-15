import test from "tape";
const requirejs = require("requirejs");

test("levels.js tests", (assert) => {
    requirejs(["../require-config", "../js/levels"], function(config, levels) {
        assert.notEqual(null, levels);
        assert.end();
    });
});