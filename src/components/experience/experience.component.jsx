import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const styles = theme => ({
  body1: {
    fontWeight: 350,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.75rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '0.85rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '0.95rem',
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
    marginTop: '90px',
    width: '100%',
    height:'350px',
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
          aria-label="scrollable auto tabs">
          <Tab label="GLOBALLOGIC" {...a11yProps(0)} />
          <Tab label="PROKARMA" {...a11yProps(1)} />
          <Tab label="TCS" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Working in Fast paced Angular application development environment supported by Material web components.<br/>
        Incorporated reusable components, directives and configurable tables with support of pagination, sorting and filtering in former apps.<br/>
        Can build pixel perfect UI via easy configurable style techniques as part of SCSS.<br/>
        Following TDD, Agile and Scrum methodologies.
      </TabPanel>
      <TabPanel value={value} index={1}>
        Extensively supported Enterprise Web app in Development, Maintenance and production phase.<br/>
        Developed APIs, Middle-wares and connected Databases using ES6 and modular pattern in NodeJS.<br/>
        Used UML Diagrams for better understanding of feature functionlity and technical flows.<br/>
        For API Interaction worked on Soap UI, Postman, Swagger UI.<br/>
        TDD using Jasmine, Karma, Chai and Mocha.<br/>
        For Production support, we monitored logs and alert via SPLUNK and GRAFANA dashboards.
      </TabPanel>
      <TabPanel value={value} index={2}>
      Web development using AngularJS, Bootstrap, PrimeNG web components, Jquery, Media Query, DOM Manipulations.
      </TabPanel>
    </div>
  );
}






        


        