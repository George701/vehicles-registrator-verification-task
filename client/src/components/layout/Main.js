import React, { Component } from 'react';
import Customers from '../customers/Customers';

class Main extends Component {
    state = {
        controllers: [],
        statuses: [],
        data: "",
    }
    componentDidMount(){
        const { customers } = this.props;
        let customer_array = [];
        let statuses_array = [];
        for(let i = 0; i < customers.length; i++){
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
        if(controllers !== [] && statuses !== [] && data !== ""){
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
                    {/* {console.log(data)} */}
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
    // let temp_arr = [];
    let test = "";
    for(let i = 0; i < arrC.length; i++){
        if(arrS[i] !== false){
            // temp_arr.push(arrC[i].id);
            // console.log(arrC.length === i);
            // console.log(i);
            if(i !== arrC.length-1){
                test += "id="+arrC[i].id+"&";
            }else{
                test += "id="+arrC[i].id;
            }
        }
    }

    // console.log(test);
    // return temp_arr;
    return test;
}


export default Main;
