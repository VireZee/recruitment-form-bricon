import type { Store } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'

const ReduxStore: Store = configureStore({
    reducer: {
    }
})
export type RootState = ReturnType<typeof ReduxStore.getState>
export default ReduxStore