function MoodBoardItem({ color, image, description }) {
  return <div style={{
    backgroundColor: color
  }} className="mood-board-item">
    <img className="mood-board-image" src={image} />
    <h3 className="mood-board-text">{description}</h3>
  </div>
}

function App() {
  const moodBoardItems = [
    {
      id: 1,
      color: "#FA5C5C",
      image: "src/assets/img/dorm.png",
      description: "Dormitory"
    },
    {
      id: 2,
      color: "#EA7B7B",
      image: "src/assets/img/track-field.png",
      description: "Track Field"
    },
      {
      id: 3,
      color: "#FD8A6B",
      image: "src/assets/img/building_7.png",
      description: "Building 7"
    },
      {
      id: 4,
      color: "#FEC288",
      image: "src/assets/img/building_2.png",
      description: "Building 2"
    },
    {
      id: 5,
      color: "#9E3B3B",
      image: "src/assets/img/building_3.png",
      description: "Building 3"
    },
    {
      id: 6,
      color: "#D25353",
      image: "src/assets/img/building_5.png",
      description: "Buidling 5"
    }
  ]
  return <div>
    <h1 className="mood-board-heading">YZU buildings</h1>
    <div className="mood-board">
    {moodBoardItems.map(item => (
      <MoodBoardItem key={item.id} {...item} />
    ))}
    </div>
  </div>
}

export default App;