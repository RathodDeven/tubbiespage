import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // const [rooms,setRooms] = useState([]);
  // const [loading,setLoading] = useState(false)

  // useEffect(() => {
  //   const foo = async() => {
  //     try{
  //       setLoading(true);
  //     const data = await fetch("https://interality.io/api/v1/media/search?source=rooms&filter=public&cursor=0",{
  //       headers: {"content-type": "application/json"},
  //       method: "GET"
  //     }).then(r => r.json());
  //     console.log("publicRooms",data.entries);
  //     setLoading(false);
  //     setRooms(data.entries);
  //     }catch(e){
  //       console.log(e);
  //       setLoading(false);
  //     }
  //   }
  //   foo();
  // },[])

  // const availableRoom = () => {
  //   console.log("all ROOms",rooms);
  //   if(rooms.length === 0){
  //     window.location.href = "https://interality.io/c7Bh9xM/tubbieverse";
  //     return;
  //   }
  //   for (let i = 0; i < rooms.length; i++) {
  //     let room = rooms[i];
  //     if((room.lobby_count + room.member_count) < 60){
  //           console.log("selected room ",room.url)
  //           window.location.href = room.url;
  //           return;
  //           // return room.url;
  //     }
  //   } 
  // }

    // alert("Wait for a while and try again");
    // for(const room in rooms){
    //   console.log("room",room);
    //   if((room.lobby_count + room.member_count) <= 3){
    //     console.log("selected room ",room.url)
    //     return room.url;
    //   }
    // }
  // }
  // const onClick = () => {
  //   const roomLink = availableRoom();
  //   console.log("roomLink",roomLink);
  //   window.location.href = roomLink;
  //   // window.location.href = "https://interality.io/HFwSvX9/tubbieverse";
  // }
  return (
    <div className="App">
      {/* {loading && <button className='enterBtn' disabled>loading...</button>} */}
      {/* {!loading &&  */}
      <button className='enterBtn' onClick={() => {
        window.location.href = "https://interality.io/bZzCLZq/tubbieverse"
      }}>
        Enter TubbieVerse
      </button>
      {/* } */}
    </div>
  );
}

export default App;
