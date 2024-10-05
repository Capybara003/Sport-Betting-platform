import { Typography, Grid, Card, CardContent, Container, Box } from "@mui/material";
// import odds from "../odds.json";
import {fetchOdds} from "../action/action"
import Spiner from "../component/spinner"
import {useEffect, useState} from "react"
import Toast from "./Toast"
import { SnackbarProvider, useSnackbar } from 'notistack'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Odds({ team, fixId }) {
  const [loading, setLoading] = useState(false)
  const [odds, setOdds] = useState(null)
  const [show, setShow] = useState(false)
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  // const notify = () => ;

  const fixtureId = team?.fixture.id;
  
  useEffect(() => {
    handleFetchOdd()
  }, [])

  const handleFetchOdd = async() => {
    try{
        setLoading(true)
      const odd = await fetchOdds(fixId)
      console.log("old", odds)
      setOdds(odd.data)
      console.log(odd)
      
    }catch(error){
      console.log(error)
    }finally {
     setLoading(false)
    }
  }

  if(!odds) return <h1>No odd Found</h1>
  const { away, home } = team?.teams;
  const { logo: firstTeamLogo, name: firstTeam } = home;
  const { logo: secondTeamLogo, name: secondTeam } = away;
  const { league, fixture, bookmakers } = odds.response[0];
  const bookmaker = bookmakers[0];
  const sortedBets = bookmaker.bets.sort((a, b) => {
    if (a.name === "Match Winner") return -1;
    if (a.name === "Double Chance - First Half") return -1;
    return 1;
  });

  const handleOddClick = (value, odd) => {
    const existingData = localStorage.getItem("book");
    const newOdd = {
      option: value,
      firstTeam,
      firstTeamLogo,
      secondTeam,
      secondTeamLogo,
      matchDate: team.fixture.date,
      fixtureId,
    };

    if (existingData) {
      const oddsArray = JSON.parse(existingData);

      const existingIndex = oddsArray.findIndex(odd => odd.fixtureId === fixtureId);

      if (existingIndex !== -1) {
        oddsArray[existingIndex] = newOdd;
      } else {
        oddsArray.push(newOdd);
      }

      localStorage.setItem("book", JSON.stringify(oddsArray));
    } else {
      localStorage.setItem("book", JSON.stringify([newOdd]));
    }
    enqueueSnackbar('I love hooks')
    alert("Add odd")
  };

  return (
    <Container maxWidth="lg">
      <Box mb={4}>
        <Typography variant="h6" align="center" color="primary" gutterBottom>
          {league.name} - {new Date(fixture.date).toLocaleString()}
        </Typography>
        <Typography variant="h6" align="center" color="primary" gutterBottom>
          Bookmaker: {bookmaker.name}
        </Typography>

             
         <div className="flex">
         <Typography variant="body1" align="center" color="primary" gutterBottom>
          {firstTeam}
        </Typography>
        <Typography variant="body2" align="center" color="white" gutterBottom sx={{margin: "0px 20px"}}>
          Vs
        </Typography>
        <Typography variant="body1" align="center" color="primary" gutterBottom>
          {secondTeam}
        </Typography>
        </div>    
      </Box>

      {sortedBets.map((bet, index) => (
        <Box key={index} mb={4}>
          <Typography className="text-sm" color="white" gutterBottom>
            {bet.name}
          </Typography>

          <Grid container spacing={2}>
            {bet.values.map((option, idx) => (
              <Grid item xs={12} sm={6} md={4} lg={2.4} key={idx}>
                <Card
                  onClick={() => handleOddClick(option.value, option.odd)}
                  style={{
                    width: "100%",
                    height: "100%",
                    cursor: "pointer",
                    backgroundColor: "#330034",
                  }}
                >
                  <CardContent style={{ padding: "5px", textAlign: "center" }}>
                    <Typography variant="body2" color="#7F0376">
                      {option.value}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="primary"
                      style={{ fontSize: "1rem" }}
                    >
                      {option.odd}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}

      <Spiner loading={loading}/>
      {show && <Toast message={"Added to book"}/>}
    </Container>
  );
}
