import React, { Component, PropTypes } from 'react'

class Article extends Component {
  render() {
    return (
      <div>
        <p>{this.props.print}</p>
        <p>Author name</p>
        <p>{this.props.author.name}</p>
        <p>Article date</p>
        <p>{this.props.author.date.toString()}</p>
        <p>Article length</p>
        <p>{this.props.author.length}</p>
        <p>Article content</p>
        <p>{this.props.children}</p>
      </div>
    )
  }
}

Article.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    length: PropTypes.number.isRequired
  }).isRequired,
  children: PropTypes.object.isRequired
}

export default Article
