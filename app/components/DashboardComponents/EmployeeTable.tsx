"use client";
import { useEffect, useState } from "react";
import { Loader2, UserPlus, Filter, ArrowLeft, ArrowRight, Edit, Trash2, Eye } from "lucide-react";

export default function EmployeeTable() {
  const [employees, setEmployees] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    fetchEmployees(page);
  }, [page]);

  const fetchEmployees = async (pageNum: number) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://strelema-task.onrender.com/api/employees?page=${pageNum}&limit=10`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await res.json();
      setEmployees(data.data || []);
      setTotalPages(data.pagination?.pages || 1);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <div className="flex justify-between mb-4">
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <UserPlus size={18} /> Add Employee
          </button>
          <button className="flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300">
            <Filter size={18} /> Filter
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-10">
          <Loader2 className="animate-spin text-blue-600" size={30} />
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-[#f2f0fa] text-gray-700">
              <tr>
                <th className="text-left px-6 py-3">Employee Name</th>
                <th className="text-left px-6 py-3">Department</th>
                <th className="text-left px-6 py-3">Designation</th>
                <th className="text-left px-6 py-3">Status</th>
                <th className="text-left px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr
                  key={emp._id}
                  className="border-t border-gray-200 hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-3 font-medium">{emp.name}</td>
                  <td className="px-6 py-3">{emp.department}</td>
                  <td className="px-6 py-3">{emp.designation}</td>
                  <td className="px-6 py-3">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        emp.status === "Permanent"
                          ? "bg-green-100 text-green-700"
                          : emp.status === "Contract"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {emp.status}
                    </span>
                  </td>
                  <td className="px-6 py-3 flex gap-3 text-gray-600">
                    <Eye size={16} className="cursor-pointer hover:text-blue-600" />
                    <Edit size={16} className="cursor-pointer hover:text-green-600" />
                    <Trash2 size={16} className="cursor-pointer hover:text-red-600" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 disabled:opacity-50"
        >
          <ArrowLeft size={16} /> Previous
        </button>
        <span className="text-sm text-gray-600">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          Next <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
