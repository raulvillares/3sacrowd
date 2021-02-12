import test from "tape";
import requirejs from "requirejs";

test("squareImages.js tests", (assert) => {
	requirejs(
		["./require-config.js", "./js/squareImages.js"],
		function (config, square) {
			assert.notEqual(null, square);

			// imageValuesEquivalent
			assert.ok(
				square.hasOwnProperty("imageValuesEquivalent"),
				"Asserts that squareImages.js has a property called imageValuesEquivalent"
			);
			assert.equal(
				typeof square.imageValuesEquivalent,
				"function",
				"Asserts that the value type of property 'imageValuesEquivalent' is a function"
			);
			assert.equal(
				typeof square.imageValuesEquivalent(),
				"boolean",
				"Asserts that 'imageValuesEquivalent()' function returns a value with boolean type"
			);

			// generateImagePath
			assert.ok(
				square.hasOwnProperty("generateImagePath"),
				"Asserts that squareImages.js has a property called generateImagePath"
			);
			assert.equal(
				typeof square.generateImagePath,
				"function",
				"Asserts that the value type of property 'generateImagePath' is a function"
			);

			// getPosition
			assert.ok(
				square.hasOwnProperty("getPosition"),
				"Asserts that squareImages.js has a property called getPosition"
			);
			assert.equal(
				typeof square.getPosition,
				"function",
				"Asserts that the value type of property 'getPosition' is a function"
			);

			// nextImage
			assert.ok(
				square.hasOwnProperty("nextImage"),
				"Asserts that squareImages.js has a property called nextImage"
			);
			assert.equal(
				typeof square.nextImage,
				"function",
				"Asserts that the value type of property 'nextImage' is a function"
			);

			// pinnableImage
			assert.ok(
				square.hasOwnProperty("pinnableImage"),
				"Asserts that squareImages.js has a property called pinnableImage"
			);
			assert.equal(
				typeof square.pinnableImage,
				"function",
				"Asserts that the value type of property 'pinnableImage' is a function"
			);

			assert.end();
		}
	);
});
