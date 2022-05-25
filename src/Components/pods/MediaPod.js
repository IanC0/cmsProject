import { useState } from 'react';
import { FiArrowLeft } from "react-icons/fi";

export const MediaPod = () => {

    const [mediaName, setMediaName] = useState();
    const [mediaType, setMediaType] = useState();
    const [mediaSource, setMediaSource] = useState();
    const [mediaAlt, setMediaAlt] = useState();
    const [mediaSize, setMediaSize] = useState();

    return (
        <div className="halfPod">
            <div className="halfPodHeader">
                <FiArrowLeft />
                <h2>Media</h2>
                <form onSubmit={() => console.log("Submitted")}>
                    <div className="inputGroup">
                        <label htmlFor="mediaName">Name: </label>
                        <input type="text" id="mediaName" name="mediaName" onChange={(e) => setMediaName(e.target.value)}/>
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="mediaType">Type: </label>
                        <select id="mediaType" name="mediaType" size="1" onChange={(e) => setMediaType(e.target.value)}>
                            <option value="image">Image</option>
                            <option value="video">Video</option>
                        </select>
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="mediaSource">Source: </label>
                        <input type="text" id="mediaSource" name="mediaSource" onChange={(e) => setMediaSource(e.target.value)}/>
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="mediaAlt">Text: </label>
                        <input type="text" id="mediaAlt" name="mediaAlt" onChange={(e) => setMediaAlt(e.target.value)}/>
                    </div>
                    <div className="inputGroup">
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