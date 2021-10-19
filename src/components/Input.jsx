import React from 'react';

const Input = (props) => {
    return (
        <React.Fragment>
        <form onSubmit={props.handleSubmit}>
            <div class="form-group">
                <label for="exampleInputEmail1">NEW CHIRP:</label>
                <input 
                            type="text" 
                            value={props.value} 
                            onChange={props.handleChange} 
                            class="form-control" id="textInput" aria-describedby="chirpHelp" 
                            placeholder="Type your chirp here" />
                <small id="chirpHelp" class="form-text text-muted">What's new?!</small>
            </div>
                    
            <button type="submit" class="btn btn-primary" id="submit">Chirp Chirp!</button>
        </form>
        </React.Fragment>
    );
};

export default Input;