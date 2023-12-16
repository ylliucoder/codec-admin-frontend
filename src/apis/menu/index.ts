import http from "@/utils/http.ts";

export function getMenuList() {
    return http.get<ApiRes<MenuItem[]>>('/menu/routes')
}