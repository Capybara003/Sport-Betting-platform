const baseurl = "https://29a7-197-210-54-97.ngrok-free.app/api/v1";
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

 
interface ITicketPay {
  ticketId: string;
  amount: number;
  hash: string;
}

export const regUser = async (publickey: string) => {
  try {
    const body = {
      address: publickey,
    };
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

export const fetchLeagues = async () => {
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

export const fetchTicket = async() => {
  try {
    const publickey = localStorage.getItem("publickey")
    const res = await fetch(`${baseurl}/ticket/fetch-tickets`, {
      method: "GET",
      headers: {
        secret: `${secret}`,
        "Content-Type": "application/json",
        publickey: `${publickey}`
      }
    })
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error)
  }
}

export const fetchPaidTicket = async() => {
  try {
    const publickey = localStorage.getItem("publickey")
    const res = await fetch(`${baseurl}/ticket/fetch-my-paid-tickets`, {
      method: "GET",
      headers: {
        secret: `${secret}`,
        "Content-Type": "application/json",
        publickey: `${publickey}`
      }
    })
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error)
  }
}

export const payTicket = async(body:ITicketPay) => {
  try {
    const publickey = localStorage.getItem("publickey")
    const res = await fetch(`${baseurl}/ticket/pay-ticket`, {
      method: "POST",
      headers: {
        secret: `${secret}`,
        "Content-Type": "application/json",
        publickey: `${publickey}`
      },
      body: JSON.stringify(body)
    })
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error)
  }
}

export const fetchTicketMatch = async(id:string) => {
  try {
    const publickey = localStorage.getItem("publickey")
    const res = await fetch(`${baseurl}/ticket/fetch-ticket/${id}`, {
      method: "GET",
      headers: {
        secret: `${secret}`,
        "Content-Type": "application/json",
        publickey: `${publickey}`
      }
    })
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error)
  }
}

export const createTicket = async(body:any) => {
  try {
    const publickey = localStorage.getItem("publickey")
    const res = await fetch(`${baseurl}/ticket/create`, {
      method: "POST",
      headers: {
        secret: `${secret}`,
        "Content-Type": "application/json",
        publickey: `${publickey}`
      },
      body:JSON.stringify(body)
    })
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error)
  }
}

export const fetchOdds = async(fixId:string) => {
  try {
    const publickey = localStorage.getItem("publickey")
    const res = await fetch(`${baseurl}/sport/odds/${fixId}`, {
      method: "GET",
      headers: {
        secret: `${secret}`,
        "Content-Type": "application/json",
        publickey: `${publickey}`
      },
    })
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error)
  }
}