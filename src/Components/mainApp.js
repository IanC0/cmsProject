import { Sidebar } from "./Sidebar"
import { RecentComponents } from "./pods/recentComponents"

export const MainApp = () => {
    return (
        <div id="mainContainer">
            <Sidebar />
            <div id="mainBodyContainer"> 
                <RecentComponents />
                <RecentComponents />
            </div>

        </div>
    )
}