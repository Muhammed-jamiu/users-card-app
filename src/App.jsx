import "../src/App.css";
import Card from "./conponents/Card";
import data from "./conponents/data";

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
      <div className="flex  flex-wrap gap-3 justify-center">{displayCards}</div>
    </>
  );
}

export default App;
