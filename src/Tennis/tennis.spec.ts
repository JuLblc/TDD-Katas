import { OnGoingGame } from "./tennis";

describe("onGoingGame", () => {
  test("initial score should be '0:0'", () => {
    // GIVEN
    const game = new OnGoingGame();
    // WHEN
    const actual = game.displayScore();

    // THEN
    const expected = "0:0";
    expect(actual).toEqual(expected);
  });

  test("if player1 win the first point, should return '15:0'", () => {
    // GIVEN
    const game = new OnGoingGame();
    game.player1WinPoint();
    // WHEN
    const actual = game.displayScore();

    // THEN
    const expected = "15:0";
    expect(actual).toEqual(expected);
  });

  test("if player1 win the 2nd point, should return '30:0'", () => {
    // GIVEN
    const game = new OnGoingGame();
    game.player1WinPoint();
    game.player1WinPoint();
    // WHEN
    const actual = game.displayScore();

    // THEN
    const expected = "30:0";
    expect(actual).toEqual(expected);
  });

  test("if player1 win the 3rd point, should return '40:0'", () => {
    // GIVEN
    const game = new OnGoingGame();
    game.player1WinPoint();
    game.player1WinPoint();
    game.player1WinPoint();

    // WHEN
    const actual = game.displayScore();

    // THEN
    const expected = "40:0";
    expect(actual).toEqual(expected);
  });

  test("if player1 win the 4th point, should return 'Game Player1'", () => {
    // GIVEN
    const game = new OnGoingGame();
    game.player1WinPoint();
    game.player1WinPoint();
    game.player1WinPoint();
    game.player1WinPoint();

    // WHEN
    const actual = game.displayScore();

    // THEN
    const expected = "Game Player1";
    expect(actual).toEqual(expected);
  });

  test("if player2 also win 3 points, should return 'deuce'", () => {
    // GIVEN
    const game = new OnGoingGame();
    game.player1WinPoint();
    game.player1WinPoint();
    game.player1WinPoint();

    game.player2WinPoint();
    game.player2WinPoint();
    game.player2WinPoint();

    // WHEN
    const actual = game.displayScore();

    // THEN
    const expected = "deuce";
    expect(actual).toEqual(expected);
  });

  test("if player1 win a 4th points, should return 'Advantage Player1'", () => {
    // GIVEN
    const game = new OnGoingGame();
    game.player1WinPoint();
    game.player1WinPoint();
    game.player1WinPoint();

    game.player2WinPoint();
    game.player2WinPoint();
    game.player2WinPoint();

    game.player1WinPoint();

    // WHEN
    const actual = game.displayScore();

    // THEN
    const expected = "Advantage Player1";
    expect(actual).toEqual(expected);
  });

  test("if player2 win the next point, should return 'deuce'", () => {
    // GIVEN
    const game = new OnGoingGame();
    game.player1WinPoint();
    game.player1WinPoint();
    game.player1WinPoint();

    game.player2WinPoint();
    game.player2WinPoint();
    game.player2WinPoint();

    game.player1WinPoint();
    game.player2WinPoint();

    // WHEN
    const actual = game.displayScore();

    // THEN
    const expected = "deuce";
    expect(actual).toEqual(expected);
  });

  test("if player1 win the point after deuce, should return 'Advantage Player1'", () => {
    // GIVEN
    const game = new OnGoingGame();
    game.player1WinPoint();
    game.player1WinPoint();
    game.player1WinPoint();

    game.player2WinPoint();
    game.player2WinPoint();
    game.player2WinPoint();

    game.player1WinPoint();
    game.player2WinPoint();

    game.player1WinPoint();

    // WHEN
    const actual = game.displayScore();

    // THEN
    const expected = "Advantage Player1";
    expect(actual).toEqual(expected);
  });

  test("if player1 win the point after 'Advantage Player1', should return 'Game Player1'", () => {
    // GIVEN
    const game = new OnGoingGame();
    game.player1WinPoint();
    game.player1WinPoint();
    game.player1WinPoint();

    game.player2WinPoint();
    game.player2WinPoint();
    game.player2WinPoint();

    game.player1WinPoint();
    game.player2WinPoint();

    game.player1WinPoint();
    game.player1WinPoint();

    // WHEN
    const actual = game.displayScore();

    // THEN
    const expected = "Game Player1";
    expect(actual).toEqual(expected);
  });
});
