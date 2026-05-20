import test from "tape";
import requirejs from "requirejs";

test("board.js movement achievement tests", (assert) => {
	requirejs.config({
		baseUrl: './'
	});
	requirejs(["js/board", "js/info", "js/sound"], function (boardModule, info, sound) {
		
		assert.ok(info, "info module should be loaded");
		assert.ok(sound, "sound module should be loaded");
		assert.ok(boardModule, "board module should be loaded");
		
		const oldDocument = global.document;
		const oldWindow = global.window;
		const oldLevel = global.level;
		const oldAudio = global.Audio;

		let soundPlayed = null;

		global.document = {
			createElement: () => ({ 
				appendChild: () => {}, 
				className: "", 
				id: "", 
				setAttribute: () => {},
				childNodes: []
			}),
			getElementById: () => ({ 
				innerText: "", 
				insertBefore: () => {},
				childNodes: [{}, {}],
				appendChild: () => {}
			})
		};
		global.window = {
			setInterval: () => 123,
			clearInterval: () => {}
		};
		global.setInterval = global.window.setInterval;
		global.clearInterval = global.window.clearInterval;
		global.Audio = class {
			constructor() {}
			play() {}
		};

		global.level = {
			filledSquares: () => 0,
			squaresToFill: 10,
			maxMovementsAchievement: 1,
			maxTimeAchievement: 100,
			pinSelected: false,
			board: {
				pinSquare: () => { assert.fail("Should not pin square"); },
				turnImage: () => { assert.fail("Should not turn image"); }
			}
		};

		const originalSoundPlay = sound.play;
		sound.play = (id) => {
			soundPlayed = id;
		};

		const board = boardModule.createEmptyBoard();

		info.generateInfo(1, 1);
		info.addMovement();
		
		const mockEvent = {
			target: {
				className: "squareImage",
				id: "imageRow0Column0"
			}
		};

		board.clicked(mockEvent);

		assert.equal(soundPlayed, sound.FORBIDDEN, "FORBIDDEN sound should be played when movement limit is reached");

		info.stop();

		sound.play = originalSoundPlay;
		global.document = oldDocument;
		global.window = oldWindow;
		global.level = oldLevel;
		global.Audio = oldAudio;

		assert.end();
	});
});
