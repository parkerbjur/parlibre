import LibraryCard from '../libraryCard/LibraryCard.jsx';

const LibraryList = (props) => {
    const { libraries } = props;
	return (
        <div>
            {libraries.map((library) => 
                 <LibraryCard key={library.id} library={library} />
            )}
		</div>
    )
};

export default LibraryList;

