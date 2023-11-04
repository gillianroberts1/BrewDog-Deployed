
import React, {useState} from "react";

function ExpandableContent({ title, details }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleContent = ( ) => {
      setIsOpen(!isOpen)
    }

    return (
        <div className="expandable-content">
            <button className="toggle-button" onClick={toggleContent}>
                {isOpen ? '-' : '+'}

            </button>
            <h2>{title}</h2>
            {isOpen && <p>{details}</p>}
        </div>
    )
}

export default ExpandableContent
