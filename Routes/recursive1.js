const teamstructure = {
  name: "javed",
  teams: [
    {
      name: "padhy",
      teams: [
        {
          name: "yash",
          teams: [
            {
              name: "yadav",
              teams: [
                {
                  name: "bravo",
                  teams: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "osama",
      teams: [
        {
          name: "yadav",
          teams: [
            {
              name: "bravo",
              teams: [],
            },
          ],
        },
      ],
    },
  ],
};


function getTeam(teamName) {
    if (teamName.teams.length > 0) {
        teamName.teams.forEach(element => {
            console.log(element.name);
            console.log(element.teams);
            console.log(element.teams.length);
            getTeam(element);
        });
    }
}

getTeam(teamstructure)