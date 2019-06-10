import React, { Component } from 'react';
import Customers from '../customers/Customers';

class Main extends Component {
    state = {
        controllers: [],
        statuses: [],
        data: [],
    }
    componentDidMount(){
        const { customers } = this.props;
        let customer_array = [];
        let statuses_array = [];
        for(let i = 0; i < customers.length; i++){
            // console.log(customers[i].id, customers[i].name);
            customer_array.push({"id": customers[i].id, "name" : customers[i].name})
            statuses_array.push(true)
        }
        this.setState({
            controllers: customer_array,
            statuses: statuses_array, 
            data: makeListOfCustomers(customer_array, statuses_array),
        })
    }

    onClick = (e) => {
        let statusesCopy = this.state.statuses;
        statusesCopy[parseInt(e.target.id)-1] = e.target.checked;
        const data = makeListOfCustomers(this.state.controllers, statusesCopy);
        
        this.setState({
            statuses: statusesCopy,
            data: data
        });
        
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
                    {}
                    <Customers data={data}/>
                </div>
            )
        }else{
            return(
                <div>Nothing</div>
            )
        }
    
    }
}

let makeListOfCustomers = (arrC, arrS) => {
    let temp_arr = [];
    for(let i = 0; i < arrC.length; i++){
        if(arrS[i] !== false){
            temp_arr.push(arrC[i].id);
        }
    }
    
    return temp_arr;
}

export default Main;
