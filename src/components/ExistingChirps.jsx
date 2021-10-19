import React from 'react';
import Avatar from './IMG_5604.JPG';


const ExistingChirps = (props) => {
    return (
        <React.Fragment>
        <div className="d-flex align-items-center justify-content-around ">
            <div class="card align-items-center justify-content-center" style={{width: '18rem', textAlign: 'center' }}>
                <img 
                    class="card-img-top"
                    alt="Avatar" 
                    src={Avatar}
                    style={{ height: '200px', width: '150px' }} />
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">React is very picky! SOS</p>
                </div>
            </div>

            <div class="card align-items-center justify-content-center" style={{width: '18rem', textAlign: 'center' }}>
                <img 
                    class="card-img-top"
                    alt="Avatar" 
                    src={Avatar}
                    style={{ height: '200px', width: '150px' }} />
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">What should I get for lunch?</p>
                </div>
            </div>

            <div class="card align-items-center justify-content-center" style={{width: '18rem', textAlign: 'center' }}>
                <img 
                    class="card-img-top"
                    alt="Avatar"
                    src={Avatar} 
                    style={{ height: '200px', width: '150px' }} />
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">Coding is harder than I thought it woud be...</p>
                </div>
            </div>
        </div>

        </React.Fragment>

    );
};

export default ExistingChirps;