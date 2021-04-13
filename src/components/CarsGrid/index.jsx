import React from 'react';
import Car from '../Car';
import RequestManager from '../RequestManager';
import './styles.css';

class CarsGrid extends React.Component{
    constructor(){
        super();
        this.state = {
            listOfCars: []
        }
    }

    componentDidMount(){
        RequestManager.getListOfCars().then(listOfCarsResponse =>{
            console.log(listOfCarsResponse);
            if(listOfCarsResponse !== null){
                this.setState({listOfCars: listOfCarsResponse});
            }else{
                this.setState({listOfCars: []});
            }
        });
    }
    

    render(){
        return (
            <div className="cars-grid">
                {
                    this.state.listOfCars ? 
                    this.state.listOfCars.map( car =>{
                        return (
                            <Car car={car}/>
                        )
                    })
                    : null
                }
            </div>
        );
    }
}

export default CarsGrid;