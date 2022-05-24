export const RecentComponents = () => {

    return (
        <div className="halfPod">
            <div className="halfPodHeader">
            <h2>Recent Components</h2>
            </div>
            <div id="recentComponentsBodyContainer">
                <div id="recentComponentsBody">
                    <div className="podTableContainer">
                        <table className="podTable">
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Modified</th>
                            </tr>
                            <tr>
                                <td>Example Name</td>
                                <td>Text box</td>
                                <td>01/01/2022</td>
                            </tr>
                            <tr>
                                <td>Example Name 2</td>
                                <td>Button</td>
                                <td>01/02/2022</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
        </div>
    )
}