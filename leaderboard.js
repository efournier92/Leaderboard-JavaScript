var gameInfo, teams, league, games;
var constructTeams, gameStats, analyzeGames, rankTeams, printLeaderboard;

gameInfo = function() {
  return [
   {
     homeTeam: "Patriots",
     awayTeam: "Broncos",
     homeScore: 7,
     awayScore: 3
   },
   {
     homeTeam: "Broncos",
     awayTeam: "Colts",
     homeScore: 3,
     awayScore: 0
   },
   {
     homeTeam: "Patriots",
     awayTeam: "Colts",
     homeScore: 11,
     awayScore: 7
   },
   {
     homeTeam: "Steelers",
     awayTeam: "Patriots",
     homeScore: 7,
     awayScore: 21
   }
 ]
};

getTeamNames = function(games) {
  var teamNames;
  teamNames = [];
  
  for (var i = 0; i < games.length; i++) {
    if (teamNames.indexOf(games[i].homeTeam) === -1) {
      teamNames.push(games[i].homeTeam);
    };
    if (teamNames.indexOf(games[i].awayTeam) === -1) {
      teamNames.push(games[i].awayTeam);
    };
  };
  return teamNames;
}

constructTeams = function(teamNames) {
  var teams, addWin, addLoss;

  addWin = function() {
    this.wins++;
  };

  addLoss = function() {
    this.losses++;
  };

  teams = [];
  for (var i = 0; i < teamNames.length; i++) {
    teams.push({
      name: teamNames[i],
      wins: 0,
      losses: 0,
      ranking: undefined,
      games: [],
      addWin: addWin,
      addLoss: addLoss,
    });
  }
  return teams;
}

gameStats = function(games) {

  var winner = function() {
    if (this.homeScore > this.awayScore) {
      return this.homeTeam;
    } else {
      return this.awayTeam;
    }
  };

  var loser = function() {
    if (this.homeScore > this.awayScore) {
      return this.awayTeam;
    } else {
      return this.homeTeam;
    }
  };

  var winnerScore = function() {
    if (this.homeScore > this.awayScore) {
      return this.homeScore;
    } else {
      return this.awayScore;
    }
  };

  var loserScore = function() {
    if (this.homeScore > this.awayScore) {
      return this.awayScore;
    } else {
      return this.homeScore;
    }
  };

  for (var i = 0; i < games.length; i++) {
    games[i].winner = winner;
    games[i].loser = loser;
    games[i].winnerScore = winnerScore;
    games[i].loserScore = loserScore;
  }
}

analyzeGames = function(games, teams) {
  for (var i = 0; i < games.length; i++) {
    winner = games[i].winner();
    loser = games[i].loser();
    for (var j = 0; j < teams.length; j++) {
      if (teams[j].name === winner) {
        teams[j].addWin();
      };
    };
    for (var j = 0; j < teams.length; j++) {
      if (teams[j].name === loser) {
        teams[j].addLoss();
      };
    };
  };
};

rankTeams = function(teams) {
  teams.sort(function(a,b) {return b.wins - a.wins});
  for (var i = 0; i < teams.length; i++) {
    teams[i].ranking = (i + 1);
  }
};

printLeaderboard = function(teams) {
  rankTeams(teams);

  var sepLine       = "*****************************************\n";
  var sepSpace      = "*                                       *\n";
  var printerString = "\n" + sepLine + "*   TEAM       RANK     WINS    LOSSES  *\n" + sepLine + sepSpace;
  for (var i = 0; i < teams.length; i++) {
    printerString += "* " + teams[i].name.toUpperCase()
    extraSpaces = 8 - teams[i].name.length;
    for (var j = 0; j < extraSpaces; j++) {
      printerString += " "
    }
    printerString += "  --   " + teams[i].ranking + "   --   " + teams[i].wins
      + "   --   " + teams[i].losses + "    *\n" + sepSpace;
  }
  printerString    += "*****************************************\n";
  return printerString;
}

games = gameInfo();
teamNames = getTeamNames(games);
teams = constructTeams(teamNames);
gameStats(games);
analyzeGames(games, teams);
rankTeams(teams);
leaderboard = printLeaderboard(teams);
console.log(leaderboard);
