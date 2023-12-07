import {createPinia} from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export * from '@/store/module/app'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export default pinia