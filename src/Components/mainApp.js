import { Sidebar } from "./Sidebar"
import { RecentGroups } from "./pods/recentGroups"

export const MainApp = () => {
    return (
        <div id="mainContainer">
            <Sidebar />
            <div id="mainBodyContainer"> 
                <RecentGroups />
            </div>
        </div>
    )
}