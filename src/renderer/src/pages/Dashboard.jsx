import CustomPieChart from '../components/CustomPieChart'

function Dashboard() {
    const TicketStatusData = [
        { name: 'Done', value: 123 },
        { name: 'In Progress', value: 300 },
        { name: 'Pending', value: 300 },
        { name: 'Declined', value: 200 }
    ]

    return (
        <>
            <div className="mt-5 shadow-lg border rounded-3">
                <div className="bg-primary text-light p-1 mt-3 text-center">
                    <span className="fs-3 fw-semibold ms-3">IT Department</span>
                </div>
                <div className="row m-0 p-3">
                    <div className="row m-0 col-xl-8 p-2">
                        <div className="col-xl-4 p-3">
                            <div className="card shadow rounded-4 mb-3 text-center h-100">
                                <div className="card-header text-uppercase fw-semibold">
                                    Overdue Tickets
                                </div>
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <p className="card-text display-3 fw-bold">3</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 p-3">
                            <div className="card shadow rounded-4 mb-3 text-center h-100">
                                <div className="card-header text-uppercase fw-semibold">
                                    Open Tickets
                                </div>
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <p className="card-text display-3 fw-bold">10</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 p-3">
                            <div className="card shadow rounded-4 mb-3 text-center h-100">
                                <div className="card-header text-uppercase fw-semibold">
                                    Resolved Tickets
                                </div>
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <p className="card-text display-3 fw-bold">75</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 p-3">
                            <div className="card shadow rounded-4 mb-3 text-center h-100">
                                <div className="card-header text-uppercase fw-semibold">
                                    Average Resolution Time
                                </div>
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <p className="card-text display-3 fw-bold">
                                        30 <span className="fs-5">mins</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 p-3">
                            <div className="card shadow rounded-4 mb-3 text-center h-100">
                                <div className="card-header text-uppercase fw-semibold">
                                    Tickets Awaiting Approval
                                </div>
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <p className="card-text display-3 fw-bold">
                                        10 <span className="fs-5">mins</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 p-3">
                            <div className="card shadow rounded-4 mb-3 text-center h-100">
                                <div className="card-header text-uppercase fw-semibold">
                                    Reopened Tickets
                                </div>
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <p className="card-text display-3 fw-bold">5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 p-4">
                        <div className="card shadow rounded-4 mb-3 text-center h-100">
                            <div className="card-header text-uppercase fw-semibold fs-3">
                                TICKET STATUS OVERVIEW
                            </div>
                            <div className="card-body d-flex justify-content-center align-items-center">
                                <CustomPieChart data={TicketStatusData} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 p-4">
                        <div className="card shadow rounded-4 mb-3 text-center h-100">
                            <div className="card-header text-uppercase fw-semibold fs-3">
                                TICKET STATUS OVERVIEW
                            </div>
                            <div className="card-body d-flex justify-content-center align-items-center">
                                <CustomPieChart data={TicketStatusData} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 p-4">
                        <div className="card shadow rounded-4 mb-3 text-center h-100">
                            <div className="card-header text-uppercase fw-semibold fs-3">
                                TICKET STATUS OVERVIEW
                            </div>
                            <div className="card-body d-flex justify-content-center align-items-center">
                                <CustomPieChart data={TicketStatusData} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 p-4">
                        <div className="card shadow rounded-4 mb-3 text-center h-100">
                            <div className="card-header text-uppercase fw-semibold fs-3">
                                TICKET STATUS OVERVIEW
                            </div>
                            <div className="card-body d-flex justify-content-center align-items-center">
                                <CustomPieChart data={TicketStatusData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
