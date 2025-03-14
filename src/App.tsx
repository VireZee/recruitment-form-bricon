import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from './store/index'
import './assets/styles/global.css'

const App: React.FC = () => {
    const dispatch = useDispatch()
    const appState = useSelector((state: RootState) => state.APP)
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     const { name, value } = e.target
    //     dispatch(change({ name, value }))
    // }
    return (
        <>
            <header className="bg-[linear-gradient(to_bottom,#213f99,#1f3785)] p-5 text-white">
                <nav className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <img src="" className="w-24 h-24" alt="PT. Material Konstruksi Bangunan" />
                        <h1 className="text-lg">PT. Material Konstruksi Bangunan</h1>
                    </div>
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
                            // value={formState.posisi}
                            // onChange={handleChange}
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
                            // value={formState.nama_lengkap}
                            // onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="my-4 flex flex-col sm:flex-row items-start sm:items-center">
                        <label className="w-full sm:w-1/3 font-medium">Tempat Lahir</label>
                        <input
                            type="text"
                            className="w-full sm:w-2/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                            name="pob"
                            // value={formState.tempat_lahir}
                            // onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="my-4 flex flex-col sm:flex-row items-start sm:items-center">
                        <label className="w-full sm:w-1/3 font-medium">Tanggal Lahir</label>
                        <input
                            type="date"
                            className="w-full sm:w-2/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                            name="dob"
                            // value={}
                            // onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="my-4 flex flex-col sm:flex-row items-start sm:items-center">
                        <label className="w-full sm:w-1/3 font-medium">No. KTP</label>
                        <input
                            type="text"
                            className="w-full sm:w-2/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                            name="nin"
                            // value={}
                            // onChange={}
                            required
                        />
                    </div>
                    <div className="my-4 flex flex-col sm:flex-row items-start sm:items-center">
                        <label className="w-full sm:w-1/3 font-medium">No. SIM C</label>
                        <input
                            type="text"
                            className="w-full sm:w-2/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                            name="license_c"
                            // value={}
                            // onChange={}
                            required
                        />
                    </div>
                    <div className="my-4 flex flex-col sm:flex-row items-start sm:items-center">
                        <label className="w-full sm:w-1/3 font-medium">No. SIM A</label>
                        <input
                            type="text"
                            className="w-full sm:w-2/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                            name="license_a"
                            // value={}
                            // onChange={}
                            required
                        />
                    </div>
                    <div className="my-4 flex flex-col sm:flex-row items-start sm:items-center">
                        <label className="w-full sm:w-1/3 font-medium">No. NPWP</label>
                        <input
                            type="text"
                            className="w-full sm:w-2/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                            name="tin"
                            // value={}
                            // onChange={}
                            required
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row my-4">
                        <label className="w-full sm:w-1/3 font-medium">Kewarganegaraan</label>
                        <div className="w-full sm:w-2/3 flex gap-4">
                            {['WNI', 'WNA'].map(citizenship => (
                                <label key={citizenship} className="flex items-center">
                                    <input type="radio" className="mr-2" name="citizenship" value={citizenship} required />
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
                                    <input type="radio" className="mr-2" name="gender" value={gender} required />
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
                                    <input type="radio" className="mr-2" name="marital_status" value={marital_status} required />
                                    {marital_status}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row my-4">
                        <label className="w-full sm:w-1/3 font-medium">Agama</label>
                        <div className="w-full sm:w-2/3 flex gap-4 flex-wrap">
                            {["Islam", "Kristen", "Katolik", "Buddha", "Hindu", "Konghuchu", "Lainnya"].map(religion => (
                                <label key={religion} className="flex items-center">
                                    <input type="radio" className="mr-2" name="agama" value={religion} required />
                                    {religion}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row my-4">
                        <label className="w-full sm:w-1/3 font-medium">Alamat Sesuai KTP</label>
                        <input
                            type="text"
                            className="w-full sm:w-2/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row my-4">
                        <label className="w-full sm:w-1/3 font-medium">Alamat Saat Ini</label>
                        <input
                            type="text"
                            className="w-full sm:w-2/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row my-4">
                        <label className="w-full sm:w-1/3 font-medium">Email</label>
                        <input
                            type="email"
                            className="w-full sm:w-2/3 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row my-4">
                        <label className="w-full sm:w-1/3 font-medium">No. Telepon / HP</label>
                        <div className="w-full sm:w-2/3 flex">
                            <span className="bg-gray-200 text-gray-700 px-3 py-2 rounded-l">+62</span>
                            <input
                                type="tel"
                                className="w-full p-2 border border-gray-300 rounded-r focus:ring focus:ring-blue-300"
                                pattern="[0-9]{9,14}"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row my-4">
                        <label className="w-full sm:w-1/3 font-medium">Tinggi Badan</label>
                        <div className="w-full sm:w-2/3 flex">
                            <input
                                type="number" step={0.01}
                                className="w-full p-2 border border-gray-300 rounded-l focus:ring focus:ring-blue-300"
                                required
                            />
                            <span className="bg-gray-200 text-gray-700 px-3 py-2 rounded-r">cm</span>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row my-4">
                        <label className="w-full sm:w-1/3 font-medium">Berat Badan</label>
                        <div className="w-full sm:w-2/3 flex">
                            <input
                                type="number" step={0.01}
                                className="w-full p-2 border border-gray-300 rounded-l focus:ring focus:ring-blue-300"
                                required
                            />
                            <span className="bg-gray-200 text-gray-700 px-3 py-2 rounded-r">kg</span>
                        </div>
                    </div>
                    <h2 className="text-[21px] text-white py-1.5 px-4 bg-[#337ab7] border border-[#2e6da4]">
                        II. DATA ANGGOTA KELUARGA (TERMASUK ANDA)
                    </h2>
                </form>
            </main>
        </>
    )
}
export default App