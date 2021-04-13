import React from 'react';
import './styles.css';

class CarInfo extends React.Component{
    constructor(props){
        super(props);
    } 

    render(){
        return (
            <div className='car-info'>
                <ul>
                    <li>{`ID: ${this.props.id || 'Not available'}`}</li>
                    <li>{`Brand: ${this.props.make || 'Not available'}`}</li>
                    <li>{`Model: ${this.props.model || 'Not available'}`}</li>
                    <li>{`Description: ${this.props.description || 'Not available'}`}</li>
                    <li>{`Kilometers: ${this.props.km || 'Not available'}`}</li>
                    <li>{`Estimate Date: ${(this.props.estimatedate && this.props.estimatedate.replaceAll('-','/')) || 'Not available'}`}</li>
                </ul>
            </div>
        );
    }
}

export default CarInfo;