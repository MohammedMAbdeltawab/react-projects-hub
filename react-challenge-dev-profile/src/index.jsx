import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar path="/1302571.png" />
      <div className="data">
        <Intro
          Txt={`
    Monkey D. Luffy, commonly known as \"Straw Hat Luffy\" or simply \"Straw
    Hat\", is the founder and captain of the Straw Hat Pirates. He pursues
    the legendary treasure of the late Gol D. Roger in order to become the
    new Pirate King and reach a further, untold dream He believes that being
    the Pirate King means having the most freedom in the world
  `}
        />
        <SkillList />
      </div>
    </div>
  );
}
function Avatar(props) {
  return <img src={props.path} alt="Luffy" className="avatar" />;
}
function Intro(props) {
  return <p>{props.Txt}</p>;
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="Gomu Gomu no Mi" emoji="🤛" color="purple" />
      <Skill skill="Eating Meat" emoji="🍖" color="orange" />
      <Skill skill="Gear 5" emoji="☁️" color="silver" />
      <Skill skill="Conqueror's Haki" emoji="👑" color="crimson" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
