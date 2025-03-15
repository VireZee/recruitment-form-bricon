import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from './store/index'
import type { Families, Academics } from './store/Slice'
import { change, add, remove } from './store/Slice'
import './assets/styles/global.css'

const App: React.FC = () => {
    const dispatch = useDispatch()
    const appState = useSelector((state: RootState) => state.APP)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, key?: 'families' | 'academics', idx?: number) => {
        const { name, value } = e.target
        if (key && typeof idx === 'number') dispatch(change({ key, idx, name, value }))
        else dispatch(change({ name, value }))
    }
    const handleAdd = (key: 'families' | 'academics') => {
        const items: Record<typeof key, Families | Academics> = {
            'families': {
                name: '',
                relation: '',
                pob: '',
                dob: '',
                education: '',
                job: ''
            },
            'academics': {
                education: '',
                institution: '',
                major: '',
                start: '',
                end: '',
                remarks: ''
            }
        }
        dispatch(add({ key, item: items[key] }))
    }
    const removeItemHandler = (key: 'families' | 'academics', idx: number) => dispatch(remove({ key, idx }))
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
                <form>
                    <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center">
                        <label className="w-full sm:w-1/3 font-medium">Posisi Yang Dilamar</label>
                        <input
                            type="text"
                            className="w-full sm:w-2/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                            name="role"
                            value={appState.role}
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
                            required
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
                                required
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
                                required
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
                                <button
                                    type="button"
                                    className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition duration-200 text-sm"
                                    onClick={() => removeItemHandler('families', idx)}
                                >
                                    Hapus
                                </button>
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
                            <input
                                type="text"
                                className="w-full sm:w-1/5 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                                name="education"
                                value={academy.education}
                                placeholder="Tingkat Pendidikan"
                                onChange={e => handleChange(e, 'academics', idx)}
                                required
                            />
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
                            />
                            <input
                                type="text"
                                className="w-full sm:w-1/5 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                                name="start"
                                value={academy.start}
                                placeholder="Tahun Masuk"
                                onChange={e => handleChange(e, 'academics', idx)}
                                required
                            />
                            <input
                                type="text"
                                className="w-full sm:w-1/5 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                                name="end"
                                value={academy.end}
                                placeholder="Tahun Lulus"
                                onChange={e => handleChange(e, 'academics', idx)}
                                required
                            />
                            <input
                                type="text"
                                className="w-full sm:w-1/5 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                                name="remarks"
                                value={academy.remarks}
                                placeholder="Lulus / Tidak Lulus"
                                onChange={e => handleChange(e, 'academics', idx)}
                                required
                            />
                            {appState.academics.length > 1 && (
                                <button
                                    type="button"
                                    className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition duration-200 text-sm"
                                    onClick={() => removeItemHandler('academics', idx)}
                                >
                                    Hapus
                                </button>
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
                </form>
            </main>
        </>
    )
}
export default App