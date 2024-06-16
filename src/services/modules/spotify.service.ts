import type { AxiosRequestConfig } from "axios";
import { Buffer } from "buffer";
import queryString from "query-string";

import ApiService from "../api.service";
import { Spotify } from "@/constant/externalAPI.ts";

const { url, client_id, client_secret, refresh_token } = Spotify;

const getAccessToken = async (data?: Record<any, any>, config?: AxiosRequestConfig): Promise<any> => {
  const keys = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

  return await ApiService.post(
    ``,
    new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
    {
      baseURL: "https://accounts.spotify.com/api/token",
      headers: {
        Authorization: `Basic ${keys}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      ...config,
    }
  );
};

const getAccessToken2 = async () => {
  // 'check note -- npm install buffer'
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: queryString.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });
  return response.json();
};

const getNewRelease = async (config?: AxiosRequestConfig): Promise<any> => {
  return await ApiService.get(`/browse/new-releases`, {
    baseURL: url,
    ...config,
  });
};
const getAlbums = async (id: string, config?: AxiosRequestConfig): Promise<any> => {
  return await ApiService.get(`/albums/${id}`, {
    baseURL: url,
    ...config,
  });
};

const encodeFormData = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export { getAccessToken, getAccessToken2, getNewRelease, getAlbums };
