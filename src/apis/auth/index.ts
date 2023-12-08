import http from "@/utils/http";

const test = () => http.post<ApiRes<string>>('http://localhost:9999/test')

export const AuthApi = {test}
