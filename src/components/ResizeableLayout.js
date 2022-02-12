import React from 'react';
import PropTypes from 'prop-types';
import Highlight from "react-highlight";
import { Responsive, WidthProvider } from "react-grid-layout";
import { Box, Tab, Tabs, Typography } from '@mui/material';

import '../App.css';
import "../../node_modules/react-grid-layout/css/styles.css";
import "../../node_modules/react-resizable/css/styles.css";
import "../tomorrow-night-blue.min.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

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
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const ResizeableLayout = () => {
    const [showMessage, setShowMessage] = React.useState(false);
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const onButtonClickHandler = () => {
        setShowMessage(!showMessage);
    };

    return (
        <ResponsiveGridLayout
            className="layout"
            rowHeight={150}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            compactType={"vertical, horizontal"}
        >
            <div
                className="item"
                key="question"
                data-grid={{ x: 0, y: 0, w: 2, h: 2, minW: 2, minH: 3, maxW: 12, maxH: 4 }}
            >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Question 1" {...a11yProps(0)} />
                        <Tab label="Question 2" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                Write a Python program to print the following string in a specific
                            format (see the output). Sample String: "Twinkle, twinkle, little
                            star, How I wonder what you are! Up above the world so high, Like
                            a diamond in the sky. Twinkle, twinkle, little star, How I wonder
                            what you are!"
                </TabPanel>
                <TabPanel value={value} index={1}>
                Write a Python program to print the following string in a specific
                            format (see the output). Sample String: "Twinkle, twinkle, little
                            star, How I wonder what you are! Up above the world so high, Like
                            a diamond in the sky. Twinkle, twinkle, little star, How I wonder
                            what you are!"
                </TabPanel>
            </div>

            <div
                className="item"
                key="code"
                data-grid={{ x: 2, y: 0, w: 3, h: 2 }}
            >
                <div className="MyDragHandleClassName">
                    <span className="text">Code</span>
                </div>
                <span className="text">
                    <Highlight language="python">
                        {`print("Twinkle, twinkle, little star, \n\tHow I wonder what you are! \n\t\tUp above the world so high, \n\t\tLike a diamond in the sky. \nTwinkle, twinkle, little star, \n\tHow I wonder what you are!")`}
                    </Highlight>


                    <button onClick={onButtonClickHandler}>Enter</button>
                </span>
            </div>

            <div
                className="item"
                key="outputConsole"
                data-grid={{ x: 5, y: 0, w: 2, h: 2, minW: 2, maxW: 12, maxH: 4 }}
            >
                <div className="MyDragHandleClassName">
                    <span className="text">Output</span>
                </div>
                <div className="code">
                    <span className="text">
                        {showMessage && <p>Twinkle, twinkle, little star, How I wonder what you are! Up
                            above the world so high, Like a diamond in the sky. Twinkle,
                            twinkle, little star, How I wonder what you are</p>}
                    </span>
                </div>
            </div>
        </ResponsiveGridLayout>
    );
};

ResizeableLayout.defaultProps = {
    rowHeight: 10,
    cols: 2, // to make grid item 50% or 100%
};

export default ResizeableLayout;