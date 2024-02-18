import { Post } from './Post';

export function Posts(props) {
	console.log(props);
	return props.posts.map((post) => <Post key={post.id} name={post.name} cb={props.cb} id={post.id} cbdel={props.cbdel} />);
}
