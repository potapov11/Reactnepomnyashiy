import React, { Component } from 'react';
import { Posts } from './components/Posts';

class App extends Component {
	state = {
		posts: [
			{ id: 1, name: 'react' },
			{ id: 2, name: 'vue' },
			{ id: 3, name: 'angular' },
		],
	};

	handleClick() {
		console.log('this.state was updated');
	}

	deleteElement = (id) => {
		this.setState({ posts: this.state.posts.filter((item) => item.id !== id) });
	};

	render() {
		const { posts } = this.state;

		return (
			<div className="App">
				<Posts posts={posts} cb={this.handleClick} cbdel={this.deleteElement} />
			</div>
		);
	}
}

export default App;
