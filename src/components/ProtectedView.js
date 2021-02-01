import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/data';
import PropTypes from 'prop-types';
import SimpleTabs from "./Tab";
import DataTable from './DataTable';
import createRowData from './CreateRow';


function mapStateToProps(state) {
    return {
        data: state.data,
        token: state.auth.token,
        loaded: state.data.loaded,
        isFetching: state.data.isFetching,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
export default class ProtectedView extends React.Component {
    componentDidMount() {
        this.fetchData();
    }


    fetchData() {
        const token = this.props.token;
        this.props.fetchProtectedData(token);
    }

    render() {
        return (
            <div>
                <DataTable rows={createRowData(50)}/>
                <SimpleTabs/>
            </div>
        );
    }
}

ProtectedView.propTypes = {
    fetchProtectedData: PropTypes.func,
    loaded: PropTypes.bool,
    userName: PropTypes.string,
    data: PropTypes.any,
    token: PropTypes.string,
};
