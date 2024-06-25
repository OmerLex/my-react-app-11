import img from "./img/img1.jpg"
import './App.css';
import Title from "./components/Title";
import MenuItems from "./components/MenuItems";

// function Title(){
//   return(
//     <h1>React is fun!!!</h1>
//   );
// }

// const Title = () => {
//   return(
//     <h1>React is fun!!!</h1>
//   );
// }

function App() {
  const name = "John";
  let lastName = "Doe";
  const x = true;
  const imageUrl = 'https://picsum.photos/seed/picsum/400/400';
  return (
    <div className="App">
      <MenuItems />
      <h1>Hello React!!!</h1>
      <Title />
      <h2>Hello {name} {lastName}</h2>
      <h2>{x ? 'Yes' : 'No'}</h2>
      <img src={img}></img>
      <br />
      <img src={imageUrl}></img>   
      <Title />  
     
      
    </div>
   
    
  );
}

export default App;
