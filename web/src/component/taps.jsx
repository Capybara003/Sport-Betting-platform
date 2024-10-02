import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { formatDate } from "../utils/date.formatter";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log("fixtures", fixtures);

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "",
        display: "flex",
        height: "85%",
        marginTop: "30px",
      }}
    >
      {/* <Typography sx={{color:"white", textAlign:"center"}}>England</Typography> */}
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider", width: "30%" }}
      >

        <Typography className="text-white">Matches</Typography>
        {fixtures?.map((league) => {
          console.log(league);
          return (
            <div className="w-full">
              #{" "}
              <div className="flex">
                <Avatar
                  alt="Remy Sharp"
                  src={league.matches.response[0].league.logo}
                  sx={{ width: 28, height: 28, bgcolor: "#fff" }}
                />
                <Typography variant="body1" marginLeft="10px" color="white">
                  {league.league}
                </Typography>

                <div></div>
              </div>
              {league.matches.response.map((match) => {
                const time = formatDate(match.fixture.date);
                return (
                  <div className="w-full">
                    <Tab
                      sx={{ color: "#fff", width: "55vh", marginLeft: "-25px" }}
                      label={
                        <div className="bg-[#330034] py-[10px] px-[10px] w-full">
                          <div className="flex justify-between mb-[5px]">
                            {/* firstTeam */}
                            <div className="flex">
                              <Avatar
                                alt="Remy Sharp"
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
                            {/* Second Team */}
                            <div className="flex">
                              <Avatar
                                alt="Remy Sharp"
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
                      {...a11yProps(0)}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </Tabs>
      
      <TabPanel value={value} index={0}>
        Taber Man
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
  );
}
