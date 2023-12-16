import {createPinia} from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export * from '@/store/module/appStore.ts'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export default pinia