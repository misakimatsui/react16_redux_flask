import React, { Component } from 'react';
import { browserHistory } from 'react-router-v3';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {AppBar} from '@material-ui/core';
import { Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import LeftNav from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';

import  MenuIcon from "@material-ui/icons/Menu";
import  CloseIcon from "@material-ui/icons/Close";
import UploadDialog from "../UploadDialog";

import PropTypes from 'prop-types';

import * as actionCreators from '../../actions/auth';

function mapStateToProps(state) {
    return {
        token: state.auth.token,
        userName: state.auth.userName,
        isAuthenticated: state.auth.isAuthenticated,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    dispatchNewRoute(route) {
        browserHistory.push(route);
        this.setState({
            open: false,
        });

    }


    handleClickOutside() {
        this.setState({
            open: false,
        });
    }


    logout(e) {
        e.preventDefault();
        this.props.logoutAndRedirect();
        this.setState({
            open: false,
        });
    }

    openNav() {
        this.setState({
            open: true,
        });
    }

    render() {
        return (
            <header>
                <LeftNav open={this.state.open}>
                    {
                        !this.props.isAuthenticated ?
                            <div style={{width : 240}}>
                                <MenuItem onClick={() => this.handleClickOutside()}>
                                    <CloseIcon/>
                                </MenuItem>
                                <MenuItem onClick={() => this.dispatchNewRoute('/')}>
                                    Login
                                </MenuItem>
                                <Divider/>
                                <MenuItem onClick={() => this.dispatchNewRoute('/')}>
                                    Register
                                </MenuItem>
                            </div>
                            :
                            <div style={{width : 240}}>
                                <MenuItem onClick={() => this.handleClickOutside()}>
                                    <CloseIcon/>
                                </MenuItem>
                                <MenuItem onClick={() => this.dispatchNewRoute('/')}>
                                    <div style={{fontSize:20}}>Analytics</div>
                                </MenuItem>
                                <Divider/>
                                <MenuItem onClick={() => this.dispatchNewRoute('/')}>
                                    <div style={{fontSize:20}}>Logout</div>
                                </MenuItem>
                                <Divider/>
                                <UploadDialog/>
                            </div>
                    }
                </LeftNav>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            onClick={() => this.openNav()}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6">
                            Title
                        </Typography>
                    </Toolbar>
                </AppBar>
            </header>

    );
    }
}

Header.propTypes = {
    logoutAndRedirect: PropTypes.func,
    isAuthenticated: PropTypes.bool,
};

