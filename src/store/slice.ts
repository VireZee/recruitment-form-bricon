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
export interface Academics {
    education: string
    institution: string
    major: string
    start: string
    end: string
    remarks: string
}
export interface Experiences {
    name: string
    industry: string
    position: string
    salary: number
    supervisor: string
    subordinates: number
    start: string
    end: string
    tasks: string
    reason: string
}
export interface Organizations {
    name: string
    position: string
    start: string
    end: string
}
export interface Recommendations {
    name: string
    position: string
    phone: string
}
export interface Emergencies {
    name: string
    relation: string
    phone: string
}
interface State {
    [key: string]: string | number | Families[] | Academics[] | Experiences[] | Organizations[] | Recommendations[] | Emergencies[]
    families: Families[]
    academics: Academics[]
    experiences: Experiences[]
    organizations: Organizations[]
    recommendations: Recommendations[]
    emergencies: Emergencies[]
}
const initialState: State = {
    position: '',
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
    academics: [
        {
            education: '',
            institution: '',
            major: '',
            start: '',
            end: '',
            remarks: 'Tidak Lulus'
        }
    ],
    experiences: [
        {
            name: '',
            industry: '',
            position: '',
            salary: 0,
            supervisor: '',
            subordinates: 0,
            start: '',
            end: '',
            tasks: '',
            reason: ''
        }
    ],
    organizations: [
        {
            name: '',
            position: '',
            start: '',
            end: ''
        }
    ],
    recommendations: [
        {
            name: '',
            position: '',
            phone: ''
        }
    ],
    emergencies: [
        {
            name: '',
            relation: '',
            phone: ''
        }
    ],
    hobby: '',
    hospital: '',
    overtime: '',
    salary: 0,
    facility: '',
    availability: '',
    strengths: '',
    weaknesses: '',
    degree: '',
    partner: '',
    shift: '',
    relocation: '',
    business_trip: ''
}
const App = createSlice({
    name: 'APP',
    initialState,
    reducers: {
        change: (state, { payload: { key, idx, name, value } }: PayloadAction<{
            key?: 'families' | 'academics' | 'experiences' | 'organizations' | 'recommendations' | 'emergencies',
            idx?: number,
            name: keyof State | keyof Families | keyof Academics | keyof Experiences | keyof Organizations | keyof Recommendations | keyof Emergencies,
            value: string | number
        }>) => {
            if (key === 'families' && typeof idx === 'number') state.families[idx]![name as keyof Families] = String(value)
            else if (key === 'academics' && typeof idx === 'number') state.academics[idx]![name as keyof Academics] = String(value)
            else state[name as keyof State] = typeof value === 'number' ? Number(value) : String(value)
        },
        add: <K extends keyof State>(state: State, { payload: { key, item } }: PayloadAction<{ key: K, item: State[K] extends Array<infer U> ? U : never }>) => {
            (state[key] as Array<typeof item>).push(item)
        },
        remove: <K extends keyof State>(state: State, { payload: { key, idx } }: PayloadAction<{ key: K, idx: number }>) => {
            (state[key] as Array<State[K] extends Array<infer U> ? U : never>).splice(idx, 1)
        }
    }
})
export const { change, add, remove } = App.actions
export default App.reducer