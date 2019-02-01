const test = require('tape');
const requirejs = require("requirejs");

test("sound.js Varaible tests", (assert) => {
    requirejs(["../require-config.js", "../js/sound.js"], function(config, sound) {
        assert.notEqual(null, sound);
        assert.true(sound.SOUNDS.map(element => typeof(element) === 'string'), 'Every element in the array should be a string');
        assert.is(3, sound.FORBIDDEN, 'Forbidden should be a value of 3');
        assert.is(4, sound.PINNED, 'Pinned should be a value of 4');
        assert.is(5, sound.UNPINNED, 'Unpinned should be a value of 5');
        assert.is(6, sound.UNDO, 'Undo hould be a value of 6');
        assert.is(7, sound.COMPLETED, 'Completed should be a value of 7');
        assert.notEqual(null, sound.play);
        assert.end();
    });
});

test("sound.js audio file address tests", (assert) => {
    requirejs(["../require-config.js", "../js/properties", "../js/sound.js"], function(config, properties, sound) {
        for (let i = 0; i < sound.SOUNDS.length; i++) {
          let address = '../' + properties.SOUNDS_FOLDER + sound.SOUNDS[i] + properties.SOUNDS_EXTENSION;
          assert.is('string', typeof(address), 'Address should be a string');
        }
        assert.end();
    });
});
