import type { AxiosRequestConfig } from "axios";
import {BaseApiService} from "../api.service";


const apiBookingUrl = import.meta.env.VITE_APP_API_BOOKING_URL;
const apiBookingKey = import.meta.env.VITE_APP_API_BOOKING_KEY;
const apiBookingHost = import.meta.env.VITE_APP_API_BOOKING_HOST;

const bookingApiService = new BaseApiService(apiBookingUrl, {
    "X-RapidAPI-Key": apiBookingKey,
    "X-RapidAPI-Host": apiBookingHost,
});

const getHotels = async (config?: AxiosRequestConfig): Promise<any> => {
  return await bookingApiService.get(`/static/hotels`, { ...config});
};

export { getHotels };
