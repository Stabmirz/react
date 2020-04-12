import React, {Component} from 'react';
import Axios from 'axios';

class PostsApp extends Component {
    state = { 
        posts:[]
    }

    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response =>
                this.setState({
                    posts: response.data
                })
            )
            .catch(console.error());
    }

    render() { 
        let {posts} = this.state;

        if(posts.length===0){
            return <h1 className='container py-5' style={{textAlign:'center'}}>Loading ...</h1>
        }else{
            return (
                <div  className='container py-5'>
                   
                    {posts.map(post=>{
                        return(
                            <div className='list-group-item my-3' key={post.id}>
                                <h5>{post.title}</h5> 
                                <p>{post.body}</p> 
                            </div>
                        )
                    })}
                   
                </div>
            );
        }

    }
}
 
export default PostsApp;