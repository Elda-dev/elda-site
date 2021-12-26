import React from "react";
import './TitleSection.css';
import { IoIosArrowDown } from 'react-icons/io';

function TitleSection() {
    return (
        <>
            <div className='title-wrapper'>
                <h1 className='title-header'>
                    Building FOSS software for all to use
                </h1>
                <p className='title-description'>
                    With privacy and ease of use in mind
                </p>
                <br/>
                <br/>
                <p className='title-description'>
                    Learn more
                </p>
                <div className='down-arrow'>
                    <IoIosArrowDown size='50'/>
                </div>
            </div>
            <div className='bottom-padding'/>
        </>
    )
}

export default TitleSection