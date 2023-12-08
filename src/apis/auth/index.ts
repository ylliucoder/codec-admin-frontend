import http from "@/utils/http";

const test = () => http.post('http://localhost:9999/test')

export const AuthApi = {test}
