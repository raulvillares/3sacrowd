import test from "tape";
import requirejs from "requirejs";

test("Allowed movements and time with ", (assert) => {
    requirejs(["./require-config.js", "./js/buttons.js"], (config, buttons) => {
        
        assert.ok(
			buttons.hasOwnProperty("showLimitDialog"),
			"Asserts that buttons.js has a property called showLimitDialog"
		);
        assert.equal(
			typeof buttons.showLimitDialog,
			"function",
			"Asserts that the value type of 'showLimitDialog' property is a function"
		);

        assert.ok(
			buttons.hasOwnProperty("showLimitTimeDialog"),
			"Asserts that buttons.js has a property called showLimitTimeDialog"
		);
        assert.equal(
			typeof buttons.showLimitTimeDialog,
			"function",
			"Asserts that the value type of 'showLimitTimeDialog' property is a function"
		);

        assert.end();
    });
});
