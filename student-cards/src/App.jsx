import Header from './header/header.jsx'
import StudentCard from './StudentCard/StudentCard.jsx';
  const App = ()=>{
   return (
     <>
    <Header />
    <StudentCard age={10} name = {1} isEnrolled/>
    <StudentCard age={12} name ="anne" isEnrolled = {false}/>
    </>
   );
  }

export default App
