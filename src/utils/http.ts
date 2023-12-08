import axios, {type AxiosError, type AxiosInstance, type InternalAxiosRequestConfig} from "axios";
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
        this.instance.interceptors.response.use()
    }

    get<T>(url: string, params?: object): Promise<T> {
        // get<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
        return this.instance.request({
            method: 'get',
            url,
            params,
        })
    }

    post<T>(url: string, data?: object): Promise<T> {
        return this.instance.request({
            method: 'post',
            url,
            data
        })
    }
}

const http = new AxiosHttp()
export default http