import React from "react";
import Card from "./components/Card";
import faker from 'faker'

function App() {
   
  return (
    <div className="cards">
      <Card image={faker.image.image()} title="card1" description="something..." link1="#" link2="#" link1Text="SHARE" link2Text="EXPLORE"/>
      <Card image={faker.image.image()} title="card2" description="something..." link1="#" link2="#" link1Text="SHARE" link2Text="EXPLORE"/>
      <Card image={faker.image.image()} title="card3" description="something..." link1="#" link2="#" link1Text="SHARE" link2Text="EXPLORE"/>
    </div>
  );
}

export default App;
