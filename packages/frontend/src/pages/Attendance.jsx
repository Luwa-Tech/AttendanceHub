const AttendancePage = () => {

    /* 
    Check if user has an active session (auth.user):
        navigate user to attendance page
    else:
        do nothing
*/

    return (
        <main className="mt-16">
            <div className="md:w-4/5 md:mx-auto px-4 py-4 md:px-0 md:py-0">
                <section className="flex items-center space-x-4">
                    <img className="bg-slate-300 w-40 h-40 rounded-full" src="" alt="Profile image" />
                    <div className="text-left">
                        <p className="text-xl font-semibold">Full Employee Name</p>
                        <p className="text-gray-600">Job Title</p>
                    </div>
                </section>
                <section className="mt-8">
                    <span className="text-red-500 font-bold">Closed</span>
                    <div className="mt-4 space-x-2">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Check in</button>
                        <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Check out</button>
                    </div>
                </section>
            </div>
        </main>

    )
}

export default AttendancePage;