import UserGreeting from "./UserGreeting";

function App() {
   return(
      <>
      <UserGreeting isloggedIn={true} username={1}/>
      <UserGreeting />
      </>
   );
}

export default App
