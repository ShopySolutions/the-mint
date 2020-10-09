import React from 'react';
import '../App.css'
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/styles";
import LogoIcon from "../images/xbtc-logo-550x545 1.png";
import ProfileIcon from "../images/address 1.png";
import {ExitToApp} from "@material-ui/icons";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: 'rgb(255, 255, 255)',
        boxShadow: '0px 1px 0px #E7E8F2'
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    headerTitle: {
        display: 'flex',
        alignItems: "center"
    },

    icon: {
        marginLeft: "5px",
        height: "50px",
        width: "50px",
        cursor: "pointer"
    },
    logoIcon: {
        marginLeft: "5px",
        height: "54px",
        width: "55px",
        cursor: "pointer"
    },
    headlineIcon: {
        marginLeft: "5px",
        fontFamily: 'HelveticaNeue',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '24px',
        lineHeight: '28px',
        textAlign: 'center',
        height: '28px',
        color: '#00AEEF',
        cursor: "pointer"
    },
    userName: {
        fontFamily: 'IBM Plex Sans',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '15px',
        lineHeight: '19px',
        color: '#25233A',
        marginLeft: "4px"
    },
    welcome: {
        fontFamily: 'IBM Plex Sans',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '21px',
        color: '#33343D'
    },
    disconnect: {
        background: '#EAF5FF',
        borderRadius: '5px',
        color: "#33343D",
        textTransform: "none",
        fontFamily: 'IBM Plex Sans',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '21px',
        textAlign: 'center',
        boxShadow: "none",
        "&:hover": {
            background: '#EAF5FF',
            borderRadius: '5px',
            color: "#33343D",

        }
    }

}));


function Header() {
    const classes = useStyles();
    return (

        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Container maxWidth="xl" component="main">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.toolbarTitle}>
                        <div className={classes.headerTitle}>
                            <Typography variant={"body1"} className={classes.welcome}> Welcome</Typography>
                            <img src={ProfileIcon} alt={"Coinbase Wallet"} className={classes.icon}/>
                            <Typography variant={"body1"} className={classes.userName}> 0xd2a3....cf22</Typography>
                        </div>
                    </div>
                    <div className={classes.toolbarTitle}>
                        <div className={classes.headerTitle}>
                            <img src={LogoIcon} alt={"Coinbase Wallet"} className={classes.logoIcon}/>
                            <Typography className={classes.headlineIcon}> The MINT</Typography>
                        </div>
                    </div>

                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.disconnect}
                        endIcon={<ExitToApp/>}
                    >
                        Disconnect
                    </Button>

                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
