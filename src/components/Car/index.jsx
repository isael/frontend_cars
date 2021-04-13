import React from 'react';
import { SELECTED } from './constants';
import CarInfo from '../CarInfo';
import ModalForm from '../ModalForm';
import './styles.css';

class Car extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            car: this.props.car,
            className: this.props.car.person && this.props.car.person.trim() !== '' ? SELECTED : '',
            imageSrc: this.props.car.image,
            modal: false
        }
        this.listOfCars = null;
        this.onClick = this.onClick.bind(this);
        this.onErrorImage = this.onErrorImage.bind(this);
        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.successCallbackModal = this.successCallbackModal.bind(this);
    }

    onClick(event){
        if(this.state.className === ''){
            this.setState({modal: true});
        }else{
            //update database
            this.setState({ className: ''})
        }
    }

    successCallbackModal(response){
        this.setState({
            ...this.state,
            car: response,
            className: SELECTED
        });
    }

    showModal(){
        const closeModal = this.closeModal;
        return (
            <ModalForm
                id={this.state.car.id}
                originId={this.state.car._id}
                estimatedate={this.state.car.estimatedate}
                name={this.state.car.person}
                successCallback = {this.successCallbackModal}
                closeModal = {closeModal}
            />
        );
    }

    closeModal(event){
        this.setState({ modal: false});
    }

    onErrorImage(event){
        this.setState({
            imageSrc: 'https://menorcacarhire.com/wp-content/plugins/cars-seller-auto-classifieds-script/images/no-image.png'
        })
    }
    

    render(){
        return (
            <div className={`car ${this.state.className}`} onClick={this.onClick}>
                <div className='car-image'>
                    <img src={this.state.imageSrc} onError={this.onErrorImage}/>
                </div>
                <CarInfo
                    id={this.state.car.id}
                    make={this.state.car.make}
                    model={this.state.car.model}
                    estimatedate={this.state.car.estimatedate}
                    description={this.state.car.description}
                    kilometers={this.state.car.km}
                />
                {this.state.modal && this.showModal()}
            </div>
        );
    }
}

export default Car;