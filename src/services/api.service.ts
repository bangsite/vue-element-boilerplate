import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";
import { axiosInstance } from "@/services/config/interceptors.axios";
import { i18n } from "@/plugins/vue-i18n";
import { onLoading } from "@/hooks/useLoading";
import { NotificationService } from "@/services/notification.service";

export class BaseApiService {
    private axiosInstance: AxiosInstance;

    constructor(baseURL: string, headers: Record<string, string> = {}) {
        this.axiosInstance = axios.create({
            baseURL,
            headers: {
                "Content-Type": "application/json",
                ...headers,
            },
        });

        // set up interceptor
        this.axiosInstance.interceptors.request.use(this.onRequest, this.onRequestError);
        this.axiosInstance.interceptors.response.use(this.onResponse, this.onResponseError);
    }

    private onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
        onLoading("start");

        const token = localStorage.getItem("token");
        if (token) config.headers = { ...config.headers, Authorization: `Bearer ${token}` };

        if (i18n.global.locale) {
            config.headers = { ...config.headers, "Accept-Language": i18n.global.locale };
        }

        // if (config?.data instanceof FormData) {
        //   headers["Content-Type"] = "multipart/form-data";
        // } else {
        //   headers["Content-Type"] = "application/json";
        // }

        return config;
    };

    private onRequestError = (error: Error | AxiosError): Promise<AxiosError> => {
        onLoading("cancel");

        return Promise.reject(error);
    };

    private onResponse = (response: AxiosResponse): AxiosResponse => {
        onLoading("end");
        NotificationService.showSuccess(response);
        return response;
    };

    private onResponseError = (error: AxiosError): Promise<AxiosError> => {
        onLoading("cancel");
        NotificationService.showError(error);
        return Promise.reject(error.response);
    };

    // Generic methods for making requests
    public get<T>(url: string, config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return axiosInstance.get<T>(`${url}`, { ...config });
    }

    public post<T>(url: string, data: Record<string, any>, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return axiosInstance.post<T>(`${url}`, data, config);
    }

    public put<T>(url: string, data: Record<string, any>, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return axiosInstance.put<T>(`${url}`, data, config);
    }

    public patch<T>(url: string, data: Record<string, any>, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return axiosInstance.patch<T>(`${url}`, data, config);
    }

    public delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return axiosInstance.delete<T>(`${url}`, config);
    }

    public postWithFile<T = unknown>(url: string, file: File, config?: AxiosRequestConfig) {
        return axiosInstance.post<T>(url, file, {
            ...config,
            headers: { "Content-Type": "multipart/form-data" },
        });
    }
}

