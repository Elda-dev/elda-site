import elda_player from '../../images/elda_player.png';
import elda_homescreen from '../../images/elda_homescreen.png';
import lock from '../../images/lock.png';
import check from '../../images/check.png';

export const homeObjOne = {
    darkMode: false,
    topLine: 'Let us tell you a secret',
    headline: "Beautiful software doesn't have to cost a fortune",
    description: '',
    buttonLabel: "Discover our projects",
    imgStart: '',
    img1: elda_player,
    img2: elda_homescreen,
    alt1: 'Elda player music screen',
    alt2: 'Elda player home screen',
    img1_height: '781',
    img1_width: '390',
    img2_height: '781',
    img2_width: '390',
    alt_img_location: false,
    scroll: true,
    alt: 'elda music player',
    shadow: true,
    padding: '700px',
    padding_override: true,
    buttonLinkTo: '/projects'
};

export const homeObjTwo = {
    darkMode: false,
    topLine: "Let's get something straight",
    headline: "We're not here to harvest your data",
    description: 'As software engineers and users ourselves, we understand concerns about privacy. We build' +
        " all of our apps and services with security and privacy at their forefront. Don't believe us?" +
        " They're all open-source, so you can check for yourself.",
    buttonLabel: "Learn more about us",
    imgStart: 'start',
    img1: lock,
    img2: check,
    alt1: 'A closed lock',
    alt2: 'A check mark',
    img1_height: '384',
    img1_width: '300',
    img2_height: '115',
    img2_width: '140',
    alt_img_location: true,
    scroll: true,
    alt: 'elda music player',
    shadow: false,
    padding: '200px',
    padding_override: false,
    buttonLinkTo: '/about'
};