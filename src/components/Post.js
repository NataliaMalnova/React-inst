import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render () {
        return (
            <div className="post">
                <User src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-oYwKUmYYhkf2XHdFSulvqGGORmYc3IEu0yK8FhNJxpfAQByo&s"
                      alt="man"
                      name="Scott"
                      min />
                      
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some accont
                </div>
                <div className="post__descr">
                    “Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                    consectetur, adipisci velit, sed quia non numquam eius modi tempora 
                    incidunt ut labore et dolore magnam aliquam quaerat voluptatem.”
                </div>
            </div>
        )
    }
}