import React, {Component} from 'react';
import InstaServices from '../services/instaService.js';


export default class Posts extends Component {

    InstaService = new InstaServices();
    state = {
        posts: [],
        error: false
    }

    componentDidMount() {
        this.updatePosts();
    }

    updatePosts() {
        this.InstaService.getAllPosts().then(this.onPostsLoaded).catch(this.onError);
    }

    onPostsLoaded = (posts) => {
        this.setState({
            posts,
            error: false
        }); 
    }

    onError = (err) => {
        this.setState({
            error: true
        }); 
    }

    render () {
        return (
            <div className="left">
                 
            </div>
        )
    }
}