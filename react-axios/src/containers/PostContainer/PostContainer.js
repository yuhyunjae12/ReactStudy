import React, {Component} from 'react';
import { PostWrapper, Navigator, Post, Warning } from '../../components';
import * as service from '../../services/api';

class PostContainer extends Component {

    constructor(props){
        super();

        this.state ={
            postId: 1,
            fetching: false,
            post:{
                title : null,
                body : null
            },
            comments: [],
            warningVisibility: false
        }
    }

    showWaring = () => {
        this.setState({
            warningVisibility: true
        })

        setTimeout(
            () => {
                this.setState({
                    warningVisibility: false
                });
            }, 1500
        );
    }
    
    fetchPostInfo = async (postId) => {

        this.setState({
            fetching: true
        })

        try {

            const info = await Promise.all([
            service.getPost(postId),
            service.getComments(postId) 
            ]);

            console.log(info);

            const {title, body} = info[0].data; 

            const comments = info[1].data;

            this.setState({
                postId,
                post: {
                    title,
                    body
                },
                comments,
                fetching: false
            });
        
        } catch (e) {

            this.setState({
                fetching: false
            });

            this.showWaring();
            
            console.log('error occurred', e);
        }

    }

    componentDidMount() {
        this.fetchPostInfo(1);
    }

    handleNavigateClick = (type) =>{
        const postId = this.state.postId;

        if(type === 'NEXT'){
            this.fetchPostInfo(postId + 1);
        } else { 
            this.fetchPostInfo(postId - 1);
        }
    }

    render() {
        const {postId, fetching, post, comments, warningVisibility} = this.state;

        return (
            <PostWrapper>
                <Navigator
                    postId={postId}
                    disabled={fetching}
                    onClick={this.handleNavigateClick}
                />
                <Post
                    title={post.title}
                    body={post.body}
                    comments={comments}
                />
                <Warning visible={warningVisibility} message="That post does not exist"/>
            </PostWrapper>
        );
    }
}

export default PostContainer;