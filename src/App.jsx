import chalnaari from "./assets/chalnaari.png";
import chalnaariFace from "./assets/chalnaariFace.svg";

function App() {
  return (
    <>
      <nav>
        <img src={chalnaariFace} />
      </nav>
      <div className="chalnaari">
        <div className="comingSoon">
          <img src={chalnaari} />
          <h3>Coming Soon...</h3>
          <h4>15 | 08 | 2023</h4>
        </div>
      </div>
    </>
  );
}

export default App;
