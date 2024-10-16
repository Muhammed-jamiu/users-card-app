import "../src/App.css";
import Card from "./conponents/Card";
import data from "./conponents/data";
import { FaUsers } from "react-icons/fa";

function App() {
  const displayCards = data.map((profile) => {
    return (
      <Card
        image={profile.image}
        name={profile.name}
        state={profile.state}
        institution={profile.institution}
        course={profile.course}
        gender={profile.gender}
        level={profile.level}
      />
    );
  });
  return (
    <>
      <div className="text-center mb-[20px] border-[2px] bg-pink-500 text-white font-bold text-xl flex justify-center gap-[10px] items-center">
        <span>
          {" "}
          <FaUsers />
        </span>
        <h3> Users Profile Card</h3>
      </div>
      <div className="flex justify-around gap-[0px] mb-[10px]">
        <button className="btns">All</button>
        <button className=" border-[2px] rounded-md bg-green-600  w-[130px]  font-bold border-green-600 text-white">
          Undergraduate
        </button>
        <button className="btns">Graduate</button>
      </div>
      <div className="flex  flex-wrap gap-3 justify-center">{displayCards}</div>
    </>
  );
}

export default App;
