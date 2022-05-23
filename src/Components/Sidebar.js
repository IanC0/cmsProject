import {useState, useRef} from "react";

export const Sidebar = () => {
    // ### useRefs and useState ###
    const createComponentRef = useRef(null);
    const modifyComponentRef = useRef(null);   
    const[page, setPage] = useState(createComponentRef)



    // ### hanlders for mouse entering, clicking and leaving ###
    const mouseEnterHandler = (param) => (e) => {  
        if(page != param) {
            param.current.style.backgroundColor = "#c5cfdd" 
        }         
    }
    const onClickHandler = (param) => (e) => {        
        if (page != param) {
            page.current.style.backgroundColor = "#A4B4CA";
            param.current.style.backgroundColor = "#F3F7F8";
            setPage(param);
        }
    }
    const mouseLeaveHandler = (param) => (e) => {
        if (page != param) {        
        e.target.style.background="#A4B4CA"
        }
    }



    return (
        <div id="sidebar">
            <div id="logoContainer">
                <a href="#" id="logo">logo</a>
            </div>
                <div id="sidebarMenu">                    
                    <a href="#" 
                     className="sideBarMenuOptions"
                    id="sideBarMenuCreateComp"
                    ref={createComponentRef}
                    onMouseEnter={mouseEnterHandler(createComponentRef)} 
                    onClick={onClickHandler(createComponentRef)}
                    onMouseLeave={mouseLeaveHandler(createComponentRef)}><p>
                    Create component</p></a>
                    <a href="#"  
                    className="sideBarMenuOptions"
                    ref={modifyComponentRef}
                    onMouseEnter={mouseEnterHandler(modifyComponentRef)} 
                    onClick={onClickHandler(modifyComponentRef)}
                    onMouseLeave={mouseLeaveHandler(modifyComponentRef)}><p >Manage components</p></a>
                </div>
            </div>
        
    )
}