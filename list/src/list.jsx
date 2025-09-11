 
 const List = ({items = [], category = "category" }) =>{

    const categories = category;
    const itemList = items;

    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b>
                                            </li>);
    return(
        <div>
            <h3 className="list-category">{categories }</h3>
            <oL className="list-item">{listItems}</oL>
        </div>
    );
 }

 export default List  