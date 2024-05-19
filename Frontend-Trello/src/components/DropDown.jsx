import React, {useState} from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import "../styles/OtherComponents.css"
function DropDown(props) {
    const [selectedOption, setSelectedOption] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleOnClick = (option)=>{
        setIsOpen(false);
        setSelectedOption(option);
    }
    return (
        <div className="dropdown">
            <div>
                <input
                    type="text"
                    className="dropdown-input"
                    placeholder={props.placeholder}
                    value={selectedOption}
                    onClick={() => setIsOpen(!isOpen)}
                    readOnly={true}
                />
                <MdKeyboardArrowDown className="dropdown-icon" onClick={() => setIsOpen(!isOpen)} />
            </div>

            {isOpen && (
                <ul className="dropdownList" onBlur={() => { setIsOpen(false) }
                }>
                    {props.options.length > 0 && props.options.map((option, index) => (
                        <li
                            key={index}
                            onClick={() => handleOnClick(option)}
                            style={{ cursor: "pointer" }}
                        >
                            <span>{option}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default DropDown