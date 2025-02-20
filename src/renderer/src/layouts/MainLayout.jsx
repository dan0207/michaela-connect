import { Outlet, Link } from 'react-router-dom'
import TopNavigation from '../components/TopNavigation'
import SideNavigation from '../components/SideNavigation'

function MainLayout() {
    return (
        <>
            <TopNavigation />
            <div className="d-flex">
                <SideNavigation />
                {/* <div className="p-4 overflow-y-auto vh-100"> */}
                <div className="p-4">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default MainLayout
