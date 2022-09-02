import { h } from 'preact';
import style from './style.css';
import BookList from '../../components/bookList/BookList.jsx';

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<p>This is the Home component.</p>
        <BookList />
	</div>
);

export default Home;
