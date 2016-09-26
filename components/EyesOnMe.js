import React from 'react'

class EyesOnMe extends React.Component {
  focus() {
    return console.log('Good!')
  }

  blur() {
    return console.log('Hey! Eyes on me!')
  }
  
  render() {
    return (
      <button onFocus={this.focus} onBlur={this.blur}>Button</button>
    )
  }
}

module.exports = EyesOnMe