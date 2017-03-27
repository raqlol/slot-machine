var React = require('react');

class Button extends React.Component {
  render () {
    return (
      <button>
        <h5>{this.props.name}</h5>
      </button>
    )
  }
}
module.exports = Button;
