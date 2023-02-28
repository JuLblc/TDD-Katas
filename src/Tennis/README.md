# tennis

A tennis match is composed of points, games and sets. The rules of counting points within a game are exposed next. Your task is to implement this logic and expose a method which returns the current score as a string for display.

- Points are referred to as “love”, “15”, “30” and “40”
- If a player has scored 40 and they score next, they win the game.
- However: if both players have scored 40, the game is said to be “deuce”.
- If the game is deuce, the next scoring player has “advantage”.
- If the player with advantage scores next, they win the game.
- If the player without advantage scores next, the game is back to deuce.
