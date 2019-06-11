import React, { Component } from 'react';
import {connect} from "react-redux";
import { getData } from "../../actions/dataActions";
import PropTypes from "prop-types";

import Customer from './Customer';

class Customers extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         data: props.data
    //     }
    // }

    componentDidMount(){
        const { data } = this.props;
        console.log(data);
    }



    render() {
        // const { data } = this.state;
        // console.log(data);
        // if(data){
        //     return (
        //         <div>
        //             {/* {customers.map(customer => {
        //                 return <Customer key={customer.id} data={customer}/>
        //             })} */}
        //         </div>
        //     )
        // }else{
        //     return <div>Loading...</div>
        // }
        return <div>Down</div>
    }
}

Customers.propTypes = {
    getData: PropTypes.func.isRequired,
};

export default connect((state) => {return {data: state.data.data}},{getData})(Customers);
