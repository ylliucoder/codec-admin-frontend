import axios, {type AxiosError, type AxiosInstance, AxiosResponse, type InternalAxiosRequestConfig} from "axios";
import qs from 'qs'

class AxiosHttp {
    private instance!: AxiosInstance

    constructor() {
        this.initAxiosInstance();
        this.initRequestInterceptor();
        this.initResponseInterceptor();
    }

    private initAxiosInstance() {
        this.instance = axios.create({
            timeout: 30 * 1000,
            paramsSerializer: (params) => qs.stringify(params, {arrayFormat: 'indices', allowDots: true})
        })
    }

    private initRequestInterceptor() {
        this.instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
            return config
        }, (error: AxiosError) => {
            return Promise.reject(error)
        })
    }

    private initResponseInterceptor() {
        this.instance.interceptors.response.use((response: AxiosResponse) => {
            const {data} = response

            return data
        }, (error) => {
            return Promise.reject(error)
        })
    }

    get<T>(url: string, params?: object, config?: InternalAxiosRequestConfig): Promise<T> {
        return this.instance.request({
            method: 'get',
            url,
            params,
            ...config
        })
    }

    post<T>(url: string, data?: object, config?: InternalAxiosRequestConfig): Promise<T> {
        return this.instance.request({
            method: 'post',
            url,
            data,
            ...config
        })
    }
}

const http = new AxiosHttp()
export default http