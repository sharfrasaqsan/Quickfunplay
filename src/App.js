import "./App.css";
import Header from "./components/header";
import PopularCategories from "./components/PopularCategories";
import GameList from "./components/GameList";
import LatestNews from "./components/LatestNews";

function App() {
  return (
    <div className="App">
      <Header />
      <PopularCategories />
      <GameList />
      <LatestNews />
    </div>
  );
}

export default App;
