import { Sidebar } from "./Sidebar"
import { RecentGroups } from "./pods/recentGroups"
import { AddGroup } from './pods/AddGroup'
import { TextboxPod } from './pods/TextboxPod'
import { BannerPod } from './pods/BannerPod'

export const MainApp = () => {
    return (
        <div id="mainContainer">
            <Sidebar />
            <div id="mainBodyContainer"> 
                <RecentGroups />
                <BannerPod />

            </div>
        </div>
    )
}