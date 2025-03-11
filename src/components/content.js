import { useState } from "react";


// Data for each department
const departmentData = {
  All: {
    totalApplications: 1200,
    shortlistedCandidates: 300,
    hiredCandidates: 100,
    rejectedCandidates: 800,
    timeToHire: 30,
    timeToFill: 45
  },
  HR: {
    totalApplications: 500,
    shortlistedCandidates: 150,
    hiredCandidates: 50,
    rejectedCandidates: 300,
    timeToHire: 25,
    timeToFill: 40
  },
  Engineering: {
    totalApplications: 700,
    shortlistedCandidates: 150,
    hiredCandidates: 50,
    rejectedCandidates: 500,
    timeToHire: 35,
    timeToFill: 50
  }
};

export default function Dashboard() {
  const [department, setDepartment] = useState("All");

  // Get data for the selected department
  const selectedData = departmentData[department];

  return (
    <div className="p-4 grid grid-cols-4 gap-4">
      {/* Left Sidebar */}
      <div className="col-span-1 bg-white p-4 shadow-lg rounded-lg">
        <select
          className="w-full p-2 border rounded-md mb-4"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="All">All</option>
          <option value="HR">HR</option>
          <option value="Engineering">Engineering</option>
        </select>

        {/* Display dynamic data */}
        {[
          { label: "Total Application", value: selectedData.totalApplications },
          { label: "Shortlisted Candidates", value: selectedData.shortlistedCandidates },
          { label: "Hired Candidates", value: selectedData.hiredCandidates },
          { label: "Rejected Candidates", value: selectedData.rejectedCandidates },
          { label: "Time to Hire (Day(s))", value: selectedData.timeToHire },
          { label: "Time to Fill (Day(s))", value: selectedData.timeToFill }
        ].map((item, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-1">{item.label}</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              value={item.value}
              readOnly
            />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="col-span-3 grid grid-cols-2 gap-4">
        {["No of Application per month", "Application received by Department", "Up Coming Events", "Open Position by Department"].map((title, index) => (
          <div key={index} className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            
          </div>
        ))}
        {["Gender Ratio", "Application Status"].map((title, index) => (
          <div key={index} className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            
          </div>
        ))}
      </div>
    </div>
  );
}