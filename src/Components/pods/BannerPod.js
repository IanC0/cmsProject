import { useState } from 'react';
import { FiArrowLeft } from "react-icons/fi";

export const BannerPod = () => {

    const [bannerName, setBannerName] = useState();
    const [bannerType, setBannerType] = useState();
    const [bannerText, setBannerText] = useState();

    return (
        <div className="halfPod">
            <div className="halfPodHeader">
                <FiArrowLeft />
                <h2>Banner</h2>
                <form onSubmit={() => console.log("Submitted")}>
                    <div className="inputGroup">
                        <label htmlFor="bannerName">Name: </label>
                        <input type="text" id="bannerName" name="bannerName" onChange={(e) => setBannerName(e.target.value)}/>
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="bannerType">Type: </label>
                        <select id="bannerType" name="bannerType" size="1" onChange={(e) => setBannerType(e.target.value)}>
                            <option value="info">Info</option>
                            <option value="warning">Warning</option>
                        </select>
                    </div>
                    <div className="inputGroup">
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