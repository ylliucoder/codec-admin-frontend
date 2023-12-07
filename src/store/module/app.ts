import {defineStore} from "pinia";
import {ref} from "vue";
import {APP_STORE, STORE_PREFIX} from "../constant.ts";

const appStoreSetup = () => {
    const theme = ref<"dark" | "light">("light")
    const toggleTheme = () => {
        switch (theme.value) {
            case "light":
                theme.value = "dark"
                break
            case "dark":
                theme.value = "light"
                break
        }
    }
    return {theme, toggleTheme}
}

export const useAppStore = defineStore(APP_STORE, appStoreSetup, {
    persist: {
        key: STORE_PREFIX + ":" + APP_STORE,
    }
})