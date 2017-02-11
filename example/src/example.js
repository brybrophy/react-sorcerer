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
					defaultSrc="/images/defaultImg.jpg"
					minDevice="mobileSm"
					maxDevice="desktopXl"
				/>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
