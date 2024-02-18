export function Post(props) {
	const { cb, name, id, cbdel } = props;

	console.log(props);

	return (
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<h2 onClick={cb}>{name}</h2>
			<button onClick={() => cbdel(id)} id={id} style={{ height: '25px', marginLeft: '10px' }}>
				delete
			</button>
		</div>
	);
}
