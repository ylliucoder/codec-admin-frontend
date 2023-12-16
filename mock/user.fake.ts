import {defineFakeRoute} from "vite-plugin-fake-server/client";
import {menus} from "./data/menu";

export default defineFakeRoute([{
    url: "/user/route",
    method: "get",
    response: (): ApiRes<MenuItem[]> => ({
        code: 200,
        success: true,
        message: "",
        data: menus
    })
}])