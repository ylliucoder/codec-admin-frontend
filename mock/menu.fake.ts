import {defineFakeRoute} from "vite-plugin-fake-server/client";

export default defineFakeRoute([{
    url: "/menu",
    method: "get",
    response: (): ApiRes<object> => ({
        code: 200,
        success: true,
        message: "",
        data: [{

        }]
    })
}])