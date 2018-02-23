/**
 * Created by eblonvia on 23/02/2018.
 */

import React from 'react';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';


const TabContainer = ({ children })=> {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
};

export default TabContainer;