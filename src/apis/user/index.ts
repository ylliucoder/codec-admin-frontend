import http from "@/utils/http.ts";

export const getUserInfo = () => {
    return http.get<ApiRes<any>>('/user/info')
}

export const getUserRoute = () => {
    return http.get<ApiRes<MenuItem[]>>('/user/route')
}