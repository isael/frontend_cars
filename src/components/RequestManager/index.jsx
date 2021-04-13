/* eslint-disable no-underscore-dangle */
import axios from 'axios'

class RequestManager {
    async updateCar (body){
        try {
            const url = 'http://192.168.0.11:3000/updateCar';
            const updateResponse = await axios.post(url, body);
            if (updateResponse.statusText === 'OK') {
                return updateResponse.data;
            } else {
                return {errorData: updateResponse}
            }
        } catch (error) {
            return {errorData: error}
        }
    }

    async getListOfCars() {
        try{
            const getCarsResponse = await axios.get('http://192.168.0.11:3000/cars');
            return getCarsResponse.data;
        }catch (error){
            return null;
        }
    }
}
export default new RequestManager();