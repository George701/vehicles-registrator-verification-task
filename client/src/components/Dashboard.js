import React, { Component } from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";

import { getCustomers, getVehiclesStatus } from '../actions/dataActions';

import Customer from './Customer';
import languageLibrary from '../localization.json';
import Spinner from './loaders/SpinnerBig';

class Dashboard extends Component {

    state = {
        nameFilter: '',
        statusFilter: 'all',
        languageOption: 'eng'
    }

    componentDidMount(){
        this.props.getCustomers();
        this.props.getVehiclesStatus();
        this.interval = setInterval(() => {this.props.getVehiclesStatus()}, 10000);
    }
  

    render() {
        return(
            <React.Fragment>
                {this.getControls()}
                {this.getBody()}
            </React.Fragment>
        )
    }

    getBody = () => {
        const { customers } = this.props;
        if(!(Object.entries(customers).length === 0 && customers.constructor === Object)){
            return (
                <div className="main-body block">
                    {this.getCustomerList(customers)}
                </div>
            )
        }else{
            return <Spinner/>
        }
    }

    getCustomerList = (customers) => {

        const arr =  Object.values(customers);

        const { languageOption } = this.state;
        const language = this.whichLanguage(languageLibrary, languageOption);

        return arr.filter(customer => {
            return customer.name.toLowerCase().includes(this.state.nameFilter.toLowerCase())
        }).map(customer => {
            return <Customer key={customer.id} customer={customer} language={language} statusFilter={this.state.statusFilter}/>
        })
    }

    getControls = () => {
        const { languageOption } = this.state;
        const language = this.whichLanguage(languageLibrary, languageOption);
        return (
            <div className="controller-bar block">
                <div className="controller-item brand">{language.brand}</div>
                <div className="controller-item">
                    <input className="name-filter" id={"nameFilter"} onChange={this.changeHandler} value={this.state.nameFilter} placeholder={language.customer_placeholder}/>
                </div>
                <div className="controller-item select-group">
                    <select className="select-item" onChange={this.changeHandler} value={this.state.statusFilter} id={"statusFilter"}>
                        <option value="all">{language.status_def}</option>
                        <option value="1">{language.status_p}</option>
                        <option value="0">{language.status_n}</option>
                    </select>
                    <select className="select-item" onChange={this.changeHandler} value={this.state.languageOption} id={"languageOption"}>
                        <option value="eng">{language.languageSet.eng}</option>
                        <option value="ru">{language.languageSet.ru}</option>
                        <option value="se">{language.languageSet.se}</option>
                        <option value="es">{language.languageSet.es}</option>
                    </select>
                </div>
            </div>
        )
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    whichLanguage = (arr, lang) => {
        return arr[lang.replace("\"", '')];
    }
}


Dashboard.propTypes = {
    getCustomers: PropTypes.func.isRequired,
    getVehiclesStatus: PropTypes.func.isRequired,
};

export default connect((state) => {return {customers: state.customers, vehicles: state.vehicles}},{getCustomers, getVehiclesStatus})(Dashboard);
