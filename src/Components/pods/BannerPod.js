import { useState } from 'react';
import { CgArrowLeft } from "react-icons/cg";
import { IconContext } from "react-icons";

export const BannerPod = ({ setAppState }) => {

    const [bannerName, setBannerName] = useState();
    const [bannerType, setBannerType] = useState();
    const [bannerText, setBannerText] = useState();

    return (
        <div className="pod fullPod podExpand">
            <div className="halfPodHeader">
                <IconContext.Provider value={{ className: "back-arrow textButton" }}>
                    <CgArrowLeft onClick={() => setAppState("Welcome")}/>
                </IconContext.Provider>
                <h2>Banner</h2>
                <form onSubmit={() => console.log("Submitted")}>
                    <div className="inputGroup inputGroupLine">
                        <label htmlFor="bannerName">Name: </label>
                        <input type="text" id="bannerName" name="bannerName" onChange={(e) => setBannerName(e.target.value)}/>
                    </div>
                    <div className="inputGroup inputGroupLine">
                        <label htmlFor="bannerType">Type: </label>
                        <select id="bannerType" name="bannerType" size="1" onChange={(e) => setBannerType(e.target.value)}>
                            <option value="info">Info</option>
                            <option value="warning">Warning</option>
                        </select>
                    </div>
                    <div className="inputGroup inputGroupLine">
                        <label htmlFor="bannerText">Text: </label>
                        <input type="text" id="bannerText" name="bannerText" onChange={(e) => setBannerText(e.target.value)}/>
                    </div>
                    <div className="buttonContainer">
                        <button type="submit">Add</button>
                    </div>
                </form>                
            </div>
        </div>
    )
}