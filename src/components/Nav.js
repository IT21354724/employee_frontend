import { useState } from "react";
import Logo from '../assets/Logo.png';

export default function Navbar() {
  const [selectedMonth, setSelectedMonth] = useState("Jul");

  return (
    <nav className="bg-white shadow-lg p-4 flex items-center justify-between rounded-2xl mx-4 mt-4">
      {/* Logo and Title */}
      <div className="flex items-center space-x-3">
      <img src={Logo} alt="Logo" className="h-8" />
        <h1 className="text-xl font-bold">Gamage Recruiters Dashboard</h1>
      </div>

      {/* Select Month Section */}
      <div className="flex items-center space-x-2">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Select Month</button>
        <select
          className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          <option value="Jan">Jan</option>
          <option value="Feb">Feb</option>
          <option value="Mar">Mar</option>
          <option value="Apr">Apr</option>
          <option value="May">May</option>
          <option value="Jun">Jun</option>
          <option value="Jul">Jul</option>
          <option value="Aug">Aug</option>
          <option value="Sep">Sep</option>
          <option value="Oct">Oct</option>
          <option value="Nov">Nov</option>
          <option value="Dec">Dec</option>
        </select>
      </div>
    </nav>
  );
}
