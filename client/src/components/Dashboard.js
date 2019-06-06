import React, { Component } from 'react';
import {connect} from "react-redux";
import { getCustomers } from "../actions/customerActions";
import PropTypes from "prop-types";

class Dashboard extends Component {
    state = {
        customers: ""
    };

    componentDidMount(){
        this.props.getCustomers();
    }

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
            </div>
        )
    }
}

Dashboard.propTypes = {
    getCustomers: PropTypes.func.isRequired,
};

export default connect((state) => {return {customers: state.customer.customers}},{getCustomers})(Dashboard);
