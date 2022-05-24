import { useState } from "react";

export const AddGroup = () => {

    const [groupName, setGroupName] = useState();
    const [addingGroup, setAddingGroup] = useState();

    return (
        <div className="halfPod">
            <div className="halfPodHeader">
                {!addingGroup && <h2 onClick={() => setAddingGroup(true)}>Add New Group</h2>}
                {addingGroup &&
                    <form onSubmit={() => console.log(groupName)}>
                        <p onClick={() => setAddingGroup(false)}>{`<-`}</p>
                        <label htmlFor="groupNameInput">New Group Name</label>
                        <input type="text" id="groupNameInput" name="groupNameInput" onChange={(e) => setGroupName(e.target.value)}/>
                    </form>                
                }
                {
                    groupName &&
                    <div>
                        <h2>Select Component Type</h2>
                        <div id="recentComponentsBody">
                            <ul>
                                <li><a href="#">Text Box</a></li>
                                <li><a href="#">Media</a></li>
                                <li><a href="#">Button</a></li>
                                <li><a href="#">Banner</a></li>
                                <li><a href="#">Form Field</a></li>
                            </ul>
                        </div>
                    </div>                        
                }
            </div>
        </div>
    )
}