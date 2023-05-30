import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import tick from '../../assets/tick.png'
import './experience.styles.scss';


const styles = theme => ({
  body1: {
    fontWeight: 350,
    textTransform:'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.75rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '0.85rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '0.95rem',
      lineHeight: 1.8,
    },
  },
});

const StyledTypography = withStyles(styles)(Typography);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <StyledTypography>{children}</StyledTypography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '12px',
    width: '100%',
    height:'344px',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Experience() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} variant="scrollable"
          indicatorColor="secondary"
          scrollButtons="auto"
          className="styleTab"
          aria-label="scrollable auto tabs">
          <Tab label="GlobalLogic" {...a11yProps(0)} />
          <Tab label="ProKarma" {...a11yProps(1)} />
          <Tab label="Tata Consultancy Services" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <img className="tick" src={tick}></img>Aligned with fast paced Angular web-app development environment by following best practises for Angular, TypeScript, SCSS & Unit Testing.<br/>
        <img className="tick" src={tick}></img>Collaborated in meetings with client & team for upcoming feature discussions, Task creations & estimations.<br/>
        <img className="tick" src={tick}></img>Built reusable components, directives & configurable tables capable of pagination, sorting & filtering.<br/>
        <img className="tick" src={tick}></img>Built pixel perfect UI using easily configurable css style techniques in SCSS.<br/>
        <img className="tick" src={tick}></img>Identified, debugged and resolved issues within the Angular legacy codebase in CoPlanner.<br/>
        <img className="tick" src={tick}></img>Migrated CoPlanner web-app to new Angular components & kept the old theme intact, reduced the impact on 5k users.<br/>
        <img className="tick" src={tick}></img>Increased CoPlanner usage by 24% by implementing the "deep-link" feature in CoPlanner which lets users bookmark url and web-app flow continues from there on.<br/>
        <img className="tick" src={tick}></img>Reduced unnecessary api hits to server by 1/3rd of total hits by caching requisite responses in services during initial load.<br/>
        <img className="tick" src={tick}></img>Mentored Junior developers in Angular development best practices & Conducted peer code reviews.<br/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <p>
        <img className="tick" src={tick}></img>Extensively supported Enterprise T-Mobile web app during SDLC phases via MicroServices architecture.<br/>
        <img className="tick" src={tick}></img>Developed Apis, Middleware & Database connections in NodeJS using ExpressJS.<br/>
        <img className="tick" src={tick}></img>Collaborated with cross functional teams to resolve mutual dependent tasks.<br/>
        <img className="tick" src={tick}></img>Created UML Diagrams of Api's beforehand for better understanding across Geographically distributed teams.<br/>
        <img className="tick" src={tick}></img>Familiar with SoapUI, Postman & Swagger UI for Api relative request & response.<br/>
        <img className="tick" src={tick}></img>NodeJS & Angular TDD development using Jasmine, Karma, Chai & Mocha.<br/>
        <img className="tick" src={tick}></img>Monitored Production alerts via GRAFANA charts & Debugged using SPLUNK query.<br/> 
      </p>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <p>
        <img className="tick" src={tick}></img>Designed responsive user-friendly interfaces using Bootstrap & Media Query.<br/>
        <img className="tick" src={tick}></img>Incorporated PrimeNG Table with virtual scrolling support.<br/>
        <img className="tick" src={tick}></img>Developed User Registration & SignUp Form..<br/>
        <img className="tick" src={tick}></img>Worked as an Individual contributor in the Front-end development team of 8 developers.
      </p>
      </TabPanel>
    </div>
  );
}






        


        