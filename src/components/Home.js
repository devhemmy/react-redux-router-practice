import React, { Component } from 'react'
import axios from "axios"
import {Jumbotron,Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {addPosts} from "../actions/Actions"
class Home extends Component {
    state = { post: [ ]}
    

    generate = () => {
      axios.get('https://jsonplaceholder.typicode.com/posts').then(res => this.props.generatePosts(res.data.slice(0,10)) )
    }
  render() {
      
    return (
      <div className="container">
        <div className="row">
            {this.props.posts.length ? this.props.posts.map(post => (
                <div key={post.id} className="col-12">
                <Jumbotron >
                <Link to={"/" + post.id} >
                <h1>{post.title}</h1>
                </Link>
                <p>
                  {post.body}
                </p>
                <p>
                  
                  <Link to={"/" + post.id} >
                  <Button variant="primary">Learn more</Button>
                </Link>
                </p>
              </Jumbotron>
                </div>
            )) : <Button onClick={this.generate} variant="primary">Generate Random Posts</Button>}
        </div>
      </div>
    )
  }
}

  const mapStateToProps = (state) => {
    return {
      posts : state.posts
    }
  }
  const mapDispatchToProps = (dispatch)=> {
    return {
      generatePosts : (data) => { dispatch( addPosts(data) ) }
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Home)
