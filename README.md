#Leaderboard JavaScript 

This repo contains an JS application I built to practice writing logic in plain JavaScript. The concept was to input raw data about NFL games, and automatically output a clean and well-styled leaderboard based on the input data.

The leaderboard contains the following elements.
* Name
* Rank (based on wins)
* Wins (total number of wins)
* Losses (total number of losses)

My code first defines a constructor that returns an object with the leaderboard elements
Then, using the data defined in `leaderboard.js`, create an array containing these objects corresponding to each team. You should then iterate through your array and output the name, number of wins, and number of losses for each team. Additionally, teams should be ordered by rank (teams with more wins are ranked and listed higher, teams with the same numbers of wins can be ranked in any order!).

## Tips:

- Iterate through `gameInfo` to create team objects with only their names.
- Iterate through `gameInfo` again to set the number of wins and losses for each team.
- Finally, sort your team by wins and set their ranks before outputting the leaderboard stats.
- Focus on organizing your code well.

## Optional Challenge, Part 1: Making it Pretty!

Format your output such that your leaderboard prints looking (at least approxomitely) like this:

```
--------------------------------------------------
| Name      Rank      Total Wins    Total Losses |
| Patriots  1         3             0            |
| Broncos   2         1             1            |
| Colts     3         0             2            |
| Steelers  4         0             1            |
--------------------------------------------------
```

## Optional Challenge, Part 2: Retrieving More Data

Write an function on the 'Team' object named `summary` that prints the following information:

- Team's name
- Team's rank
- Team's total number of wins and losses
- Details of each game the team has played (including the name of the opposing team and the score for each team)
