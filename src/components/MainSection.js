import React from 'react';
import './MainSection.css';
import Parallax from 'react-rellax';
import { Link } from 'react-router-dom';

function MainSection(
    {
        darkMode,
        topLine,
        headline,
        description,
        buttonLabel,
        img1,
        img2,
        alt1,
        alt2,
        img1_height,
        img1_width,
        img2_height,
        img2_width,
        scroll,
        imgStart,
        shadow,
        padding,
        alt_img_location,
        padding_override,
        buttonLinkTo
    }) {

    console.log(padding);
    document.body.style.setProperty('--pad', padding);

    let newClassName = 'home__main-section';
    if (padding_override) {
        newClassName = newClassName + ' padding_override'
    }
    if (darkMode)
        newClassName = newClassName + ' darkBg'
    console.log(newClassName);

    let shadowProperties = ''
    if (shadow)
        shadowProperties = 'shadow'
    if (darkMode && shadow)
        shadowProperties = 'darkshadow'
    console.log(shadowProperties)

    return (
        <>
            <div className={newClassName}>
                <div className='container'>
                    <div
                        className='row home__Main-row'
                        style={{
                            display: 'flex',
                            flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
                        }}
                    >
                        <div className='col'>
                            <div className='home__main-text-wrapper'>
                                <div className='top-line'>{topLine}</div>
                                <h1 className={darkMode ? 'heading' : 'heading dark'}>
                                    {headline}
                                </h1>
                                <p
                                    className={
                                        darkMode
                                            ? 'home__main-subtitle'
                                            : 'home__main-subtitle dark'
                                    }
                                >
                                    {description}
                                </p>
                                <Link to={buttonLinkTo}>
                                    <button className={darkMode ? 'button dark' : 'button'}>
                                        {buttonLabel}
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className='col'>
                            <Parallax speed={scroll? -0.25 : 0}>
                                <img src={img1} alt={alt1} className={alt_img_location? 'bg-image-offset ' + shadowProperties : 'bg-image ' + shadowProperties} width={img1_width} height={img1_height}/>
                            </Parallax>
                            <Parallax speed={scroll? 0.25 : 0}>
                                <img src={img2} alt={alt2} className={alt_img_location? 'image_offset ' + shadowProperties : 'image ' + shadowProperties} width={img2_width} height={img2_height}/>
                            </Parallax>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainSection;