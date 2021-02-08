import test from "tape";
import requirejs from "requirejs";

test("info.js tests", (assert) => {
	requirejs(["./require-config.js", "./js/info.js"], function (config, info) {
		assert.notEqual(null, info);

		// generateInfo
		assert.ok(
			info.hasOwnProperty("generateInfo"),
			"Asserts that info.js has a property called generateInfo"
		);
		assert.equal(
			typeof info.generateInfo,
			"function",
			"Asserts that the value type of 'generateInfo' property is a function"
		);

		// addMovement
		assert.ok(
			info.hasOwnProperty("addMovement"),
			"Asserts that info.js has a property called addMovement"
		);
		assert.equal(
			typeof info.addMovement,
			"function",
			"Asserts that the value type of 'addMovement' property is a function"
		);

		// stop
		assert.ok(
			info.hasOwnProperty("stop"),
			"Asserts that info.js has a property called stop"
		);
		assert.equal(
			typeof info.stop,
			"function",
			"Asserts that the value type of 'stop' property is a function"
		);

		// medalTime
		assert.ok(
			info.hasOwnProperty("medalTime"),
			"Asserts that info.js has a property called medalTime"
		);
		assert.equal(
			typeof info.medalTime,
			"function",
			"Asserts that the value type of 'medalTime' property is a function"
		);
		assert.equal(
			typeof info.medalTime(),
			"number",
			"Asserts that 'medalTime()' function returns a value with number type"
		);

		// movementTotal
		assert.ok(
			info.hasOwnProperty("movementTotal"),
			"Asserts that info.js has a property called movementTotal"
		);
		assert.equal(
			typeof info.movementTotal,
			"function",
			"Asserts that the value type of 'movementTotal' property is a function"
		);
		assert.equal(
			typeof info.movementTotal(),
			"number",
			"Asserts that 'movementTotal()' function returns a value with number type"
		);

		assert.end();
	});
});
