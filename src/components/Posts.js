import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
    render () {
        return (
            <div className="left">
                
                <Post src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQB4zDv9VXGwyqufgdPTh2hdEfPU1aPlxr-P_FhEE-8TA8TnKs&s" alt = "inst" />
                <Post src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQB4zDv9VXGwyqufgdPTh2hdEfPU1aPlxr-P_FhEE-8TA8TnKs&s" alt = "inst" />

            </div>
        )
    }
}