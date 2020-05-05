import React, {Component} from 'react';

class Resume extends Component {
    constructor(){
        super()
        this.state={
            resume : ["Hello, I'm Tyler", "I like my dogs and to play guitar"]
        }
    }

    render(){
        const resume = this.state.resume.map((e, i) => (
            <div key={i}>
                <div> {e} </div>
            </div>
        ))
        return (
            <div>
                {resume}
            </div>
        )
    }
}

export default Resume;