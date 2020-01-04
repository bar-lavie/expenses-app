import React from 'react';
import Typography from "@material-ui/core/Typography";
import {Box} from "@material-ui/core";

class Compare extends React.Component {
    render() {
        return (
            <Box textAlign="center" display="flex" flexWrap="wrap"
                 alignContent="center" css={{height: 300}}>
                <Typography component="h1" variant="h5">This feature is not available at this moment</Typography>
            </Box>
        );
    }
}

export default Compare;
