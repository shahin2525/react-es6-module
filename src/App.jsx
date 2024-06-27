import "./App.css";
import Bottles from "./component/bottles/Bottles";
import Header from "./component/header/Header";

function App() {
  // const [watches, setWatches] = useState([]);
  // useEffect(() => {
  //   fetch("watch.json")
  //     .then((res) => res.json())
  //     .then((data) => setWatches(data));
  // }, []);
  return (
    <>
      <h1>Vite + React</h1>

      <Header></Header>
      <Bottles></Bottles>
    </>
  );
}

export default App;
