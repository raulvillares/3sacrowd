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

		assert.equal(
			info.movementTotal(), 
			0, 
			'Should start with 0 movements'
		);

		info.addMovement();
		
		assert.equal(
			info.movementTotal(), 
			1, 
			'Should have 1 movement'
		);

		// timeTotal
		assert.ok(
			info.hasOwnProperty("timeTotal"),
			"Asserts that info.js has a property called timeTotal"
		);
		assert.equal(
			typeof info.timeTotal,
			"function",
			"Asserts that the value type of 'timeTotal' property is a function"
		);
		assert.equal(
			typeof info.timeTotal(),
			"number",
			"Asserts that 'timeTotal()' function returns a value with number type"
		);

		// Time limit assertion
		assert.equal(
			info.timeTotal(),
			0,
			'Should start with 0 seconds for time limit tracking'
		);

		const oldDocument = global.document;
		const oldWindow = global.window;
		const oldInterval = global.setInterval;
		const oldClearInterval = global.clearInterval;

		global.document = {
			createElement: () => ({ appendChild: () => {}, className: "", id: "" }),
			getElementById: () => ({ innerText: "" })
		};
		global.window = {
			setInterval: setInterval,
			clearInterval: clearInterval
		};
		global.setInterval = setInterval;
		global.clearInterval = clearInterval;

		global.level = { maxTimeAchievement: 1 };
		info.generateInfo(1, 19); 
		
		assert.equal(info.timeTotal(), 0, "Time should start at 0");
		
		setTimeout(() => {
			assert.ok(info.timeTotal() <= 1, "Time should NOT exceed maxTimeAchievement (1)");

			info.stop();

			// Restore globals
			global.document = oldDocument;
			global.window = oldWindow;
			global.setInterval = oldInterval;
			global.clearInterval = oldClearInterval;

			assert.end();
		}, 2000);
	});
});
