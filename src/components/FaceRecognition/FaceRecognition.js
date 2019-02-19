import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imgUrl, box }) => {
    const position = {
        top: box.topRow,
        left: box.leftCol,
        bottom: box.bottomRow,
        right: box.rightCol
    };
    return(
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputimage' alt='' src={imgUrl} width='500px' height='auto' />
                <div className='bounding-box' style={position}></div>
            </div>
        </div>
    );
};

export default FaceRecognition;