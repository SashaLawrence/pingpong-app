import React from "react";

const Name = ({ players }) => {
    return ( 
        <> 
            <table className= "table">
                <thead>
                    <tr>
                        <th>Pairs</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{ players[0].name }</td>
                        <td>vs.</td>
                        <td>{ players[1].name }</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
};

export default Name;