import React from 'react';
import RequestManager from '../RequestManager';
import './styles.css';

class ModalForm extends React.Component{
    constructor(props){
        super(props);
        this.date = this.props.estimatedate ? this.props.estimatedate.replaceAll('/','-'): '';
        this.onClose = this.onClose.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onClose(event){
        event.stopPropagation();
        event.preventDefault();
        this.props.closeModal(event);
    }

    onSubmit(event){
        event.stopPropagation();
        event.preventDefault();
        console.log(event);
        const body = {
            id: this.props.originId,
            estimatedate: event.target[0].value,
            person: event.target[1].value,
        };
        RequestManager.updateCar(body).then((response)=>{
            if(response.errorData){
                alert("Server Error: Try again later");
                console.error(response.errorData);
            }else{
                this.props.closeModal();
                this.props.successCallback(response);
            }
        });
    }

    render(){
        return (
            <div className='modal-form'>
                <form onSubmit={this.onSubmit} method="POST">
                    <h1>{`ID: ${this.props.id || 'Not available'}`}</h1>
                    <input type='date' name='date' defaultValue={this.date}></input>
                    <input type='text' name='name' defaultValue={this.props.name}></input>
                    <button className="update-button">
                        {"Update"}
                    </button>
                    <button type='button' className="cancel-button" onClick={this.onClose}>
                        {"Close"}
                    </button>
                </form>
            </div>
        );
    }
}

export default ModalForm;