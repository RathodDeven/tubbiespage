import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [rooms,setRooms] = useState([]);

  useEffect(() => {
    const foo = async() => {
      const data = await fetch("https://interality.io/api/v1/media/search?source=rooms&filter=public&cursor=0",{
        headers: {"content-type": "application/json"},
        method: "GET"
      }).then(r => r.json());
      console.log("publicRooms from reticulum",data.entries);

      setRooms(data.entries);
    }
    foo();
  },[])

  const availableRoom = () => {
    console.log("all ROOms",rooms);
    if(rooms.length === 0){
      return;
    }
    for (let i = 0; i < rooms.length; i++) {
      let room = rooms[i];
      if((room.lobby_count + room.member_count) < 60){
            console.log("selected room ",room.url)
            return room.url;
      }
    } 

    alert("Wait for a while and try again");
    // for(const room in rooms){
    //   console.log("room",room);
    //   if((room.lobby_count + room.member_count) <= 3){
    //     console.log("selected room ",room.url)
    //     return room.url;
    //   }
    // }
  }
  const onClick = async () => {
    const roomLink = availableRoom();
    console.log("roomLink",roomLink);
    // window.location.href = roomLink;
    // window.location.href = "https://interality.io/HFwSvX9/tubbieverse";
  }
  return (
    <div className="App">
      <button className='enterBtn' onClick={onClick}>
        Enter TubbieVerse
      </button>
    </div>
  );
}

export default App;
