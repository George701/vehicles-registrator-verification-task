import React, { Component } from 'react';
import {connect} from "react-redux";
import { getVehiclesStatus } from "../actions/vehicleActions";
import PropTypes from "prop-types";

class Status extends Component {
    state = {
        id: "",
        status: ""
    }
    
    componentDidMount(){
        const { id } = this.props;
        this.setState({id: id});

        this.props.getVehiclesStatus(id);
        this.interval = setInterval(() => {this.props.getVehiclesStatus(id); console.log("Update...")}, 60000);
    }
   
    componentWillUnmount() {
       clearInterval(this.interval);
    }

    componentWillReceiveProps(props){
        const { vehicles } = props;
        // console.log(vehicles);
        const { id } = this.state;
        if(vehicles[0].vehicleID === id){
            // console.log("State status: "+this.state.status+" | status in props: "+vehicles[0].status);
            if(this.state.status !== vehicles[0].status){
                this.setState({status: vehicles[0].status});
            }
            
        }
    }

    render() {
        const { status } = this.state;
        // console.log(status);
        return <span>connection: {status}</span>
    }
}

Status.propTypes = {
    getVehiclesStatus: PropTypes.func.isRequired,
    // vehicles: PropTypes.array.isRequired
};

export default connect((state) => {return {vehicles: state.vehicles.vehicles}},{getVehiclesStatus})(Status);
