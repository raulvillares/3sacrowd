[![](http://img.shields.io/badge/first--timers--only-friendly-blue.svg?style=flat-square)](http://www.firsttimersonly.com/) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/c01d873f278c49dabb41b58949f59c6d)](https://www.codacy.com/app/raulvillares/vanilla_3sacrowd?utm_source=github.com&utm_medium=referral&utm_content=raulvillares/vanilla_3sacrowd&utm_campaign=Badge_Grade)

![enter image description here](https://raw.githubusercontent.com/raulvillares/3sacrowd/master/img/logos/logo2.png)

Directions: Put an alien tile in every empty square until you **fill the whole board**. But be careful! You must **<font size="3" color="red">avoid 3 adjacent same colored tiles</font>** (horizontally, vertically, or diagonally).

[Play a demo here!](https://raulvillares.github.io/3sacrowd/index.html)

Some squares are fixed and you are not allowed to put an alien tile at that location. However, you may use those squares to your advantage. Because sometimes **creativity needs constraints**. ;-)

![Sample board](https://raw.githubusercontent.com/raulvillares/3sacrowd/master/img/landing_page/demo.png)

The game is entirely developed with [Vanilla JS](http://vanilla-js.com/). [RequireJs](http://requirejs.org/) is used for modularization. The purpose of this project is to **learn** so **anybody is welcome**. Are you looking for an easy javascript project to make your first [contribution](https://akrabat.com/the-beginners-guide-to-contributing-to-a-github-project/) on GitHub? **This may be the one!**

### To write and run the tests:

1. Clone/Download the code.
2. Install the pre-requisites:  
   Run `npm install` in your terminal.
3. Make any changes as you feel necessary.
4. To run all tests, run `npm run allTests` in your terminal.
   To run a specific test, run `npm run [testName]` in your terminal.
   For example to run the test located in test/infoTest.js run `npm run infoTest`
5. Any test added, should have a test script added to the `package.json` file in the root directory, using the same naming conventions, `node run /test/[testName.js]`.

[Original idea](http://www2.stetson.edu/~efriedma/puzzle/tic/) by Erich Friedman. Each puzzle has a unique solution. All puzzles © Erich Friedman, 2010.

Art by [Kenney](https://kenney.nl/) and [Freepik](http://www.freepik.com/).
