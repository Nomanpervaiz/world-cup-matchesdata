function MatchesData(
  teamOneName,
  teamTwoName,
  winner,
  teamScore1 ,
  teamScore2 ,
  matchstatuss
) {
  {
    this.teamOne = teamOneName;
    this.scoreTeamOne = teamScore1;
    this.teamTwo = teamTwoName;
    this.scoreTeamTwo = teamScore2;
    this.winnerTeam = winner;
    this.statuss = matchstatuss;
  }
}

//  caliing function
let match24 = new MatchesData(
  "Namibia",
  "Australia",
  "Aus won by 9 wickets (86 balls left)",
  "72 (17)",
  "74/1 (5.4)",
  "yesterday"
);
let match25 = new MatchesData(
  "United states",
  "India",
  "IND won by 7 wickets (10 balls left)",
  "110/8 (20)",
  "111/3 (18.2)",
  "yesterday"
);
let match26 = new MatchesData(
  "West Indies",
  "New Zealand",
  "WI won by 13 runs",
  "149/9 (20)",
  "136/9 (20)",
  "Today"
);
let match27 = new MatchesData(
  "Bangladesh",
  "Netherland",
  "Start at 7:30 pm",
  "undefined",
  "undefined",
  "Today"
);
let match28 = new MatchesData(
  "England",
  "Oman",
  "Starts at 12:00 am ",
  "undefined",
  "undefined",
  "Tomorrow"
);
let match29 = new MatchesData(
  "Afganistan",
  "Papua New Guinea",
  "Starts at 5:30 am ",
  "undefined",
  "undefined",
  "Tomorrow"
);

// col 1
let col1 = document.getElementById("col1");
col1.innerHTML = `
<p>Group stage T20 27 of 55 <span class = 'status' >${match27.statuss}</span></p>
  <span><img width=20 height = 20  src="img/download(12).png" alt="">
  <p>  ${match27.teamOne}</p></span>
  <span><img width=20  height = 20 src="img/download (11).png" alt="">
<p>  ${match27.teamTwo}</p></span>
<p>${match27.winnerTeam}</p>
`;

// col 2
let col2 = document.getElementById("col2");
col2.innerHTML = `
 <p>Group stage T20 28 of 55 <span class = 'status' >${match28.statuss}</span></p>
   <span><img width=20  height = 20 src="img/download (1).png" alt="">
 <p>${match28.teamOne}</p></span>
   <span><img width=20  height = 20 src="img/download (2).png" alt=""> 
 <p>${match28.teamTwo}</p></span>
 <p>${match28.winnerTeam}</p>`;

// col 3
let col3 = document.getElementById("col3");
col3.innerHTML = `<p>Group stage T20 29 of 55 <span class = 'status' >${match29.statuss}</span></p>
  <span><img width=20  height = 20 src="img/download (5).png" alt="">
<p>${match29.teamOne}</p></span>
  <span><img width=20  height = 20 src="img/download (6).png" alt="">
  <p>${match29.teamTwo}</p></span>
  <p>${match29.winnerTeam}</p>`;

// col 4
let col4 = document.getElementById("col4");
col4.innerHTML = `
<p>Group stage T20 26 of 55 <span class = 'status' >${match26.statuss}</span></p>
<span><img width=20  height = 20 src="img/download (4).png" alt="">
<p>${match26.teamOne}<span class='score1'>${match26.scoreTeamOne}</span></p></span>
<span><img width=20  height = 20 src="img/download (3).png" alt="">
 <p>${match26.teamTwo}<span class='score2'> ${match26.scoreTeamTwo}</span></p></span>
 <p>${match26.winnerTeam}</p>`;

// col 4
let col5 = document.getElementById("col5");
col5.innerHTML = `
<p>Group stage T20 25 of 55 <span class = 'status' >${match25.statuss}</span></p>
<span><img width=20  height = 20 src="img/download (7).png" alt="">
<p>${match25.teamOne}<span class='score3'>${match25.scoreTeamOne}</span></p></span>
<span><img width=20  height = 20 src="img/download (8).png" alt="">
<p>${match25.teamTwo}<span class='score4'> ${match25.scoreTeamTwo}</span></p></span>
<p>${match25.winnerTeam}</p>`;

// col 4
let col6 = document.getElementById("col6");
col6.innerHTML = `
<p>Group stage T20 24 of 55 <span class = 'status' >${match24.statuss}</span></p>
<span><img width=20  height = 20 src="img/download (9).png" alt="">
<p>${match24.teamOne}<span class='score5'>${match24.scoreTeamOne}</span></p></span>
<span><img width=20  height = 20 src="img/download (3).png" alt="">
 <p>${match24.teamTwo}<span class='score6'> ${match24.scoreTeamTwo}</span></p></span>
 <p>${match24.winnerTeam}</p>`;
