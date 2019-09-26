import React from "react";
import Name from "../Name";

const Pair = ({ matches }) => {
    return (
        <>
            {
                matches.map((match, i) => (
                    <Name key={ i } match={ `Match ${i + 1}` } players={ match } />
                ))
            }
        </>
    );
};

export default Pair;

