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
            <div className="bg-primary text-light p-1 mt-3">
                <span className="fs-4 fw-semibold ms-3">Dashboard</span>
            </div>
            <div className="row m-0 p-3">
                <div className="col-12 col-sm-12 col-xl-4 p-2">
                    <div className="shadow border rounded-4 py-2 bg-light-subtle">
                        <CustomPieChart data={TicketStatusData} title={'TICKET STATUS OVERVIEW'} />
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-xl-4 p-2">
                    <div className="shadow border rounded-4 py-2 bg-light-subtle">
                        <CustomPieChart data={TicketStatusData} title={'TICKET STATUS OVERVIEW'} />
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-xl-4 p-2">
                    <div className="shadow border rounded-4 py-2 bg-light-subtle">
                        <CustomPieChart data={TicketStatusData} title={'TICKET STATUS OVERVIEW'} />
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-xl-6 p-2">
                    <div className="shadow border rounded-4 py-2 bg-light-subtle">
                        <CustomPieChart data={TicketStatusData} title={'TICKET STATUS OVERVIEW'} />
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-xl-6 p-2">
                    <div className="shadow border rounded-4 py-2 bg-light-subtle">
                        <CustomPieChart data={TicketStatusData} title={'TICKET STATUS OVERVIEW'} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
