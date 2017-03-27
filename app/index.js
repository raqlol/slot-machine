var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./components/Button');


class SlotMachine extends React.Component {
  render() {
    return (
      <div id="bell" className="bell">
        <div id="prize"></div>
        <div className="box" id="box">
          <h1>Caffiene Slots</h1>
          <h3> Click the red button to play</h3>
          <div className="slot" id="brew"> </div>
          <div className="slot" id="prep"> </div>
          <div className="slot" id="ingredient"> </div>
          <Button name="red button" onClick={console.log('working')}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render (
  <SlotMachine />,
  document.getElementById('app')
);
