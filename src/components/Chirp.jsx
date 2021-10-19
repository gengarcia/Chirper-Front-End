import React from 'react';
import Input from './Input';
import Timeline from './Timeline';

class Chirp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chirps: [
               { id: 1, text: 'React is very picky! SOS' },
               { id: 2, text: 'What should I get for lunch?' },
               { id: 3, text: "Coding is harder than I thought it woud be..." }],
            name: '@genny_xoxo',           
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({text: event.target.value});
    }
    
    makeHeader() {
        return (
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">C H I R P E R</h1>
                </div>
            </div>
        )
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            chirps: [ 
                ...this.state.chirps,
                { text: this.state.text, id: this.state.chirps.length + 1 }],
            text: ''
            }
        )
        console.log('current', this.state.text);
    }

    render() {
        return (
            <React.Fragment>
                {this.makeHeader()}

                <Input
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    name={this.state.name}
                    value={this.state.text}
                />
                <Timeline name={this.state.name} chirps={this.state.chirps} />
            </React.Fragment>
        )
    }
}

export default Chirp;