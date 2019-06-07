import React, { Component } from 'react';
import {connect} from "react-redux";
import { getVehiclesStatus } from "../actions/vehicleActions";
import PropTypes from "prop-types";

class Status extends Component {
    state = {
        id: ""
    }
    
    componentDidMount(){
        const { id } = this.props;
        this.setState({id: id});

        this.props.getVehiclesStatus(id);
    }

    render() {
        const {vehicles} = this.props;
        if(vehicles){
            console.log(vehicles);
            return <span>connection: {vehicles.status}</span>
             
        }else{
            return <span>connection: 0</span>
        }
    }
}

Status.propTypes = {
    getVehiclesStatus: PropTypes.func.isRequired,
};

export default connect((state) => {return {vehicles: state.vehicles.vehicles}},{getVehiclesStatus})(Status);
