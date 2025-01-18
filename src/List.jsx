import PropTypes from 'prop-types';

function List(props) {

    const category = props.category;
    const itemList = props.items;
    const listItems = itemList.map(item => <li key={item.id}>
                                                    {item.name}: &nbsp; 
                                                    <b>{item.calories}</b>
                                                    </li>) // nbsp is short for non breaking space
                                                    





    return ( <>
            <h3 className="list-category"> {category}</h3>
            <ol className="list-Items">{listItems}</ol>
            </>
    )
}
List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        calories: PropTypes.number.isRequired
    })).isRequired,
    category: PropTypes.string.isRequired
}

List.defaultProps = {
    items: [],
    category: "List"
}

export default List;