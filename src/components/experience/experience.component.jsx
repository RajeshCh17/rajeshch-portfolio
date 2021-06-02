import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './experience.styles.scss';

const StyledTab = withStyles({
    root: {
        lineHeight: 3.75,
        fontSize: '1rem',
        letterSpacing: '0.22857rem',
    },
  })(Tab);

const StyledTypography = withStyles({
    body1: {
        fontFamily: '"IM Fell Great Primer",serif',
    },
})(Typography);

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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    flexContainer:{
            backgroundColor: 'darkcyan',
    }
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <StyledTab label="GLOBALLOGIC" {...a11yProps(0)} />
        <StyledTab label="PROKARMA" {...a11yProps(1)} />
        <StyledTab label="T.C.S" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Working in Fast paced Angular application development <br/> environment supported by Material web components.

      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}