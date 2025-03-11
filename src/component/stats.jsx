import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import StatsTable from "../component/statsTable";
import LineupTable from "../component/lineup";
import H2HTable from "../component/HeadToHead";
import Odds from "../component/Odds"
import MyBookMark from "../component/MyBookMark"
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import { green } from '@mui/material/colors';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import NavigationIcon from '@mui/icons-material/Navigation';
import SpringModal from "../component/Coming_Soon"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 16,
};

const fabGreenStyle = {
  color: 'common.white',
  bgcolor: green[500],
  '&:hover': {
    bgcolor: green[600],
  },
};

export default function FullWidthTabs({ stats, lineup, h2h, sendFixture, fixId }) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClose =() => {
    setOpen(false)
  }


  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [
    {
      color: 'primary',
      sx: fabStyle,
      icon: <AddIcon />,
      label: 'Add',
    },
    {
      color: 'secondary',
      sx: fabStyle,
      icon: <EditIcon />,
      label: 'Edit',
    },
    {
      color: 'inherit',
      sx: { ...fabStyle, ...fabGreenStyle },
      icon: <UpIcon />,
      label: 'Expand',
    },
  ];


  return (
    <Box sx={{ bgcolor: "", width: 720 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="#330034"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          sx={{ backgroundColor: "#330034" }}
        >
          <Tab label="Stats" {...a11yProps(0)} />
          <Tab label="Lineup" {...a11yProps(1)} />
          <Tab label="H2H" {...a11yProps(2)} />
          <Tab label="Book Game" {...a11yProps(3)} />
          <Tab label="My Bookmark" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        {stats && <StatsTable stats={stats} />}
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        {lineup && lineup.response.length > 0 && (
          <LineupTable lineup={lineup} />
        )}
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        {h2h && h2h.response.length > 0 && <H2HTable h2h={h2h} />}
      </TabPanel>

      <TabPanel value={value}  index={3} dir={theme.direction}>
         <Odds team={sendFixture} fixId={fixId}/>
      </TabPanel>

      <TabPanel value={value}  index={4} dir={theme.direction}>
        <MyBookMark />
      </TabPanel>

      {
         fabs.map((fab, index) => (
          <Zoom
            key={fab.color}
            in={value === index}
            timeout={transitionDuration}
            style={{
              transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
            }}
            unmountOnExit
          >
            <Fab variant="extended" sx={fab.sx} aria-label={fab.label} color={fab.color} onClick={() => setOpen(true)}>
            <NavigationIcon sx={{ mr: 1 }} />
             AI ASSISTANT
            </Fab>
          </Zoom>
        ))
      }
     {open && <SpringModal openSpring={open} handleClose={handleClose}/>}
    </Box>
  );
}
