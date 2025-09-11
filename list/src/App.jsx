import List from "./list"
const App = () =>{

    const fruits = [{id:1,name: "apple", calories: 95},
                    {id:2,name:"orange", calories: 45},
                    {id:3,name:"banana", calories:105}, 
                    {id:4,name:"pineapple", calories:155}];

    const vegetables = [{id:1,name: "corn", calories: 95},
                    {id:2,name:"tomatoes", calories: 45},
                    {id:3,name:"spinach", calories:105}, 
                    {id:4,name:"carrrot", calories:155}];


  return(
    <>
    {(fruits.length > 0) ?<List items={fruits} category="Fruits"/>: null}
    <List items={vegetables} category="Fruits"/>
    </>
  );
}

export default App
