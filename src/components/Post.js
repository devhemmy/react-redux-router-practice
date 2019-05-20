import React, { Component } from 'react'
import axios from 'axios'
import {Jumbotron,Button} from "react-bootstrap"
import {deletePost} from "../actions/Actions"
import {connect} from "react-redux"

class Post extends Component {
    state = {
        post: null
      }
    componentDidMount() {
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
          .then(res => {
            this.setState({
              post: res.data
            });
            
          });
    }
    handleDelete(id){
      this.props.delete(id)
      this.props.history.push("/")
    }
    
  render() {
      const { post } = this.props
      
      console.log(this.props)
    return (
      <div className="container">
            {post ? <div className="row"> 
            <div key={post.id} className="col-12">
                <Jumbotron >
                
                <h1>{post.title}</h1>
                
                <p>
                  {post.body}
                </p>
                <p>
                  
                 
                  <Button onClick={ () => this.handleDelete(post.id)} variant="primary">Delete This Post</Button>
               
                </p>
              </Jumbotron>
                </div>
            </div> : <p> Post Is Loading...... </p>}
      </div>
    )
  }
}
const mapStateToProps = (state,ownProps) => {
  return {
    post : state.posts.find(post => post.id === parseInt(ownProps.match.params.post_id))
  }
  
}
const mapDispatchToProps = (dispatch)=> {
  return {
    delete : (data) => { dispatch( deletePost(data) ) }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Post)