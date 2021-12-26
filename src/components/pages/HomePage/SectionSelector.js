import React from 'react';
import './SectionSelector.css';

function SectionSelector() {

    function onLinkClickTitle() {
        document.getElementById('Title').scrollIntoView();
    }

    function onLinkClickElem1() {
        document.getElementById('Section_1').scrollIntoView();
    }

    function onLinkClickElem2() {
        document.getElementById('Section_2').scrollIntoView();
    }

    return (
        <div className='button-grid'>
            <div className='button-wrapper'>
                <button onClick={onLinkClickTitle} className={document.getElementById('Title')? 'section-button currently-selected' : 'section-button'}/>
            </div>
            <div className='button-wrapper'>
                <button onClick={onLinkClickElem1} className={document.getElementById('Title')? 'section-button currently-selected' : 'section-button'}/>
            </div>
            <div className='button-wrapper'>
                <button onClick={onLinkClickElem2} className={document.getElementById('Title')? 'section-button currently-selected' : 'section-button'}/>
            </div>
        </div>
    )
}

export default SectionSelector