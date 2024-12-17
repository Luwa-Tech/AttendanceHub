import { NavLink } from "react-router-dom"

const AdminPage = () => {
    const logout = async () => {
        console.log('logged out')
    }

    return (
        <main className="min-h-screen bg-gray-100 p-4">
            <header className="bg-gradient-to-r from-secondary-500 to-secondary-400 text-primary-500 p-4 rounded-md shadow-md flex justify-between items-center">
                <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                <nav className="flex space-x-4">
                    <NavLink to="/admin_dashboard" className="nav-links">Dashboard</NavLink>
                    <button onClick={logout} className="bg-primary-600 text-primary-500 px-4 py-2 rounded hover:bg-primary-700">Logout</button>
                </nav>
            </header>
            <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-md shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Manage Users</h2>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add User</button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-2">Remove User</button>
                    <table className="min-w-full mt-4 bg-white border border-gray-200">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border-b">Name</th>
                                <th className="px-4 py-2 border-b">Email</th>
                                <th className="px-4 py-2 border-b">Role</th>
                                <th className="px-4 py-2 border-b">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 border-b">John Doe</td>
                                <td className="px-4 py-2 border-b">john@example.com</td>
                                <td className="px-4 py-2 border-b">Admin</td>
                                <td className="px-4 py-2 border-b">
                                    <button className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">Edit</button>
                                    <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 ml-2">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="bg-white p-4 rounded-md shadow-md">
                    <h2 className="text-xl font-semibold mb-4">View All Attendance</h2>
                    <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">View Attendance</button>
                    <table className="min-w-full mt-4 bg-white border border-gray-200">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border-b">Employee Name</th>
                                <th className="px-4 py-2 border-b">Date</th>
                                <th className="px-4 py-2 border-b">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 border-b">Jane Smith</td>
                                <td className="px-4 py-2 border-b">2024-12-17</td>
                                <td className="px-4 py-2 border-b">Present</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="bg-white p-4 rounded-md shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Update Attendance</h2>
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">Update Attendance</button>
                    <table className="min-w-full mt-4 bg-white border border-gray-200">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border-b">Employee Name</th>
                                <th className="px-4 py-2 border-b">Date</th>
                                <th className="px-4 py-2 border-b">Status</th>
                                <th className="px-4 py-2 border-b">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 border-b">Michael Johnson</td>
                                <td className="px-4 py-2 border-b">2024-12-17</td>
                                <td className="px-4 py-2 border-b">Absent</td>
                                <td className="px-4 py-2 border-b">
                                    <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">Mark Present</button>
                                    <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 ml-2">Mark Absent</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </main>

    )
}

export default AdminPage