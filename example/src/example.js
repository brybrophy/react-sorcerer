var React = require('react');
var ReactDOM = require('react-dom');
var Sorcerer = require('react-sorcerer');

var App = React.createClass({
	render () {
		return (
			<div className="image-container">
				<Sorcerer
					alt="sorcerer"
					className="example-image"
					srcExt="jpg"
					srcPath="images/defaultImg"
					minDevice="mobileSm"
					maxDevice="desktopXl"
				/>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
