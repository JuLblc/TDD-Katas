type Score = "0" | "15" | "30" | "40";
type Player = {
  score: Score;
  isWinner: boolean;
  hasAdvantage: boolean;
};
export class OnGoingGame {
  player1: Player;
  player2: Player;
  isDeuce: boolean;

  constructor() {
    this.player1 = {
      score: "0",
      isWinner: false,
      hasAdvantage: false,
    };
    this.player2 = {
      score: "0",
      isWinner: false,
      hasAdvantage: false,
    };
    this.isDeuce = false;
  }

  displayScore = () => {
    const { player1, player2, isDeuce } = this;

    return player1.hasAdvantage
      ? "Advantage Player1"
      : player2.hasAdvantage
      ? "Advantage Player2"
      : player1.isWinner
      ? "Game Player1"
      : player2.isWinner
      ? "Game Player2"
      : isDeuce
      ? "deuce"
      : `${player1.score}:${player2.score}`;
  };

  winPoint = ({ winner, looser }: { winner: Player; looser: Player }) => {
    if (winner.score === "40" && winner.hasAdvantage) {
      winner.isWinner = true;
      winner.hasAdvantage = false;
      return;
    }

    if (winner.score === "40" && looser.hasAdvantage) {
      looser.hasAdvantage = false;
      this.isDeuce = true;
      return;
    }

    if (winner.score === "40" && this.isDeuce) {
      winner.hasAdvantage = true;
      this.isDeuce = false;
      return;
    }

    if (winner.score === "40") {
      winner.isWinner = true;
    }

    if (winner.score === "30" && looser.score === "40") {
      this.isDeuce = true;
    }

    if (winner.score === "30") {
      winner.score = "40";
    }

    if (winner.score === "15") {
      winner.score = "30";
    }

    if (winner.score === "0") {
      winner.score = "15";
    }
  };

  player1WinPoint = () => {
    this.winPoint({ winner: this.player1, looser: this.player2 });
  };

  player2WinPoint = () => {
    this.winPoint({ winner: this.player2, looser: this.player1 });
  };
}
