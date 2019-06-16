import React, { Component } from 'react';
import Vehicle from './Vehicle';

class Customer extends Component {
    render() {
        const { customer, statusFilter, language } = this.props;
        return (
            <div className="customer-container">
                <div className="customer-info-block">
                    <div className="customer-info-item">
                        <span className="customer-info-title">{language.name}: </span><span className="customer-info-text">{customer.name}</span>
                    </div> 
                    <div className="customer-info-item">
                        <span className="customer-info-title">{language.address}: </span><span className="customer-info-text">{customer.address}</span>
                    </div>
                </div>
                <div className="vehicle-container">
                    {(customer.vehicles).map(vehicle => {
                        return (
                            <Vehicle key={vehicle.vehicleID} vehicleData={vehicle} language={language} statusFilter={statusFilter}/>
                        )
                    })}
                </div>
            </div>
        )
    }

    whichLanguage = (arr, lang) => {
        return arr[lang.replace("\"", '')];
    }
}

export default Customer
