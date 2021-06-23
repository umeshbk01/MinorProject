import React, {Fragment, useState} from 'react'
import { makeStyles } from '@material-ui/core'
import { Grid, Paper, List, Tabs, Tab} from '@material-ui/core';
import ChatBox from './ChatBox';

const useStyles = makeStyles(theme => ({
    paper: {
        minHeight: 'calc(100vh - 64px)',
        borderRadius: 0,
    },
    sidebar: {
        zIndex: 8,
    },
    subheader: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
    },
    globe: {
        backgroundColor: theme.palette.primary.dark,
    },
    subheaderText: {
        color: theme.palette.primary.dark,
    },
}));
const Chat = () => {
    const [scope, setScope] = useState('');
    const [tab, setTab] = useState(0);
    const [user, setUser] = useState(null);
    const classes = useStyles();

    const handleChange = (e, newVal) =>{
        setTab(newVal);
    }
    return (
        <Fragment>
            <Grid container>
                <Grid item md={8}>
                    {/* <ChatBox scope={scope} user={user} /> */}
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Chat