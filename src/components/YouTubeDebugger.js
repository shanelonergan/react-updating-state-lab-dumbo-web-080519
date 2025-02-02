import React, { Component } from 'react';

class YoutubeDebugger extends Component {

	constructor(props) {
		super(props);

		this.state = {
			errors: [],
			user: null,
			settings: {
				bitrate: 8,
				video: {
					resolution: '1080p'
				}
			}
		}
	}

	render() {
		return (
			<div>
				<button className = "bitrate" onClick = { this.bitrateHandler }>bitrate</button>
				
				<button className = "resolution" onClick = { this.resolutionHandler }>resultion</button>
			</div>
		);
	}

	bitrateHandler = () => {
		this.setState({
			settings: {
				...this.state.settings,
				bitrate: 12
			}
		}, () => console.log(this.state))
	}

	resolutionHandler = () => {
		this.setState({
			settings: {
				...this.state.settings,
				video: {
					resolution: '720p'
				}
			}
		}, () => console.log(this.state))
	}
}

export default YoutubeDebugger;