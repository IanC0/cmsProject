import { useState } from 'react';
import { FiArrowLeft } from "react-icons/fi";
export const TextboxPod = () => {

    const [textboxName, setTextboxName] = useState();
    const [htmlContent, setHtmlContent] = useState();

    return (
        <div className="halfPod">
            <div className="halfPodHeader">
                <FiArrowLeft />
                <h2>Textbox</h2>
                <form onSubmit={() => console.log("Submitted")}>
                    <div className="inputGroup">
                        <label htmlFor="textboxName">Name: </label>
                        <input type="text" id="textboxName" name="textboxName" onChange={(e) => setTextboxName(e.target.value)}/>
                    </div>
                    <div class="inputGroup">
                        <label htmlFor="htmlContent">HTML: </label>
                        <textarea id="htmlContent" name="htmlContent" rows="5" onChange={(e) => setHtmlContent(e.target.value)}/>
                    </div>
                    <div class="inputGroup">
                        <label htmlFor="htmlDisplay">Preview: </label>
                        <div id="htmlDisplay" name="htmlDisplay">{htmlContent}</div>
                    </div>
                    <div className="buttonContainer">
                        <button type="submit">Add</button>
                    </div>
                </form>                
            </div>
        </div>
    )
}