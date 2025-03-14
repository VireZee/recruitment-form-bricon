import type { Store } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import App from './Slice'

const ReduxStore: Store = configureStore({
    reducer: {
        APP: App
    }
})
export type RootState = ReturnType<typeof ReduxStore.getState>
export default ReduxStore