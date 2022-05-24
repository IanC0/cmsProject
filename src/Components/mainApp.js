import { Sidebar } from "./Sidebar"
import { RecentGroups } from "./pods/recentGroups"
import { AddGroup } from './pods/AddGroup'

export const MainApp = () => {
    return (
        <div id="mainContainer">
            <Sidebar />
            <div id="mainBodyContainer"> 
                <RecentGroups />
                <AddGroup />
            </div>
        </div>
    )
}