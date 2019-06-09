import React, { Component } from 'react';

class Controllers extends Component {
    state = {
        customers: [],
        statuses: []
    }

    componentDidMount(){
        const { customers } = this.props;
        let customer_array = [];
        let statuses = [];
        let id, name;
        for(let i = 0; i < customers.length; i++){
            id = customers[i].id;
            name = customers[i].name;
            customer_array.push({"id": id, "name" : name})
            statuses.push(true)
        }
        this.setState({customers: customer_array, statuses: statuses})
    }

    onClick = (e) => {
        let statusesCopy = this.state.statuses;
        statusesCopy[parseInt(e.target.id)-1] = e.target.checked;
        this.setState({statuses: statusesCopy});
        
    }

    render() {
        const { customers } = this.state;
        const { statuses } = this.state;
        if(customers && statuses){
            // console.log(statuses[3-1]);
            return(
                <div>
                    {customers.map(customer => {
                        return (
                            <span key={customer.id}>
                                <label htmlFor={customer.id}>{customer.name}</label>
                                <input type="checkbox" id={customer.id} checked={statuses[customer.id-1]} onChange={this.onClick}/>
                            </span>
                        )
                    })}
                </div>
            )
        }else{
            return <div>Loading</div>
        }
        
    }
}

export default Controllers;
