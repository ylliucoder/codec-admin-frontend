import http from "@/utils/http";

export const test = () => http.get<ApiRes<string>>('/menu')

