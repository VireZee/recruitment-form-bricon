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
    name: 'REG',
    initialState,
    reducers: {
        change: (state, { payload: { name, value } }: PayloadAction<{ name: keyof State, value: string | number }>) => {
            state[name] = typeof value === 'number' ? Number(value) : String(value)
        },
        itemChange: (state, { payload: { key, idx, name, value } }: PayloadAction<{ key: 'families', idx: number, name: keyof Families, value: string | number }>) => {
            if (key === 'families') state.families[idx]![name] = String(value)
        }
    }
})
export const { change, itemChange } = App.actions
export default App.reducer