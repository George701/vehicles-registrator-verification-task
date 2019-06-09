import React, { Component } from 'react';
import {connect} from "react-redux";
import { getCustomers } from "../actions/customerActions";
import PropTypes from "prop-types";

import Loader from './layout/Loader';
import Customers from './customers/Customers';

class Dashboard extends Component {
    state = {
        controllers: [],
        statuses: [],
        data: {}
    }

    componentDidMount(){
        this.props.getCustomers();
    }

    componentWillReceiveProps(props){
        const { customers } = props;
        let customer_array = [];
        let statuses_array = [];
        // console.log(customers);
        for(let i = 0; i < customers.length; i++){
            // console.log(customers[i].id, customers[i].name);
            customer_array.push({"id": customers[i].id, "name" : customers[i].name})
            statuses_array.push(true)
        }
        this.setState({controllers: customer_array, statuses: statuses_array, data: makeListOfCustomers(customer_array, statuses_array)})

        // console.log(makeListOfCustomers(customer_array, statuses_array));
    }

    onClick = (e) => {
        let statusesCopy = this.state.statuses;
        statusesCopy[parseInt(e.target.id)-1] = e.target.checked;
        this.setState({statuses: statusesCopy});
        
    }

    render() {
        const { controllers, statuses, data } = this.state;
        if(controllers && statuses && data){
            return (
                <div>
                    <h1>Dashboard</h1>
                    <div>
                        {controllers.map(controller => {
                            return (
                                <span key={controller.id}>
                                    <label htmlFor={controller.id}>{controller.name}</label>
                                    <input type="checkbox" id={controller.id} checked={statuses[controller.id-1]} onChange={this.onClick}/>
                                </span>
                            )
                        })}
                    </div>
                    <hr/>
                    <Customers list={data}/>
                </div>
            )
        }
        return <Loader/>
    }
}

let makeListOfCustomers = (arrC, arrS) => {
    let temp_arr = [];
    for(let i = 0; i < arrC.length; i++){
        temp_arr.push({"id" : arrC[i].id, "status" : arrS[i]})
    }

    return temp_arr;
}


Dashboard.propTypes = {
    getCustomers: PropTypes.func.isRequired,
};

export default connect((state) => {return {customers: state.customers.customers}},{getCustomers})(Dashboard);
