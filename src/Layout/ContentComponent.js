import React, {useState} from 'react';
import '../App.css'
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {makeStyles, withStyles} from "@material-ui/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import {fade, InputBase} from "@material-ui/core";
import Stats from "../Statistics/Stats";


const useStyles = makeStyles((theme) => ({
    box: {
        border: '1px solid #eee',
        borderRadius: '8px',
        width: 'auto',
        padding: '10px 15px',
        marginTop: '0px',
        background: '#f8f8f8',
        color: ' #000',
        boxSizing: 'border-box !important'
    },

    bodyText: {
        fontSize: '1rem',
        textAlign: 'left',
        fontWeight: '300',
        lineHeight: '25px'
    },
    price: {
        fontSize: '1rem',
        textAlign: 'left',
        fontWeight: '600',
        lineHeight: '25px',
        color: "#000"
    },
    helpIconGrid: {
        textAlign: "right"
    },
    helpIcon: {
        color: "#2c2c2c",
        fontSize: "1.25em"
    },
    card: {
        padding: '12px',
        marginTop: "50px",
        boxShadow: '0px -2px 25px -3px rgba(0, 0, 0, 0.1) !important'
    },


    tabs: {
        marginTop: "12px"
    },
    tabsStyle: {
        backgroundColor: "#000",
        color: '#777',
        borderRadius: "8px",
        '& .MuiTab-textColorPrimary': {
            color: '#777',
            fontWeight: "bold"
        },
        '& .MuiTab-textColorPrimary.Mui-selected': {
            color: '#000000',
            border: '1.5px solid #2c2c2c',
            background: '#fff',
            boxSizing: 'border-box',
            borderRadius: '10px',
            fontWeight: "bold"
        }
    },

    tabRoot: {
        width: "100%",
    },
    listItems: {},
    listPrimaryText: {
        fontFamily: 'IBM Plex Sans',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '14px',
        lineHeight: '18px',
        color: '#33343D',
    },
    secondaryText: {
        fontFamily: 'IBM Plex Sans',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '14px',
        lineHeight: '18px',
        color: '#33343D',
    },
    listHead: {
        fontFamily: 'IBM Plex Sans',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '15px',
        lineHeight: '19px',
        color: '#25233A',
        opacity: '0.26'
    },
    header: {
        fontFamily: 'IBM Plex Sans',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '14px',
        lineHeight: '18px',
        color: '#01058A'
    },
    cardHeaderRoot: {
        paddingTop: 4,
        paddingBottom: 4
    },
    walletBalanceCard: {
        background: '#08157E',
        borderRadius: '6px',
        marginTop: "50px",
        padding: "8px"
    },
    depositBalanceCard: {
        background: '#00AEEF',
        borderRadius: '6px',
        marginTop: "40px",
        padding: "8px"

    },
    walletHeader: {
        fontFamily: 'IBM Plex Sans',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '24px',
        lineHeight: '114.95%',
        color: '#FFFFFF',
        [theme.breakpoints.down('md')]: {
            width: "100%",
        }
    },
    walletHeaderThin: {
        fontFamily: 'IBM Plex Sans',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '16px',
        lineHeight: '114.95%',
        color: '#FFFFFF',
        marginTop: "2px",
        [theme.breakpoints.down('md')]: {
            width: "100%",
        }
    },
    depositAmount: {
        backgroundColor: "#00AEEF",
        height: '130px',
        width: '130px',
        borderRadius: '100%',
        textAlign: "center",
        margin: 'auto'
    },


    gearbox: {
        fontFamily: 'IBM Plex Sans',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '23px',
        textAlign: 'center',
        color: '#FFFFFF',
        lineHeight: '130px'
    },


    withdrawButton: {
        background: '#3bc0f3',
        mixBlendMode: 'normal',
        borderRadius: '4px',
        color: '#FFFFFF',
        boxShadow: "none",
        height: '40px',
        marginTop: '60px',
        marginBottom: '20px',
        [theme.breakpoints.down('md')]: {
            marginBottom: '30px',
            marginTop: '30px',
            width: "100%"
        },
        "&:hover": {
            background: '#3bc0f3',
            color: '#FFFFFF',
        }

    },
    depositButtonMax: {
        background: '#3bc0f3',
        mixBlendMode: 'normal',
        borderRadius: '4px',
        color: '#FFFFFF',
        boxShadow: "none",
        marginLeft: "8px",
        height: '40px',
        marginTop: '-5px',
        "&:hover": {
            background: '#3bc0f3',
            color: '#FFFFFF',
        }

    },
    depositButton: {
        background: '#3240a2',
        mixBlendMode: 'normal',
        borderRadius: '4px',
        color: '#FFFFFF',
        boxShadow: "none",
        marginLeft: "8px",
        height: '40px',
        marginTop: '-5px',
        "&:hover": {
            background: '#3240a2',
            color: '#FFFFFF',
        },
        [theme.breakpoints.down('md')]: {
            width: "100%"
        },

    },
    listItemRoot: {
        paddingTop: "16px",
        paddingBottom: "16px",
    },
    divider: {
        background: "#E7E8F2"
    },

}));


const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
        marginTop: "20px",
        marginBottom: "20px",
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 18,
        width: '100%',
        padding: '8px 8px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}))(InputBase);

function ContentComponent() {
    const classes = useStyles();
    const [deposit, setDeposit] = useState(null)
    const [withdraw, setWithdraw] = useState(null)

    const handleChangeDepositAmount = (event) => {
        setDeposit(event.target.value)
    }
    const handleChangeWithdrawAmount = (event) => {
        setWithdraw(event.target.value)
    }
    const [items, setItems] = React.useState([
        {
            name: "Total Rewards",
            price: "2,194,185.86 xBTC",
        }, {
            name: "Locked Rewards",
            price: "2,194,185.86 xBTC",
        }, {
            name: "Program duration",
            price: "62.9 days left",
        }, {
            name: "Total Deposits",
            price: "8,097,834.74 USD",
        }, {
            name: "Unlocked Rewards",
            price: "221,194,185.36 xBTC",
        }, {
            name: "Reward unlock rate",
            price: "731,067.66 xBTC / month",
        }
    ]);


    return (
        <Container maxWidth="lg" component="main">
            <Grid container spacing={5}>
                <Grid item md={8}>
                    <Card className={classes.walletBalanceCard}>
                        <CardContent>
                            <Grid container spacing={2} alignItems="center" justify={"center"}>
                                <Grid item md={6} sm={12} xs={12}>
                                    <Typography variant={"h5"} className={classes.walletHeader}>Wallet
                                        balance:</Typography>
                                    <Typography variant={"h6"} className={classes.walletHeaderThin}>0.000000
                                        (UWETHxBTC-V2)</Typography>
                                    <BootstrapInput type={"number"} id="bootstrap-input" placeholder={"Enter Amount"}
                                                    onChange={handleChangeDepositAmount}/>

                                    <Typography variant={"h5"} className={classes.walletHeader}>Your Estimated
                                        Rewards:</Typography>
                                    <Typography variant={"h6"} className={classes.walletHeaderThin}>222330.00 xBTC /
                                        month</Typography>
                                </Grid>

                                <Grid item md={4} sm={12} xs={12}>
                                    <div className={classes.depositAmount}>
                                        <Typography variant={"h4"} className={classes.gearbox}>80%</Typography>
                                    </div>

                                </Grid>
                                <Grid item md={2} sm={12} xs={12}>
                                    <Button variant={"contained"} className={classes.depositButton}>Deposit</Button>
                                </Grid>

                            </Grid>
                        </CardContent>
                    </Card>
                    <Card className={classes.depositBalanceCard}>
                        <CardContent>
                            <Grid container spacing={2} alignItems="center" justify={"center"}>
                                <Grid item md={8} sm={12} xs={12}>
                                    <Typography variant={"h5"} className={classes.walletHeader}>Deposited
                                        balance:</Typography>
                                    <Typography variant={"h6"} className={classes.walletHeaderThin}>0.000000
                                        (UWETHxBTC-V2)</Typography>
                                    <BootstrapInput type={"number"} id="bootstrap-input" placeholder={"Enter Amount"}
                                                    onChange={handleChangeWithdrawAmount}/>
                                    <Button variant={"contained"} className={classes.depositButtonMax}>
                                        Max
                                    </Button>

                                    <Typography variant={"h5"} className={classes.walletHeader}>Amount to
                                        Withdraw</Typography>
                                    <Typography variant={"h6"} className={classes.walletHeaderThin}>222330.00 xBTC /
                                        month</Typography>
                                </Grid>
                                <Grid container item md={4} sm={12} xs={12} justify="flex-end">
                                    <Button variant={"contained"} className={classes.withdrawButton}>Withdraw</Button>
                                    <br/>
                                    <Typography variant={"h5"} className={classes.walletHeader}>Rewards
                                        Claimed</Typography>
                                    <Typography variant={"h6"} className={classes.walletHeaderThin}>425132.00
                                        xBTC</Typography>
                                </Grid>

                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    <Card className={classes.card}>
                        <CardHeader title={"Stats"} classes={{root: classes.cardHeaderRoot, title: classes.header}}>
                        </CardHeader>
                        <Divider classes={{root: classes.divider}}/>
                        <List className={classes.listItems}>
                            <ListItem classes={{root: classes.listItemRoot}}>
                                <ListItemText primary={"Type"} classes={{primary: classes.listHead}}/>
                                <ListItemSecondaryAction>
                                    <ListItemText primary={"Amount"} classes={{primary: classes.listHead}}/>
                                </ListItemSecondaryAction>
                            </ListItem>
                            {items.map((value) => {
                                return (<React.Fragment>
                                        <Divider classes={{root: classes.divider}}/>
                                        <ListItem key={value} classes={{root: classes.listItemRoot}}>
                                            <ListItemText primary={value.name}
                                                          classes={{primary: classes.listPrimaryText}}/>
                                            <ListItemSecondaryAction>
                                                <ListItemText primary={value.price}
                                                              classes={{primary: classes.secondaryText}}/>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    </React.Fragment>
                                );
                            })}
                        </List>
                    </Card>
                </Grid>
                <Grid item md={12}>
                    <Stats/>
                </Grid>
            </Grid>
        </Container>

    );
}

export default ContentComponent;
