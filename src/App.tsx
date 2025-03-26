import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from './store/index'
import type { State, Families, Academics, Experiences, Organizations, Recommendations, Emergencies } from './store/Slice'
import { change, add, remove, setLoading } from './store/Slice'
// import axios, { AxiosError } from 'axios'
import './assets/styles/global.css'

const App: React.FC = () => {
    const dispatch = useDispatch()
    const appState = useSelector((state: RootState) => state.APP)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, key?: keyof State, idx?: number) => {
        const { name, value } = e.target
        if (key && typeof idx === 'number') dispatch(change({ key, idx, name, value }))
        else dispatch(change({ name, value }))
    }
    const handleAdd = <K extends keyof State>(key: K) => {
        const items = {
            families: {
                name: '',
                relation: '',
                pob: '',
                dob: '',
                education: '',
                job: ''
            },
            academics: {
                education: '',
                institution: '',
                major: '',
                start: '',
                end: '',
                remarks: 'Tidak Lulus'
            },
            experiences: {
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
            },
            organizations: {
                name: '',
                position: '',
                start: '',
                end: ''
            },
            recommendations: {
                name: '',
                position: '',
                phone: ''
            },
            emergencies: {
                name: '',
                relation: '',
                phone: ''
            }
        } as Record<K, Families | Academics | Experiences | Organizations | Recommendations | Emergencies>
        dispatch(add({ key, item: items[key] }))
    }
    const removeItemHandler = <K extends keyof State>(key: K, idx: number) => dispatch(remove({ key, idx }))
    const submit = async (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(setLoading(true))
        const formatPhoneNumber = (phone: string) => {
            const phoneRegex = phone.replace(/^[0+]+/, '')
            return `+62${phoneRegex}`
        }
        const formattedData = {
            ...appState,
            phone: formatPhoneNumber(appState.phone),
            recommendations: appState.recommendations.map((recommendation: Recommendations) => ({
                ...recommendation,
                phone: formatPhoneNumber(recommendation.phone)
            })),
            emergencies: appState.emergencies.map((emergency: Emergencies) => ({
                ...emergency,
                phone: formatPhoneNumber(emergency.phone)
            }))
        }
        try {
            // const response = await axios.post('http://odoobricon/API', formattedData)
            // console.log(response.data)
            console.log(formattedData, typeof formattedData)
        } catch (err) {
            // const e = err as AxiosError<{ message: string }>
            // alert(`Terjadi Kesalahan: ${e.response!.data.message}`)
            console.log(err)
        } finally {
            dispatch(setLoading(false))
        }
    }
    return (
        <>
            <header className="bg-[linear-gradient(to_bottom,#213f99,#1f3785)] p-5 text-white">
                <nav className="flex justify-between items-center">
                    {/* <div className="flex items-center space-x-3"> */}
                    {/* <img src="" className="w-24 h-24" alt="PT. Material Konstruksi Bangunan" /> */}
                    <h1 className="text-lg">PT. Material Konstruksi Bangunan</h1>
                    {/* </div> */}
                    <h2 className="text-lg">Application Form</h2>
                </nav>
            </header>
            <main className="max-w-7xl mx-auto w-full py-5">
                <form onSubmit={submit}>
                    <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center">
                        <label className="w-full sm:w-1/3 font-medium">Posisi Yang Dilamar</label>
                        <input
                            type="text"
                            className="w-full sm:w-2/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                            name="position"
                            value={appState.position}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <h2 className="text-[21px] text-white py-1.5 px-4 bg-[#337ab7] border border-[#2e6da4]">
                        I. DATA PRIBADI
                    </h2>
                    <div className="my-4 flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 items-start sm:items-center">
                        <label className="w-full sm:w-1/3 font-medium">Nama Lengkap</label>
                        <input
                            type="text"
                            className="w-full sm:w-2/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                            name="name"
                            value={appState.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="my-4 flex flex-col sm:flex-row items-start sm:items-center">
                        <label className="w-full sm:w-1/3 font-medium">Tempat Lahir</label>
                        <input
                            type="text"
                            className="w-full sm:w-2/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                            name="pob"
                            value={appState.pob}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="my-4 flex flex-col sm:flex-row items-start sm:items-center">
                        <label className="w-full sm:w-1/3 font-medium">Tanggal Lahir</label>
                        <input
                            type="date"
                            className="w-full sm:w-2/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                            name="dob"
                            value={appState.dob}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="my-4 flex flex-col sm:flex-row items-start sm:items-center">
                        <label className="w-full sm:w-1/3 font-medium">No. KTP</label>
                        <input
                            type="text"
                            className="w-full sm:w-2/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                            name="nin"
                            value={appState.nin}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="my-4 flex flex-col sm:flex-row items-start sm:items-center">
                        <label className="w-full sm:w-1/3 font-medium">No. SIM C</label>
                        <input
                            type="text"
                            className="w-full sm:w-2/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                            name="license_c"
                            value={appState.license_c}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="my-4 flex flex-col sm:flex-row items-start sm:items-center">
                        <label className="w-full sm:w-1/3 font-medium">No. SIM A</label>
                        <input
                            type="text"
                            className="w-full sm:w-2/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                            name="license_a"
                            value={appState.license_a}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="my-4 flex flex-col sm:flex-row items-start sm:items-center">
                        <label className="w-full sm:w-1/3 font-medium">No. NPWP</label>
                        <input
                            type="text"
                            className="w-full sm:w-2/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                            name="tin"
                            value={appState.tin}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row my-4">
                        <label className="w-full sm:w-1/3 font-medium">Kewarganegaraan</label>
                        <div className="w-full sm:w-2/3 flex gap-4">
                            {['WNI', 'WNA'].map(citizenship => (
                                <label key={citizenship} className="flex items-center">
                                    <input type="radio" className="mr-2" name="citizenship" value={citizenship} onChange={handleChange} required />
                                    {citizenship}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row my-4">
                        <label className="w-full sm:w-1/3 font-medium">Jenis Kelamin</label>
                        <div className="w-full sm:w-2/3 flex gap-4">
                            {['Laki - Laki', 'Perempuan'].map(gender => (
                                <label key={gender} className="flex items-center">
                                    <input type="radio" className="mr-2" name="gender" value={gender} onChange={handleChange} required />
                                    {gender}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row my-4">
                        <label className="w-full sm:w-1/3 font-medium">Status</label>
                        <div className="w-full sm:w-2/3 flex gap-4 flex-wrap">
                            {['Menikah', 'Lajang', 'Cerai'].map(marital_status => (
                                <label key={marital_status} className="flex items-center">
                                    <input type="radio" className="mr-2" name="marital_status" value={marital_status} onChange={handleChange} required />
                                    {marital_status}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row my-4">
                        <label className="w-full sm:w-1/3 font-medium">Agama</label>
                        <div className="w-full sm:w-2/3 flex gap-4 flex-wrap">
                            {['Islam', 'Kristen', 'Katolik', 'Buddha', 'Hindu', 'Konghuchu', 'Lainnya'].map(religion => (
                                <label key={religion} className="flex items-center">
                                    <input type="radio" className="mr-2" name="agama" value={religion} onChange={handleChange} required />
                                    {religion}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="my-4 flex flex-col sm:flex-row items-start sm:items-center">
                        <label className="w-full sm:w-1/3 font-medium">Alamat Sesuai KTP</label>
                        <input
                            type="text"
                            className="w-full sm:w-2/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                            name="nin_address"
                            value={appState.nin_address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="my-4 flex flex-col sm:flex-row items-start sm:items-center">
                        <label className="w-full sm:w-1/3 font-medium">Alamat Saat Ini</label>
                        <input
                            type="text"
                            className="w-full sm:w-2/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                            name="address"
                            value={appState.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="my-4 flex flex-col sm:flex-row items-start sm:items-center">
                        <label className="w-full sm:w-1/3 font-medium">Email</label>
                        <input
                            type="email"
                            className="w-full sm:w-2/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                            name="email"
                            value={appState.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="my-4 flex flex-col sm:flex-row items-start sm:items-center">
                        <label className="w-full sm:w-1/3 font-medium">No. Telepon / HP</label>
                        <div className="w-full sm:w-2/3 flex">
                            <span className="bg-gray-200 text-gray-700 px-3 py-2 rounded-l">+62</span>
                            <input
                                type="tel"
                                className="w-full p-2 border border-gray-300 rounded-r focus:ring focus:ring-blue-300"
                                name="phone"
                                value={appState.phone}
                                onChange={handleChange}
                                pattern="[0-9]{9,14}"
                                required
                            />
                        </div>
                    </div>
                    <div className="my-4 flex flex-col sm:flex-row items-start sm:items-center">
                        <label className="w-full sm:w-1/3 font-medium">Tinggi Badan</label>
                        <div className="w-full sm:w-2/3 flex">
                            <input
                                type="number" step={0.01}
                                className="w-full p-2 border border-gray-300 rounded-l focus:ring focus:ring-blue-300"
                                name="height"
                                value={appState.height}
                                onChange={handleChange}
                            />
                            <span className="bg-gray-200 text-gray-700 px-3 py-2 rounded-r">cm</span>
                        </div>
                    </div>
                    <div className="my-4 flex flex-col sm:flex-row items-start sm:items-center">
                        <label className="w-full sm:w-1/3 font-medium">Berat Badan</label>
                        <div className="w-full sm:w-2/3 flex">
                            <input
                                type="number" step={0.01}
                                className="w-full p-2 border border-gray-300 rounded-l focus:ring focus:ring-blue-300"
                                name="weight"
                                value={appState.weight}
                                onChange={handleChange}
                            />
                            <span className="bg-gray-200 text-gray-700 px-3 py-2 rounded-r">kg</span>
                        </div>
                    </div>
                    <h2 className="text-[21px] text-white py-1.5 px-4 bg-[#337ab7] border border-[#2e6da4]">
                        II. DATA ANGGOTA KELUARGA (TERMASUK ANDA)
                    </h2>
                    {appState.families.map((family: Families, idx: number) => (
                        <div key={idx} className="flex flex-col sm:flex-row gap-3 my-4">
                            <input
                                type="text"
                                className="w-full sm:w-1/5 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                                name="name"
                                value={family.name}
                                placeholder="Nama"
                                onChange={e => handleChange(e, 'families', idx)}
                                required
                            />
                            <input
                                type="text"
                                className="w-full sm:w-1/5 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                                name="relation"
                                value={family.relation}
                                placeholder="Hubungan"
                                onChange={e => handleChange(e, 'families', idx)}
                                required
                            />
                            <input
                                type="text"
                                className="w-full sm:w-1/5 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                                name="pob"
                                value={family.pob}
                                placeholder="Tempat Lahir"
                                onChange={e => handleChange(e, 'families', idx)}
                                required
                            />
                            <input
                                type={family.dob ? "date" : "text"}
                                className="w-full sm:w-1/5 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                                name="dob"
                                value={family.dob}
                                placeholder="Tanggal Lahir"
                                onFocus={e => e.target.type = "date"}
                                onBlur={e => family.dob ? e.target.type = "date" : e.target.type = "text"}
                                onChange={e => handleChange(e, 'families', idx)}
                                required
                            />
                            <input
                                type="text"
                                className="w-full sm:w-1/5 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                                name="education"
                                value={family.education}
                                placeholder="Pendidikan"
                                onChange={e => handleChange(e, 'families', idx)}
                                required
                            />
                            <input
                                type="text"
                                className="w-full sm:w-1/5 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                                name="job"
                                value={family.job}
                                placeholder="Pekerjaan"
                                onChange={e => handleChange(e, 'families', idx)}
                                required
                            />
                            {appState.families.length > 1 && (
                                <div className="flex justify-center">
                                    <button
                                        type="button"
                                        className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition duration-200"
                                        onClick={() => removeItemHandler('families', idx)}
                                    >
                                        Hapus
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="flex justify-center sm:justify-end my-3">
                        <button
                            type="button"
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
                            onClick={() => handleAdd('families')}
                        >
                            Tambah
                        </button>
                    </div>
                    <h2 className="text-[21px] text-white py-1.5 px-4 bg-[#337ab7] border border-[#2e6da4]">
                        III. DATA PENDIDIKAN FORMAL DAN NON-FORMAL
                    </h2>
                    {appState.academics.map((academy: Academics, idx: number) => (
                        <div key={idx} className="flex flex-col sm:flex-row gap-3 my-4">
                            <select
                                className="w-full sm:w-1/5 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                                name="education"
                                value={academy.education}
                                onChange={e => handleChange(e, 'academics', idx)}
                                required
                            >
                                <option value="" disabled>Pilih Tingkat Pendidikan</option>
                                {['PELATIHAN', 'SD', 'SMP', 'SMA', 'SMK', 'D1', 'D2', 'D3', 'S1', 'S2', 'S3'].map(level => (
                                    <option key={level} value={level}>{level}</option>
                                ))}
                            </select>
                            <input
                                type="text"
                                className="w-full sm:w-1/5 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                                name="institution"
                                value={academy.institution}
                                placeholder="Nama Institusi"
                                onChange={e => handleChange(e, 'academics', idx)}
                                required
                            />
                            <input
                                type="text"
                                className="w-full sm:w-1/5 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                                name="major"
                                value={academy.major}
                                placeholder="Jurusan"
                                onChange={e => handleChange(e, 'academics', idx)}
                                required
                            />
                            <input
                                type="number"
                                min={1900}
                                className="w-full sm:w-1/5 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                                name="start"
                                value={academy.start}
                                placeholder="Tahun Masuk"
                                onChange={e => handleChange(e, 'academics', idx)}
                                required
                            />
                            <input
                                type="number"
                                min={1900}
                                className="w-full sm:w-1/5 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                                name="end"
                                value={academy.end}
                                placeholder="Tahun Selesai"
                                onChange={e => handleChange(e, 'academics', idx)}
                                required
                            />
                            <select
                                className="w-full sm:w-1/5 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                                name="remarks"
                                value={academy.remarks}
                                onChange={e => handleChange(e, 'academics', idx)}
                                required
                            >
                                <option value="Lulus">Lulus</option>
                                <option value="Tidak Lulus">Tidak Lulus</option>
                            </select>
                            {appState.academics.length > 1 && (
                                <div className="flex justify-center">
                                    <button
                                        type="button"
                                        className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition duration-200"
                                        onClick={() => removeItemHandler('academics', idx)}
                                    >
                                        Hapus
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="flex justify-center sm:justify-end my-3">
                        <button
                            type="button"
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
                            onClick={() => handleAdd('academics')}
                        >
                            Tambah
                        </button>
                    </div>
                    <h2 className="text-[21px] text-white py-1.5 px-4 bg-[#337ab7] border border-[#2e6da4]">
                        IV. RIWAYAT PEKERJAAN / MAGANG KERJA
                    </h2>
                    {appState.experiences.map((experience: Experiences, idx: number) => (
                        <div key={idx}>
                            <div className="my-4 flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 items-start sm:items-center">
                                <label className="w-full sm:w-1/3 font-medium">Nama Perusahaan</label>
                                <input
                                    type="text"
                                    className="w-full sm:w-2/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                                    name="name"
                                    value={experience.name}
                                    onChange={e => handleChange(e, 'experiences', idx)}
                                    required
                                />
                            </div>
                            <div className="my-4 flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 items-start sm:items-center">
                                <label className="w-full sm:w-1/3 font-medium">Bidang Usaha</label>
                                <input
                                    type="text"
                                    className="w-full sm:w-2/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                                    name="industry"
                                    value={experience.industry}
                                    onChange={e => handleChange(e, 'experiences', idx)}
                                    required
                                />
                            </div>
                            <div className="my-4 flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 items-start sm:items-center">
                                <label className="w-full sm:w-1/3 font-medium">Jabatan Terakhir</label>
                                <input
                                    type="text"
                                    className="w-full sm:w-2/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                                    name="position"
                                    value={experience.position}
                                    onChange={e => handleChange(e, 'experiences', idx)}
                                    required
                                />
                            </div>
                            <div className="my-4 flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 items-start sm:items-center">
                                <label className="w-full sm:w-1/3 font-medium">Gaji Terakhir</label>
                                <div className="w-full sm:w-2/3 flex">
                                    <span className="bg-gray-200 text-gray-700 px-3 py-2 rounded-l">Rp.</span>
                                    <input
                                        type="number"
                                        className="w-full p-2 border border-gray-300 rounded-r focus:ring focus:ring-blue-300"
                                        name="salary"
                                        value={experience.salary}
                                        onChange={e => handleChange(e, 'experiences', idx)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="my-4 flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 items-start sm:items-center">
                                <label className="w-full sm:w-1/3 font-medium">Nama Atasan</label>
                                <input
                                    type="text"
                                    className="w-full sm:w-2/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                                    name="supervisor"
                                    value={experience.supervisor}
                                    onChange={e => handleChange(e, 'experiences', idx)}
                                    required
                                />
                            </div>
                            <div className="my-4 flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 items-start sm:items-center">
                                <label className="w-full sm:w-1/3 font-medium">Jumlah Bawahan</label>
                                <input
                                    type="number"
                                    className="w-full sm:w-2/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                                    name="subordinates"
                                    value={experience.subordinates}
                                    onChange={e => handleChange(e, 'experiences', idx)}
                                    required
                                />
                            </div>
                            <div className="my-4 flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 items-start sm:items-center">
                                <label className="w-full sm:w-1/3 font-medium">Masuk</label>
                                <input
                                    type="month"
                                    className="w-full sm:w-2/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                                    name="start"
                                    value={experience.start}
                                    onChange={e => handleChange(e, 'experiences', idx)}
                                    required
                                />
                            </div>
                            <div className="my-4 flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 items-start sm:items-center">
                                <label className="w-full sm:w-1/3 font-medium">Keluar</label>
                                <input
                                    type="month"
                                    className="w-full sm:w-2/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                                    name="end"
                                    value={experience.end}
                                    onChange={e => handleChange(e, 'experiences', idx)}
                                    required
                                />
                            </div>
                            <div className="my-4 flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 items-start sm:items-center">
                                <label className="w-full sm:w-1/3 font-medium">Uraian Tugas</label>
                                <textarea
                                    rows={7}
                                    className="w-full sm:w-2/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                                    name="tasks"
                                    value={experience.tasks}
                                    onChange={e => handleChange(e, 'experiences', idx)}
                                    required
                                />
                            </div>
                            <div className="my-4 flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 items-start sm:items-center">
                                <label className="w-full sm:w-1/3 font-medium">Prestasi Kerja / Pencapaian</label>
                                <textarea
                                    rows={7}
                                    className="w-full sm:w-2/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                                    name="achievement"
                                    value={experience.achievement}
                                    onChange={e => handleChange(e, 'experiences', idx)}
                                    required
                                />
                            </div>
                            <div className="my-4 flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 items-start sm:items-center">
                                <label className="w-full sm:w-1/3 font-medium">Alasan Meninggalkan Perusahaan</label>
                                <input
                                    type="text"
                                    className="w-full sm:w-2/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                                    name="reason"
                                    value={experience.reason}
                                    onChange={e => handleChange(e, 'experiences', idx)}
                                    required
                                />
                            </div>
                            {appState.experiences.length > 1 && (
                                <div className="flex justify-center my-4">
                                    <button
                                        type="button"
                                        className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition duration-200"
                                        onClick={() => removeItemHandler('experiences', idx)}
                                    >
                                        Hapus
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="flex justify-center sm:justify-end my-3">
                        <button
                            type="button"
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
                            onClick={() => handleAdd('experiences')}
                        >
                            Tambah
                        </button>
                    </div>
                    <h2 className="text-[21px] text-white py-1.5 px-4 bg-[#337ab7] border border-[#2e6da4]">
                        V. NAMA KEGIATAN / ORGANISASI
                    </h2>
                    {appState.organizations.map((organization: Organizations, idx: number) => (
                        <div key={idx} className="flex flex-col sm:flex-row gap-3 my-4">
                            <input
                                type="text"
                                className="w-full sm:w-1/4 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                                name="name"
                                value={organization.name}
                                placeholder="Nama"
                                onChange={e => handleChange(e, 'organizations', idx)}
                                required
                            />
                            <input
                                type="text"
                                className="w-full sm:w-1/4 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                                name="position"
                                value={organization.position}
                                placeholder="Jabatan"
                                onChange={e => handleChange(e, 'organizations', idx)}
                                required
                            />
                            <input
                                type={organization.start ? "month" : "text"}
                                className="w-full sm:w-1/4 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                                name="start"
                                value={organization.start}
                                placeholder="Dari"
                                onFocus={e => e.target.type = "month"}
                                onBlur={e => organization.start ? e.target.type = "month" : e.target.type = "text"}
                                onChange={e => handleChange(e, 'organizations', idx)}
                                required
                            />
                            <input
                                type={organization.end ? "month" : "text"}
                                className="w-full sm:w-1/4 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                                name="end"
                                value={organization.end}
                                placeholder="Sampai"
                                onFocus={e => e.target.type = "month"}
                                onBlur={e => organization.end ? e.target.type = "month" : e.target.type = "text"}
                                onChange={e => handleChange(e, 'organizations', idx)}
                                required
                            />
                            {appState.organizations.length > 1 && (
                                <div className="flex justify-center">
                                    <button
                                        type="button"
                                        className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition duration-200"
                                        onClick={() => removeItemHandler('organizations', idx)}
                                    >
                                        Hapus
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="flex justify-center sm:justify-end my-3">
                        <button
                            type="button"
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
                            onClick={() => handleAdd('organizations')}
                        >
                            Tambah
                        </button>
                    </div>
                    <h2 className="text-[21px] text-white py-1.5 px-4 bg-[#337ab7] border border-[#2e6da4]">
                        VI. REKOMENDASI
                    </h2>
                    {appState.recommendations.map((recommendation: Recommendations, idx: number) => (
                        <div key={idx} className="flex flex-col sm:flex-row gap-3 my-4">
                            <input
                                type="text"
                                className="w-full sm:w-1/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                                name="name"
                                value={recommendation.name}
                                placeholder="Nama"
                                onChange={e => handleChange(e, 'recommendations', idx)}
                                required
                            />
                            <input
                                type="text"
                                className="w-full sm:w-1/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                                name="position"
                                value={recommendation.position}
                                placeholder="Jabatan"
                                onChange={e => handleChange(e, 'recommendations', idx)}
                                required
                            />
                            <div className="w-full sm:w-1/3 flex">
                                <span className="bg-gray-200 text-gray-700 px-3 py-2 rounded-l">+62</span>
                                <input
                                    type="tel"
                                    className="w-full p-2 border border-gray-300 rounded-r focus:ring focus:ring-blue-300"
                                    name="phone"
                                    value={recommendation.phone}
                                    placeholder="No. Telepon / HP"
                                    onChange={e => handleChange(e, 'recommendations', idx)}
                                    required
                                />
                            </div>
                            {appState.recommendations.length > 1 && (
                                <div className="flex justify-center">
                                    <button
                                        type="button"
                                        className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition duration-200"
                                        onClick={() => removeItemHandler('recommendations', idx)}
                                    >
                                        Hapus
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="flex justify-center sm:justify-end my-3">
                        <button
                            type="button"
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
                            onClick={() => handleAdd('recommendations')}
                        >
                            Tambah
                        </button>
                    </div>
                    <h2 className="text-[21px] text-white py-1.5 px-4 bg-[#337ab7] border border-[#2e6da4]">
                        VII. KONTAK DARURAT
                    </h2>
                    {appState.emergencies.map((emergency: Emergencies, idx: number) => (
                        <div key={idx} className="flex flex-col sm:flex-row gap-3 my-4">
                            <input
                                type="text"
                                className="w-full sm:w-1/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                                name="name"
                                value={emergency.name}
                                placeholder="Nama"
                                onChange={e => handleChange(e, 'emergencies', idx)}
                                required
                            />
                            <input
                                type="text"
                                className="w-full sm:w-1/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                                name="relation"
                                value={emergency.relation}
                                placeholder="Hubungan"
                                onChange={e => handleChange(e, 'emergencies', idx)}
                                required
                            />
                            <div className="w-full sm:w-1/3 flex">
                                <span className="bg-gray-200 text-gray-700 px-3 py-2 rounded-l">+62</span>
                                <input
                                    type="tel"
                                    className="w-full p-2 border border-gray-300 rounded-r focus:ring focus:ring-blue-300"
                                    name="phone"
                                    value={emergency.phone}
                                    placeholder="No. Telepon / HP"
                                    onChange={e => handleChange(e, 'emergencies', idx)}
                                    required
                                />
                            </div>
                            {appState.emergencies.length > 1 && (
                                <div className="flex justify-center">
                                    <button
                                        type="button"
                                        className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition duration-200"
                                        onClick={() => removeItemHandler('emergencies', idx)}
                                    >
                                        Hapus
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="flex justify-center sm:justify-end my-3">
                        <button
                            type="button"
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
                            onClick={() => handleAdd('emergencies')}
                        >
                            Tambah
                        </button>
                    </div>
                    <h2 className="text-[21px] text-white py-1.5 px-4 bg-[#337ab7] border border-[#2e6da4]">
                        VIII. KETERANGAN TAMBAHAN
                    </h2>
                    <div className="my-4 flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 items-start sm:items-center">
                        <label className="w-full sm:w-1/3 font-medium">Soft Skill</label>
                        <input
                            type="text"
                            className="w-full sm:w-2/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                            name="soft_skills"
                            value={appState.soft_skills}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="my-4 flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 items-start sm:items-center">
                        <label className="w-full sm:w-1/3 font-medium">Pernah di rawat di rumah sakit? (Jika "Ya", kapan dan jenis penyakit apa)</label>
                        <input
                            type="text"
                            className="w-full sm:w-2/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                            name="hospital"
                            value={appState.hospital}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="my-4 flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 items-start sm:items-center">
                        <label className="w-full sm:w-1/3 font-medium">Ekspetasi gaji</label>
                        <div className="w-full sm:w-2/3 flex">
                            <span className="bg-gray-200 text-gray-700 px-3 py-2 rounded-l">Rp.</span>
                            <input
                                type="number"
                                className="w-full p-2 border border-gray-300 rounded-r focus:ring focus:ring-blue-300"
                                name="salary"
                                value={appState.salary}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="my-4 flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 items-start sm:items-center">
                        <label className="w-full sm:w-1/3 font-medium">Fasilitas yang diharapkan</label>
                        <input
                            type="text"
                            className="w-full sm:w-2/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                            name="facility"
                            value={appState.facility}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="my-4 flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 items-start sm:items-center">
                        <label className="w-full sm:w-1/3 font-medium">Kapan bisa mulai kerja</label>
                        <input
                            type="date"
                            className="w-full sm:w-2/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                            name="availability"
                            value={appState.availability}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="my-4 flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 items-start sm:items-center">
                        <label className="w-full sm:w-1/3 font-medium">Kelebihan</label>
                        <textarea
                            rows={3}
                            className="w-full sm:w-2/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                            name="strengths"
                            value={appState.strengths}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="my-4 flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 items-start sm:items-center">
                        <label className="w-full sm:w-1/3 font-medium">Kelemahan</label>
                        <textarea
                            rows={3}
                            className="w-full sm:w-2/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                            name="weaknesses"
                            value={appState.weaknesses}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row my-4">
                        <label className="w-full sm:w-1/3 font-medium">Bersedia menitipkan ijazah</label>
                        <div className="w-full sm:w-2/3 flex gap-4">
                            {['Ya', 'Tidak'].map(degree => (
                                <label key={degree} className="flex items-center">
                                    <input type="radio" className="mr-2" name="degree" value={degree} onChange={handleChange} required />
                                    {degree}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row my-4">
                        <label className="w-full sm:w-1/3 font-medium">Bersedia digabungkan dengan perusahaan mitra</label>
                        <div className="w-full sm:w-2/3 flex gap-4">
                            {['Ya', 'Tidak'].map(partner => (
                                <label key={partner} className="flex items-center">
                                    <input type="radio" className="mr-2" name="partner" value={partner} onChange={handleChange} required />
                                    {partner}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row my-4">
                        <label className="w-full sm:w-1/3 font-medium">Bersedia bekerja shift</label>
                        <div className="w-full sm:w-2/3 flex gap-4">
                            {['Ya', 'Tidak'].map(shift => (
                                <label key={shift} className="flex items-center">
                                    <input type="radio" className="mr-2" name="shift" value={shift} onChange={handleChange} required />
                                    {shift}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row my-4">
                        <label className="w-full sm:w-1/3 font-medium">Bersedia dipindahkan ke divisi lain</label>
                        <div className="w-full sm:w-2/3 flex gap-4">
                            {['Ya', 'Tidak'].map(division_relocation => (
                                <label key={division_relocation} className="flex items-center">
                                    <input type="radio" className="mr-2" name="division_relocation" value={division_relocation} onChange={handleChange} required />
                                    {division_relocation}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row my-4">
                        <label className="w-full sm:w-1/3 font-medium">Bersedia ditempatkan diluar kota</label>
                        <div className="w-full sm:w-2/3 flex gap-4">
                            {['Ya', 'Tidak'].map(relocation => (
                                <label key={relocation} className="flex items-center">
                                    <input type="radio" className="mr-2" name="relocation" value={relocation} onChange={handleChange} required />
                                    {relocation}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row my-4">
                        <label className="w-full sm:w-1/3 font-medium">Bersedia melakukan perjalanan dinas keluar kota</label>
                        <div className="w-full sm:w-2/3 flex gap-4">
                            {['Ya', 'Tidak'].map(business_trip => (
                                <label key={business_trip} className="flex items-center">
                                    <input type="radio" className="mr-2" name="business_trip" value={business_trip} onChange={handleChange} required />
                                    {business_trip}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row my-4">
                        <label className="w-full sm:w-1/3 font-medium">Upload CV / Resume</label>
                        <div className="w-full sm:w-2/3 flex items-center gap-2">
                            <input
                                type="file"
                                name="resume"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition">
                            Submit
                        </button>
                    </div>
                    {appState.loading && (
                        <div className="fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-xs">
                            <div className="loader"></div>
                        </div>
                    )}
                </form>
            </main>
        </>
    )
}
export default App