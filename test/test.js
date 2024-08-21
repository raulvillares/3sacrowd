import test from "tape";
import { isSolutionCorrect } from "../js/gameLogic.js";

test("Simple addition test", function (t) {
  t.equal(1 + 1, 2, "1 + 1 should equal 2");
  t.end();
});

test("Check if the solution is correct with more cases", function (t) {
  // Empty solution
  const emptySolution = [];
  const resultEmpty = isSolutionCorrect(emptySolution);
  t.equal(resultEmpty, false, "An empty solution should be incorrect");

  // Solution with repeated values
  const repeatedValuesSolution = [1, 1, 1];
  const resultRepeated = isSolutionCorrect(repeatedValuesSolution);
  t.equal(
    resultRepeated,
    false,
    "A solution with repeated values ​​should be incorrect"
  );

  // Solution with incorrect length
  const wrongLengthSolution = [1, 2];
  const resultWrongLength = isSolutionCorrect(wrongLengthSolution);
  t.equal(
    resultWrongLength,
    false,
    "A solution with wrong length should be wrong"
  );

  t.end();
});
