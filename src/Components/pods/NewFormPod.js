import { useState } from 'react';
import { FiArrowLeft, FiChevronUp, FiChevronDown } from "react-icons/fi";


export const NewFormPod = () => {

    const [formName, setFormName] = useState("blank");
    const [formType, setFormType] = useState("email");
    const [formList, setFormList] = useState([]);

    const formHandler = (e) => {
        e.preventDefault();
        console.log(formName)
        console.log(formType)
        let tempObj = {
            name: formName,
            type: formType
        }
        let tempFormListArray = [...formList];
        tempFormListArray.push(tempObj)
        setFormList(tempFormListArray)
    }

    const formButtonHandler = (param, index) => {
        if (param == "down") {
            let tempArray = [...formList];
            let tempItemToBeMoved = tempArray.slice(index,index + 1);
            let tempSliceItem = [...tempArray].slice(0,index).concat(tempArray.slice(index + 1,))
            tempSliceItem.splice(index + 1,0, ...tempItemToBeMoved)
            setFormList(tempSliceItem)            
        } if (param == "up") {
            let tempArray = [...formList];
            let tempItemToBeMoved = tempArray.slice(index,index + 1);
            let tempSliceItem = [...tempArray].slice(0,index).concat(tempArray.slice(index + 1,))
            tempSliceItem.splice(index - 1,0, ...tempItemToBeMoved)
            setFormList(tempSliceItem)   
        }
    }

    return (
        <div className="formPodsContainer">
            <div className="halfPod">
                <div className="halfPodHeader">
                    <FiArrowLeft />
                    <h2>Form</h2>
                    <form onSubmit={(e) => formHandler(e)}>                        
                        <div className="inputGroup">
                            <label htmlFor="formName">Name: </label>
                            <input type="text" id="formName" name="formName" onChange={(e) => setFormName(e.target.value)} required/>
                        </div>
                        <div className="inputGroup">
                            <label htmlFor="formType">Type: </label>
                            <select id="formType" name="formType" size="1" onChange={(e) => setFormType(e.target.value)}>
                                <option value="input">Field</option>
                                <option value="email">Email</option>
                                <option value="date">Date</option>
                                <option value="password">Password</option>
                                <option value="number">Number</option>
                                <option value="telNumber">Telephone Number</option>
                                <option value="dropDown">Drop Down List</option>
                            </select>  
                        </div>  
                        <div className="inputGroup">
                            <button type="submit">Add</button>   
                        </div>                   
                    </form>                
                </div>
            </div>
            <div className="halfPod">
                <div className="halfPodHeader">
                    <FiArrowLeft />
                    <h2>Form Fields</h2>
                </div>
                <div id="formBuild">
                    
                    <ol>
                    {formList.map((x,index) => {
                        if (index == 0) {
                            return <div className="formListRowContainer" key={index}>
                                <button className="formButton" onClick={() => formButtonHandler("down", index)}><FiChevronDown /></button>
                                <li>Name: {x.name} Type: {x.type}</li>
                                </div>
                        } else if (index == (formList.length-1)) {
                            return <div className="formListRowContainer" key={index}>
                                <button className="formButton" onClick={() => formButtonHandler("down", index)}><FiChevronUp /></button>
                                <li>Name: {x.name} Type: {x.type}</li>
                                </div>
                        } else {
                           return <div className="formListRowContainer" key={index}>
                               <div className="dualButtonContainer">
                                    <button className="formButton dualButtons" onClick={() => formButtonHandler("up", index)}><FiChevronUp /></button>
                                    <button className="formButton dualButtons" onClick={() => formButtonHandler("down", index)}><FiChevronDown /></button>
                               </div>
                               <li>Name: {x.name} Type: {x.type}</li>
                               </div> 
                        }
                        
                    })}
                    </ol>
                    
                </div>
                </div>
        </div>
    )
}