import http from "@/utils/http";

const test = () => http.get<ApiRes<string>>('/api/menu')

export const AuthApi = {test}
