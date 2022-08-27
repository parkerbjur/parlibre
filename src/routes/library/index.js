import { h } from 'preact';
import style from './style.css';

// Note: `user` comes from the URL, courtesy of our router
const Library = ({ library }) => {

    return (
		<div class={style.profile}>
			<h1>Library Name: {library}</h1>
			<p>welcome to { library }.</p>


		</div>
	);
}

export default Library;
