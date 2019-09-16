import React from 'react';

const food = [
  { korean: "kimchi" }, { america: "hamburger" }
]

function Potato(props) {
  console.log(props);
  return (
    <>
      <h2>{props.korean}</h2>
      <h2>{props.america}</h2>
    </>
  );
}
function App() {
  return (
    <div className="App">
      <h2>hello</h2>
      <Potato korean={food[0].korean} america={food[1].america} />
    </div>
  );
}

export default App;
