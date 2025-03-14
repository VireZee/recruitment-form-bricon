import type { Store } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import App from './slice'

const ReduxStore: Store = configureStore({
    reducer: {
        APP: App
    }
})
export type RootState = ReturnType<typeof ReduxStore.getState>
export default ReduxStore