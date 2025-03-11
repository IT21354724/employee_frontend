import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

// Data for each department
const departmentData = {
  All: {
    totalApplications: 1200,
    shortlistedCandidates: 300,
    hiredCandidates: 100,
    rejectedCandidates: 800,
    timeToHire: 30,
    timeToFill: 45,
    monthlyData: [
      { month: "Jan", percentage: 20 },
      { month: "Feb", percentage: 25 },
      { month: "Mar", percentage: 30 },
      { month: "Apr", percentage: 35 },
      { month: "May", percentage: 40 },
      { month: "Jun", percentage: 45 },
    ],
    upcomingEvents: [
      { name: "Career Fair", percentage: 50 },
      { name: "Tech Meetup", percentage: 70 },
      { name: "Hiring Webinar", percentage: 30 },
      { name: "Hiring Webinar", percentage: 30 },
      { name: "Hiring Webinar", percentage: 30 },
      { name: "Hiring Webinar", percentage: 30 },
      { name: "Hiring Webinar", percentage: 30 },
    ],
    openPositions: [
      { department: "HR", internal: 10, external: 20 },
      { department: "Engineering", internal: 15, external: 25 },
      { department: "Sales", internal: 12, external: 22 },
    ],
    applicationsByDepartment: [
      { department: "HR", internal: 50, external: 100 },
      { department: "Engineering", internal: 80, external: 150 },
      { department: "Sales", internal: 60, external: 120 },
    ],
    genderRatio: [
      { name: "Male", value: 60 },
      { name: "Female", value: 40 },
    ],
    applicationStatus: [
      { name: "Accepted", value: 300 },
      { name: "Rejected", value: 900 },
    ],
  },
};

const COLORS = ["#002D62", "#0066b2"];  
const PIE_COLORS = ["#002D62", "#0066b2"]; 

export default function Dashboard() {
  const [department, setDepartment] = useState("All");
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
        </select>

        {[
          { label: "Total Application", value: selectedData.totalApplications },
          { label: "Shortlisted Candidates", value: selectedData.shortlistedCandidates },
          { label: "Hired Candidates", value: selectedData.hiredCandidates },
          { label: "Rejected Candidates", value: selectedData.rejectedCandidates },
          { label: "Time to Hire (Day(s))", value: selectedData.timeToHire },
          { label: "Time to Fill (Day(s))", value: selectedData.timeToFill },
        ].map((item, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-1">{item.label}</label>
            <input type="text" className="w-full p-2 border rounded-md" value={item.value} readOnly />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="col-span-3 grid grid-cols-2 gap-4">
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold mb-2">No of Application per Month</h2>
          <ResponsiveContainer width="40%" height={300}>
            <BarChart data={selectedData.monthlyData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="percentage" fill="#002D62" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Upcoming Events</h2>
          <ResponsiveContainer width="40%" height={300}>
            <BarChart data={selectedData.upcomingEvents}>
              <YAxis />
              <Tooltip />
              <Bar dataKey="percentage" fill="#0066b2" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Open Positions by Department */}
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Open Positions by Department</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={selectedData.openPositions}>
              <XAxis dataKey="department" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="internal" fill={COLORS[0]} name="Internal" />
              <Bar dataKey="external" fill={COLORS[1]} name="External" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Application received by Department - Horizontal Bar Chart */}
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Application Received by Department</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={selectedData.applicationsByDepartment} layout="vertical">
              <YAxis type="category" dataKey="department" />
              <XAxis type="number" />
              <Tooltip />
              <Bar dataKey="internal" fill={COLORS[0]} name="Internal" />
              <Bar dataKey="external" fill={COLORS[1]} name="External" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Gender Ratio - Pie Chart */}
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Gender Ratio</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={selectedData.genderRatio} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                {selectedData.genderRatio.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={PIE_COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Application Status - Pie Chart */}
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Application Status</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={selectedData.applicationStatus} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                {selectedData.applicationStatus.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={PIE_COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
