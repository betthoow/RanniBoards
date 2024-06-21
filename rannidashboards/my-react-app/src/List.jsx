import PropTypes from 'prop-types'

function List(props){
    /*const fruits = [{id: 1, name:"apple" , calories: 95}, 
        {id: 2,name:"orange", calories: 45}, 
        {id: 3,name:"banana", calories: 105}, 
        {id: 4,name:"coconut", calories: 159}, 
        {id: 5,name:"pineapple", calories: 37}];
    */
    //fruits.sort();
    //fruits.sort( (a,b)=> a.name.localeCompare(b.name)); //alphabetical
    //fruits.sort( (a,b)=> b.name.localeCompare(a.name)); //reverse alphabetical
    //fruits.sort( (a,b) => a.calories - b.calories); //numerical order
    //fruits.sort( (a,b) => b.calories - a.calories); //reverse numerical order

   //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    //const highCalFruits = fruits.filter(fruit => fruit.calories > 100);

    const itemList = props.items;
    const category = props.category;

    itemList.sort((a,b) => a.calories - b.calories);

    const listItems = itemList.map(item => <li key={item.id}>
        {item.name}: &nbsp; <b>{item.calories}</b>
        </li>);

    return (<>
        <h3>{category}</h3>
        <ol>{listItems}</ol>
    </>) 
}

List.propTypes = {
    items : PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, 
                                            name: PropTypes.string, 
                                            calories: PropTypes.number})),
    category : PropTypes.string
}

List.defaultProps = {
    items : [],
    category : "Category"
}

export default List