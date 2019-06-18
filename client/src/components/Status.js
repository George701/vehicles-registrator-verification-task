import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Spinner from './loaders/SpinnerSmall';

class Status extends Component {
    render() {
        const { vehicleStatus, language } = this.props;
        console.log()

        if(vehicleStatus){
            return (
                <div className="vehicle-text vehicle-line">
                    <span className="vehicle-st">{language.conn}:</span> {this.generateStatusPic(vehicleStatus)}
                </div>
            )
        }else{
            return <Spinner/>
        }
    }
    
    generateStatusPic = (type) => {
        if(type === "1") return <i className="fas fa-check-circle status-p"/>
        else return <i className="fas fa-times-circle status-n"/>
    }
}

Status.propTypes = {
    vehicles: PropTypes.object
}

export default connect((store, OwnProps) => {
    if(!(Object.entries(store.vehicles).length === 0 && (store.vehicles).constructor === Object))return {vehicleStatus: store.vehicles[OwnProps.vehicleId].status}
    else return {vehicleStatus: "0"}
})(Status);