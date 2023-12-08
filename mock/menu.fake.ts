import {defineFakeRoute} from "vite-plugin-fake-server/client";
// console.log(import.meta.env.VITE_API_BASE_URL)

export default defineFakeRoute([{
    url: "/menu",
    method: "get",
    response: (): ApiRes<object> => ({
        code: 200,
        success: true,
        message: "",
        data: [{}]
    })
}])