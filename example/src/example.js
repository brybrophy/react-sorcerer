var React = require('react');
var ReactDOM = require('react-dom');
var ReactSorcerer = require('react-sorcerer');

var App = React.createClass({
	render () {
		return (
			<div>
				<ReactSorcerer />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
