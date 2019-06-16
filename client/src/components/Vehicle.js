import React, { Component } from 'react';
import { connect } from 'react-redux';

import Status from './Status';
import Spinner from './layout/SpinnerSmall';

class Vehicles extends Component {
    render() {
        const { vehicleData, language, vehicles, statusFilter } = this.props;

        if(vehicles[vehicleData.vehicleID] !== undefined){
            let decisionMaker = this.makeDecision(statusFilter, vehicles[vehicleData.vehicleID].status);
        
            switch(decisionMaker){
                case "render":
                    return (
                        <div className="vehicle-item">
                            <div className="vehicle-img">{this.generateVehiclePic(vehicleData.vehicle)}</div>
                            <div className="vehicle-info">
                                <div className="vehicle-text vehicle-line"><span className="vehicle-regnt">{language.regNum}: </span> {vehicleData.regNum}</div>
                                <Status vehicleId={vehicleData.vehicleID} language={language}/>
                            </div>
                        </div>
                    )
                case "no_render":
                    return null;
                default:
                    console.log("Something went wrong!");
                    return null;
            }
        }else{
            return <Spinner/>
        }
    
    }

    makeDecision = (statusFilter, status) => {
        if(statusFilter==="1" && status==="0"){
            return "no_render";
        }else if(statusFilter==="0" && status==="1"){
            return "no_render";
        }else{
            return "render";
        }
    }

    generateVehiclePic = (type) => {
        switch(type){
            case "bike":
                return <i className="fas fa-bicycle fa-3x"/>   
            case "motorcycle":
                return <i className="fas fa-motorcycle fa-3x"/>   
            case "van":
                return <i className="fas fa-shuttle-van fa-3x"/>   
            case "car":
                return <i className="fas fa-car-side fa-3x"/>   
            case "shuttle":
                return <i className="fas fa-space-shuttle fa-3x"/>   
            case "plane":
                return <i className="fas fa-fighter-jet fa-3x"/>   
            default:
                return <i className="fas fa-taxi fa-3x"/>   
        }
    }

}

export default connect(
    store => {
        return {
            vehicles: store.vehicles
        }
    }
)(Vehicles);
