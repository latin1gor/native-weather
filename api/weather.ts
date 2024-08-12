import {apiKey} from "@/constants/weather";
import axios from "axios";

interface IWeatherParams {
    cityName?: string
    days? : string
}

const forecastEndpoint = (params: IWeatherParams) => `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}&aqi=no&alerts=no`
const locationsEndpoint = (params: IWeatherParams) => `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}`

const apiCall = async (endpoint: string) => {
    const options = {
        method: 'GET',
        url: endpoint
    }

    try{
        const response = await axios.request(options);
        return response.data;
    } catch (e) {
        console.error(e)
        return null
    }
}

export const fetchWeatherForecast = (params: IWeatherParams) => apiCall(forecastEndpoint(params))
export const fetchLocations = (params: IWeatherParams) => apiCall(locationsEndpoint(params))
