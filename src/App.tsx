import desktop from "./images/bg-intro-desktop.png";
import "./App.css";
import { Form } from "./components/Form";

const  App =() =>{

  return (
    <div className="app__container">
      <img className="img-desktop" src={desktop} alt="desktop" />
      <div className="left__wrapper">
        <h1 className="left__header">Learn to code by watching others</h1>
        <span className="left__subtitle">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </span>
      </div>
      <div className="right__wrapper">
        <button className="right__button">Try it free 7 days then $20/mo. thereafter</button>
        <Form/>
      </div>
    </div>
  );
}

export default App;
