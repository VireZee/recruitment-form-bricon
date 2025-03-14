import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from './store/index'
import './assets/styles/global.css'

const App: React.FC = () => {
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
                            name="posisi"
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
                            name="nama_lengkap"
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
                            name="tempat_lahir"
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
                            name="tanggal_lahir"
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
                            name="ktp"
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
                            name="ktp"
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
                            name="ktp"
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
                            name="ktp"
                            // value={}
                            // onChange={}
                            required
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row my-4">
                        <label className="w-full sm:w-1/3 font-medium">Kewarganegaraan</label>
                        <div className="w-full sm:w-2/3 flex gap-4">
                            <label className="flex items-center">
                                <input type="radio" className="mr-2" name="wn" value="WNI" required />
                                WNI
                            </label>
                            <label className="flex items-center">
                                <input type="radio" className="mr-2" name="wn" value="WNA" required />
                                WNA
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row my-4">
                        <label className="w-full sm:w-1/3 font-medium">Jenis Kelamin</label>
                        <div className="w-full sm:w-2/3 flex gap-4">
                            <label className="flex items-center">
                                <input type="radio" className="mr-2" name="gender" value="Laki - Laki" required />
                                Laki - Laki
                            </label>
                            <label className="flex items-center">
                                <input type="radio" className="mr-2" name="gender" value="Perempuan" required />
                                Perempuan
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row my-4">
                        <label className="w-full sm:w-1/3 font-medium">Status</label>
                        <div className="w-full sm:w-2/3 flex gap-4 flex-wrap">
                            <label className="flex items-center">
                                <input type="radio" className="mr-2" name="status" value="Menikah" required />
                                Menikah
                            </label>
                            <label className="flex items-center">
                                <input type="radio" className="mr-2" name="status" value="Lajang" required />
                                Lajang
                            </label>
                            <label className="flex items-center">
                                <input type="radio" className="mr-2" name="status" value="Cerai" required />
                                Cerai
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row my-4">
                        <label className="w-full sm:w-1/3 font-medium">Agama</label>
                        <div className="w-full sm:w-2/3 flex gap-4 flex-wrap">
                            {["Islam", "Kristen", "Katolik", "Buddha", "Hindu", "Konghuchu", "Lainnya"].map((agama) => (
                                <label key={agama} className="flex items-center">
                                    <input type="radio" className="mr-2" name="agama" value={agama} required />
                                    {agama}
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
                </form>
            </main>
        </>
    )
}
export default App