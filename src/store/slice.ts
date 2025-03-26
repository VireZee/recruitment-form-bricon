import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

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
    achievement: string
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
export interface State {
    [key: string]: string | number | Families[] | Academics[] | Experiences[] | Organizations[] | Recommendations[] | Emergencies[] | boolean
    families: Families[]
    academics: Academics[]
    experiences: Experiences[]
    organizations: Organizations[]
    recommendations: Recommendations[]
    emergencies: Emergencies[]
}
export const initialState: State = {
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
            achievement: '',
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
    soft_skills: '',
    hospital: '',
    salary: 0,
    facility: '',
    availability: '',
    strengths: '',
    weaknesses: '',
    degree: '',
    partner: '',
    shift: '',
    relocation: '',
    division_relocation: '',
    business_trip: '',
    loading: false
}
const App = createSlice({
    name: 'APP',
    initialState,
    reducers: {
        change: <K extends keyof State, T extends State[K] extends Array<infer U> ? U : never>(state: State, { payload: { key, idx, name, value } }: PayloadAction<{
            key?: K
            idx?: number,
            name: keyof State | keyof T,
            value: string | number
        }>) => {
            if (key && typeof idx === "number") {
                const target = (state[key] as T[])[idx]!
                if (key === 'experiences' && (name === "salary" || name === "subordinates")) (target[name as keyof T] as number) = Number(value)
                else (target[name as keyof T] as string) = String(value)
            } else state[name as keyof State] = typeof value === 'number' ? Number(value) : String(value)
        },
        add: <K extends keyof State>(state: State, { payload: { key, item } }: PayloadAction<{ key: K, item: Extract<State[K], unknown[]>[number] }>) => {
            (state[key] as Array<typeof item>).push(item)
        },
        remove: <K extends keyof State>(state: State, { payload: { key, idx } }: PayloadAction<{ key: K, idx: number }>) => {
            (state[key] as Array<State[K] extends Array<infer U> ? U : never>).splice(idx, 1)
        },
        setLoading: (state, { payload }: PayloadAction<boolean>) => {
            state['loading'] = payload
        }
    }
})
export const { change, add, remove, setLoading } = App.actions
export default App.reducer