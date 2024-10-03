const baseurl = "https://gd4rlkmw-8081.uks1.devtunnels.ms/api/v1";
const secret = "x3FGFJ4829033HGBSOGGGSMVDDHq";

interface IFixtures {
 leagueId: number,
 name: string,
}

interface IFixtureRequest {
  leaguesId: IFixtures[]
}

interface ITeamsBody {
  fixtureId: string,
  homeTeamId: string,
  homeTeamName: string,
  awayTeamId: string,
  awayTeamName: string,
 }

export const regUser = async (publickey: string) => {
  try {
    const body = {
      address: publickey,
    };
    console.log(body);
    const res = await fetch(`${baseurl}/auth/set-identity`, {
      method: "POST",
      headers: {
        secret: `${secret}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchLeagues = async (publickey: string) => {
  try {
    const res = await fetch(`${baseurl}/sport/leagues`, {
      method: "GET",
      headers: {
        secret: `${secret}`,
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error)
  }
};

export const fetchFixtures = async(body: IFixtureRequest) => {
   
    try {
        const res = await fetch(`${baseurl}/sport/fixtures`, {
          method: "POST",
          headers: {
            secret: `${secret}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body)
        });
    
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error)
      }
    
}

export const fetchFootballEvents = async() => {
    try {
        const res = await fetch(`${baseurl}/sport/events`, {
          method: "GET",
          headers: {
            secret: `${secret}`,
            "Content-Type": "application/json",
          },
        });
    
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error)
      }
}


export const fetchFootballTeams = async(body:ITeamsBody) => {
  try {
    const res = await fetch(`${baseurl}/sport/team-stats`, {
      method: "POST",
      headers: {
        secret: `${secret}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    })
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error)
  }
}