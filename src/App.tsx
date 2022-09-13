import "./styles/main.css";
import logoImg from "./assets/logoNlwEsports.svg";
import game1 from "./assets/image 1.png";
import game2 from "./assets/image 2.png";
import game3 from "./assets/image 3.png";
import game5 from "./assets/image 5.png";
import game6 from "./assets/image 6.png";
import game7 from "./assets/image 7.png";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="">
          <img src={game1} alt="" />
        </a>
        <a href="">
          <img src={game2} alt="" />
        </a>
        <a href="">
          <img src={game3} alt="" />
        </a>
        <a href="">
          <img src={game5} alt="" />
        </a>
        <a href="">
          <img src={game6} alt="" />
        </a>
        <a href="">
          <img src={game7} alt="" />
        </a>
      </div>
    </div>
  );
}

export default App;
