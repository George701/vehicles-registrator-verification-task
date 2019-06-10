import React, { Component } from 'react';
import {connect} from "react-redux";
import { getCustomers } from "../actions/customerActions";
import PropTypes from "prop-types";

import Loader from './layout/Loader';
import Main from './layout/Main';

class Dashboard extends Component {

    componentDidMount(){
        this.props.getCustomers();
    }
  

    render() {
        const { customers } = this.props;
        if(customers){
            return (
                <Main customers={customers}/>
            )
        }
        return <Loader/>
    }
}

Dashboard.propTypes = {
    getCustomers: PropTypes.func.isRequired,
};

export default connect((state) => {return {customers: state.customers.customers}},{getCustomers})(Dashboard);
