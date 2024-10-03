import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { formatDate } from "../utils/date.formatter";
import { fetchFootballTeams } from "../action/action";
import statistics from "../stats.json";
import TeamPitch from "../utils/insertTeam";
import FullTableWith from "../component/stats";
import LineUpTable from "../component/lineup"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{
        height: "100%", // Ensure the TabPanel takes the available height
        overflowY: "auto", // Enable vertical scrolling when content exceeds
      }}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs({ fixtures }) {
  const [value, setValue] = React.useState(0);
  const [lineup, setLineUp] = React.useState(null);
  const [stats, setStats] = React.useState(null)
  const [h2h, setH2h] = React.useState(null)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTeamId = async (fixture) => {
    const firstTeam = {
      teamId: fixture.teams.home.id,
      teamName: fixture.teams.home.name,
    };

    const secondTeam = {
      teamId: fixture.teams.away.id,
      teamName: fixture.teams.away.name,
    };

    const body = {
      fixtureId: fixture.fixture.id,
      league: fixture.league.id,
      contoury: fixture.league.country,
      teams: [firstTeam, secondTeam],
    };

    setLineUp(statistics.data.lineup);
    setStats(statistics.data.statistics)
    setH2h(statistics.data.head2head)
    // console.log(statistics.data.head2head)
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "",
        display: "flex",
        height: "90%",
        marginTop: "10px",
      }}
    >
      {/* Tabs Panel */}
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider", width: "30%" }}
      >
        {fixtures?.map((league, index) => (
          <div className="w-full" key={index}>
            <div className="flex">
              <Avatar
                alt="League Logo"
                src={league.matches.response[0].league.logo}
                sx={{ width: 28, height: 28, bgcolor: "#fff" }}
              />
              <Typography variant="body1" marginLeft="10px" color="white">
                {league.league}
              </Typography>
            </div>

            {league.matches.response.map((match, matchIdx) => {
              const time = formatDate(match.fixture.date);
              return (
                <div className="w-full" key={matchIdx}>
                  <Tab
                    sx={{ color: "#fff", width: "55vh", marginLeft: "-25px" }}
                    label={
                      <div className="bg-[#330034] py-[10px] px-[10px] w-full">
                        <div className="flex justify-between mb-[5px]">
                          <div className="flex">
                            <Avatar
                              alt="Home Team Logo"
                              src={match.teams.home.logo}
                              sx={{ width: 20, height: 20, bgcolor: "#fff" }}
                            />
                            <Typography
                              variant="body1"
                              marginLeft="10px"
                              fontSize={11}
                            >
                              {match.teams.home.name}
                            </Typography>
                          </div>

                          <b className="mx-[15px]">Vs</b>

                          <div className="flex">
                            <Avatar
                              alt="Away Team Logo"
                              src={match.teams.away.logo}
                              sx={{ width: 20, height: 20, bgcolor: "#fff" }}
                            />
                            <Typography
                              variant="body1"
                              marginLeft="10px"
                              fontSize={11}
                            >
                              {match.teams.away.name}
                            </Typography>
                          </div>
                        </div>
                        <div>
                          <i>{time}</i>
                        </div>
                      </div>
                    }
                    {...a11yProps(matchIdx)}
                    onClick={() => handleTeamId(match)}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </Tabs>

      {/* TabPanel for content */}
      <TabPanel
        value={value}
        index={0}
        variant="scrollable"
        sx={{ borderRight: 1, borderColor: "divider" }}
        orientation="vertical"
      >
      <FullTableWith stats={stats} lineup={lineup} h2h={h2h}/>

      </TabPanel>
    </Box>
  );
}
