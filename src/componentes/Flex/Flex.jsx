import React from "react";
import "./Flex.css"

function Flex(props) {
    return (
        <div className="estiloFlex">
            {props.children}
        </div>
    )
}

export default Flex;