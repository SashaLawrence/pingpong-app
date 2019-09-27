import React from "react";

const Name = ({ players }) => {
    return ( 
        <> 
            <table className= "table table-hover table-bordered table-dark">
                <tbody>
                    <tr className= "d-flex">
                        <th className="col-5"> { players[0].name }</th>
                        <th className="col-2">vs.</th>
                        <th className="col-5">{ players[1].name }</th>
                    </tr>
                </tbody>
            </table>
        </>
    )
};

export default Name;