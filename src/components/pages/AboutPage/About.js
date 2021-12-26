import React from "react";
import './About.css';
import ellie_pfp from '../../images/ellie-pfp.jpg'
import test_pfp from '../../images/samplepfp.png'
import Parallax from 'react-rellax';

function About() {
    return(
        <>
            <div className='element-wrapper'>
                <Parallax speed='1' className='card-wrapper light-shadow'>
                    <div className='top-wrapper'>
                        <div className='profile-pic-wrapper'>
                            <img src={ellie_pfp} width='96px' height='96px' className='profile-pic'/>
                        </div>
                        <p className='name-wrapper'>
                            Ellie
                        </p>
                    </div>
                    <div className='text-wrapper'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Scelerisque felis imperdiet proin fermentum leo vel orci. Vel quam elementum pulvinar etiam non quam lacus suspendisse. Proin sed libero enim sed faucibus. Cras semper auctor neque vitae tempus quam. Ornare arcu odio ut sem nulla. Turpis nunc eget lorem dolor sed viverra ipsum nunc. Fermentum posuere urna nec tincidunt praesent semper. Orci porta non pulvinar neque laoreet suspendisse interdum. Adipiscing elit duis tristique sollicitudin. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Blandit volutpat maecenas volutpat blandit aliquam etiam. Varius quam quisque id diam vel quam elementum pulvinar. Viverra mauris in aliquam sem fringilla. Integer eget aliquet nibh praesent.
                    </div>
                </Parallax>
            </div>
            <div className='element-wrapper flipped-element'>
                <Parallax speed='-2' className='card-wrapper light-shadow'>
                    <div className='top-wrapper'>
                        <div className='profile-pic-wrapper flipped-transform'>
                            <img src={test_pfp} width='96px' height='96px' className='profile-pic'/>
                        </div>
                        <p className='name-wrapper'>
                            Daan
                        </p>
                    </div>
                    <div className='text-wrapper'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Scelerisque felis imperdiet proin fermentum leo vel orci. Vel quam elementum pulvinar etiam non quam lacus suspendisse. Proin sed libero enim sed faucibus. Cras semper auctor neque vitae tempus quam. Ornare arcu odio ut sem nulla. Turpis nunc eget lorem dolor sed viverra ipsum nunc. Fermentum posuere urna nec tincidunt praesent semper. Orci porta non pulvinar neque laoreet suspendisse interdum. Adipiscing elit duis tristique sollicitudin. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Blandit volutpat maecenas volutpat blandit aliquam etiam. Varius quam quisque id diam vel quam elementum pulvinar. Viverra mauris in aliquam sem fringilla. Integer eget aliquet nibh praesent.
                    </div>
                </Parallax>
            </div>
            <div className='padding'/>
            <div className='padding'/>
            <div className='padding'/>
            <div className='padding'/>
            <Parallax speed='2' className='about-wrapper'>
                <div className='top-wrapper'>
                    <p className='about-title'>
                        About Us
                    </p>
                </div>
                <div className='about-us light-shadow '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Enim sit amet venenatis urna cursus eget nunc scelerisque viverra. In vitae turpis massa sed elementum tempus. Bibendum neque egestas congue quisque. Sed elementum tempus egestas sed sed risus pretium quam. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Consectetur lorem donec massa sapien faucibus. Nisl condimentum id venenatis a condimentum. Quisque egestas diam in arcu cursus euismod quis viverra. Integer vitae justo eget magna fermentum. Lacus viverra vitae congue eu. Maecenas accumsan lacus vel facilisis volutpat est velit. Pharetra magna ac placerat vestibulum. In pellentesque massa placerat duis ultricies lacus sed turpis.
                    <br/>
                    <br/>
                    At lectus urna duis convallis convallis tellus. Amet mattis vulputate enim nulla. Lectus quam id leo in vitae turpis massa sed elementum. Fringilla ut morbi tincidunt augue interdum velit. Nam aliquam sem et tortor consequat id. Ac tortor dignissim convallis aenean et tortor. Sit amet aliquam id diam maecenas. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Ut aliquam purus sit amet luctus. Sem et tortor consequat id porta nibh venenatis cras. Nullam non nisi est sit amet facilisis. Amet est placerat in egestas erat imperdiet. Feugiat vivamus at augue eget arcu dictum varius duis at. At imperdiet dui accumsan sit amet nulla facilisi morbi. Donec adipiscing tristique risus nec. In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Ornare lectus sit amet est. Eros in cursus turpis massa tincidunt dui ut.
                </div>
            </Parallax>
            <div className='padding'/>
        </>
    )
}

export default About