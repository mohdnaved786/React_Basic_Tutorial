import React from "react";
import PropTypes from 'prop-types'

const ReactPropType = (props) =>{
    return(
        <div>
            <h1>React Props Types Example</h1>
            <ul>
                <li>{props.name}</li>
                <li>{props.number}</li>
            </ul>
        </div>
    )
}

ReactPropType.propTypes = {
    name: PropTypes.string.isRequired,
    number:PropTypes.number
};

ReactPropType.defaultProps = {
    name: "Awwaltech"
}

export default ReactPropType;