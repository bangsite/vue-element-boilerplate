import type { AxiosRequestConfig,AxiosResponse  } from "axios";
import {BaseApiService} from "../api.service";

const apiAnimeJikanURL= import.meta.env.VITE_APP_API_ANIMEJIKAN_URL;
const animeJikanApiService= new BaseApiService(apiAnimeJikanURL);

const getTrendingAnime = async (config?: AxiosRequestConfig): Promise<AxiosResponse<any>> => {
  return await animeJikanApiService.get(`/top/anime`, { ...config });
};

export { getTrendingAnime };
