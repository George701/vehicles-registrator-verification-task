import React, { Component } from 'react';
import Status from './Status';

class Customer extends Component {
    render() {
        const { data } = this.props;
        return (
            <div>
                <div>
                    <span>Name: {data.name}</span>
                </div> 
                <div>
                    <span>Address: {data.address}</span>
                </div>
                <div>
                    {(data.vehicles).map(vehicle => {
                        return (
                            <div key={vehicle.vehicleID}>
                                <span>{vehicle.vehicle} </span>
                                <Status id={vehicle.vehicleID}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Customer
