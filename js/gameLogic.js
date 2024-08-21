export function isSolutionCorrect(solution) {
  const correctSolution = [1, 2, 3];
  return JSON.stringify(solution) === JSON.stringify(correctSolution);
}
