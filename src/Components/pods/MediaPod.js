import { useState } from 'react';
import { CgArrowLeft } from "react-icons/cg";
import { IconContext } from "react-icons";

export const MediaPod = ({ setAppState }) => {

    const [mediaName, setMediaName] = useState();
    const [mediaType, setMediaType] = useState();
    const [mediaSource, setMediaSource] = useState();
    const [mediaAlt, setMediaAlt] = useState();
    const [mediaSize, setMediaSize] = useState();

    return (
        <div className="pod fullPod podExpand">
            <div className="halfPodHeader">
                <IconContext.Provider value={{ className: "back-arrow textButton" }}>
                    <CgArrowLeft onClick={() => setAppState("Welcome")}/>
                </IconContext.Provider>
                <h2>Media</h2>
                <form onSubmit={() => console.log("Submitted")}>
                    <div className="inputGroup inputGroupLine">
                        <label htmlFor="mediaName">Name: </label>
                        <input type="text" id="mediaName" name="mediaName" onChange={(e) => setMediaName(e.target.value)}/>
                    </div>
                    <div className="inputGroup inputGroupLine">
                        <label htmlFor="mediaType">Type: </label>
                        <select id="mediaType" name="mediaType" size="1" onChange={(e) => setMediaType(e.target.value)}>
                            <option value="image">Image</option>
                            <option value="video">Video</option>
                        </select>
                    </div>
                    <div className="inputGroup inputGroupLine">
                        <label htmlFor="mediaSource">Source: </label>
                        <input type="text" id="mediaSource" name="mediaSource" onChange={(e) => setMediaSource(e.target.value)}/>
                    </div>
                    <div className="inputGroup inputGroupLine">
                        <label htmlFor="mediaAlt">Alt Text: </label>
                        <input type="text" id="mediaAlt" name="mediaAlt" onChange={(e) => setMediaAlt(e.target.value)}/>
                    </div>
                    <div className="inputGroup inputGroupLine">
                        <label htmlFor="mediaSize">Type: </label>
                        <select id="mediaSize" name="mediaSize" size="1" onChange={(e) => setMediaSize(e.target.value)}>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                    </div>
                    <div className="buttonContainer">
                        <button type="submit">Add</button>
                    </div>
                </form>                
            </div>
        </div>
    )
}