import { Button, Header, Image } from 'semantic-ui-react';
import SideBarShell from './SideBarShell';
import Shen from './images/IMG_964.jpg';

function HomePage () {

    return(
        <div>
            <div className='App-Page'>
                <Image src={Shen} className='Shen' />
            </div>
            <br></br>
            <div className='Quote'>
                <h2>"All illness is an invitation to change"</h2>
                <h4>-Dr. Jeffrey C Yuen</h4>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className='Copy'>
                <p>Shining Sea, Zhao Hai, the acupuncture point KI-6, is the opening point for Yin Qiao Mai, one of the Eight Extraordinary Vessels. It is the beginning of self reflection. The name means, to reflect in water, a stream, a lake or sea where we can see ourselves as in a mirror. This is a meditative process. It means to look upon ourselves, at our reflection while we reflect upon what we see. We are looking at our esence. It is the process by which we illuminate the sense of our being. As a point of self awareness it helps one to be clear about what one wants in life. </p>
                <p>By coursing the Qi, Zhao Hai/Shining Sea helps one find a path. It treats pain with no precipitating factors, the pain that results from feeling lost, the pain created by a lack of direction. Shining Sea/Zhao Hai can help us find our way, our journey, our adventure. This is our invitation to change.</p>
            </div>
        </div>
    )
}

export default HomePage