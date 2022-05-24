import { Sidebar } from "./Sidebar"
import { RecentComponents } from "./pods/recentComponents"
import { AddGroup } from './pods/AddGroup'

export const MainApp = () => {
    return (
        <div id="mainContainer">
            <Sidebar />
            <div id="mainBodyContainer"> 
                <RecentComponents />
                <AddGroup />
            </div>

        </div>
    )
}