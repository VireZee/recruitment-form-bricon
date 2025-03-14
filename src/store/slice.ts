import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Families {
    name: string
    relation: string
    pob: string
    dob: string
    education: string
    job: string
}
interface State {
    [key: string]: string | number | Families[]
    families: Families[]
}
const initialState: State = {
    role: '',
    name: '',
    pob: '',
    dob: '',
    nin: '',
    license_c: '',
    license_a: '',
    tin: '',
    citizenship: '',
    gender: '',
    marital_status: '',
    religion: '',
    nin_address: '',
    address: '',
    email: '',
    phone: '',
    height: 0,
    weight: 0,
    families: [
        {
            name: '',
            relation: '',
            pob: '',
            dob: '',
            education: '',
            job: ''
        }
    ],
}
const App = createSlice({
    name: 'APP',
    initialState,
    reducers: {
        change: (state, { payload: { key, idx, name, value } }: PayloadAction<{ key?: 'families', idx?: number, name: keyof State | keyof Families, value: string | number }>) => {
            if (key === 'families' && typeof idx === 'number') state.families[idx]![name as keyof Families] = String(value)
            else state[name as keyof State] = typeof value === 'number' ? Number(value) : String(value)
        },
        add: (state, { payload: { key, item } }: PayloadAction<{ key: 'families', item: Families }>) => {
            if (key === 'families') state.families.push(item)
        },
        remove: (state, { payload: { key, idx } }: PayloadAction<{ key: 'families', idx: number }>) => {
            state[key].splice(idx, 1)
        }
    }
})
export const { change, add, remove } = App.actions
export default App.reducer