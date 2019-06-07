import React, { Component } from 'react';
import {connect} from "react-redux";
import { getCustomers } from "../actions/customerActions";
import PropTypes from "prop-types";

import Loader from './layout/Loader';
import Customer from './Customer';

class Dashboard extends Component {
    state = {
    };

    componentDidMount(){
        this.props.getCustomers();
    }

    render() {
        const { customers } = this.props;
        if(customers){
            return (
                <div>
                    <h1>Dashboard</h1>
                    {customers.map(customer => {
                        return <Customer key={customer.id} data={customer}/>
                    })}
                </div>
            )
        }
        return <Loader/>
    }
}

Dashboard.propTypes = {
    getCustomers: PropTypes.func.isRequired,
};

export default connect((state) => {return {customers: state.customers.customers}},{getCustomers})(Dashboard);
