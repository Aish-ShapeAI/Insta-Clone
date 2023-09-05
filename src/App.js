import './App.css';
import logo from './Components/fontbolt.png'
import { NavItem } from "./Components/NavItem";
import { FollowBack } from "./Components/FollowBack";
import { Post } from "./Components/Post";

function App() {

  const followersList=[
    {avatar:"https://randomuser.me/api/portraits/women/67.jpg",name:"Bridget Von Ascheberg",},
    {avatar:"https://randomuser.me/api/portraits/women/34.jpg", name:"Jules Ambrose",},
    {avatar:"https://th.bing.com/th/id/OIP.6QxZgfMe1rnyuhuR35YXrgAAAA?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7tps://randomuser.me/api/portraits/men/26.jpg",name:"Alex Volkov",},
    {avatar:"https://th.bing.com/th/id/OIP.CkbmfNuiYyXAjkOIrgsStQAAAA?w=215&h=215&c=7&r=0&o=5&dpr=1.3&pid=1.7",name:"Christian Harper",},
    {avatar:"https://randomuser.me/api/portraits/women/22.jpg", name:"Ava Chen",},
    {avatar:"https://i.pinimg.com/originals/43/cc/52/43cc52bae27cd017277a915918f6a905.jpg" ,name:"Josh Chen",},
    {avatar:"https://th.bing.com/th/id/OIP.u_6K492_PzjS1aJizWWwKgHaHa?w=199&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7" ,name:"Rhys Larsen",},
    {avatar:"https://randomuser.me/api/portraits/women/82.jpg" ,name:"Stella Alonso",},
    {avatar:"https://th.bing.com/th/id/OIP.uY81SMokKSLdbpU8EgB_NQHaHP?w=186&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7" ,name:"Zade Meadows"},
    {avatar:"https://randomuser.me/api/portraits/women/46.jpg" ,name:"Adeline Reilly",},
  ];

  const Posts=[
    {postMediaLink:"https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60", 
    postMeta:"Bulb" , avatar:"https://randomuser.me/api/portraits/women/67.jpg" , name:"Bridget Von Ascheberg" , bio:"I'm the Queen of Eldorra" ,},
    {postMediaLink:"https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60 " , 
    postMeta:"Airplane" , avatar:"https://randomuser.me/api/portraits/women/34.jpg" , name:"Jules Ambrose" , bio:"Im a Lawyer",},
    {postMediaLink:"https://images.unsplash.com/photo-1550686041-366ad85a1355?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60 " , 
    postMeta:"Vacation" , avatar:"https://th.bing.com/th/id/OIP.6QxZgfMe1rnyuhuR35YXrgAAAA?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7tps://randomuser.me/api/portraits/men/26.jpg" , name:"Alex Volkov" , bio:"Im a Businessman",},
    {postMediaLink:"https://media.istockphoto.com/id/1007640192/photo/two-paper-boats-in-monsoon-in-water-puddle.jpg?s=612x612&w=0&k=20&c=UWI6cxICBQTiirNAi9iNz2n7Yq9nY6eMH4i26bFTFGA=" , 
    postMeta:"The Pony" , avatar:"https://th.bing.com/th/id/OIP.CkbmfNuiYyXAjkOIrgsStQAAAA?w=215&h=215&c=7&r=0&o=5&dpr=1.3&pid=1.7" , name:"Christian Harper" , bio:"Im a Businessman" ,},
    {postMediaLink:"https://media.istockphoto.com/id/468906855/photo/enjoying-the-fresh-sea-air.jpg?s=612x612&w=0&k=20&c=-QGjYcFqz0Kabn-J6vxngTYQHP1MmlVzkiZmRyev3mA= " , 
    postMeta:"Life's Beautiful" , avatar:"https://randomuser.me/api/portraits/women/22.jpg" , name:"Ava Chen" , bio:"Im a Student" ,},
    {postMediaLink:"https://media.istockphoto.com/id/1135489659/photo/dogs-under-blanket-together.jpg?s=612x612&w=0&k=20&c=cUB1gAaYKMgRDoJ9_xEKDfQCzP52oUgAdyOZQ7-bRBE= " , 
    postMeta:"Dog Love" , avatar:"https://i.pinimg.com/originals/43/cc/52/43cc52bae27cd017277a915918f6a905.jpg" , name:"Josh Chen" , bio:"Im a Doctor" ,},
  ];
  return (
    <div className="container">

      <div className="side-bar"> 
        <img src={logo} width="170" alt="Logo" />
        <div>
           <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <NavItem icon="home" text="Home" link=""></NavItem></a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <NavItem icon="search" text="Search" link=""></NavItem></a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <NavItem icon="explore" text="Explore" link=""></NavItem></a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <NavItem icon="video_library" text="Reels" link=""></NavItem></a>
          <a href="https://www.chatgpt.com" target="_blank" rel="noopener noreferrer">
          <NavItem icon="chat" text="Messages" link=""></NavItem></a>
          <a href="https://www.chatgpt.com" target="_blank" rel="noopener noreferrer">
          <NavItem icon="favorite" text="Notifications" link=""></NavItem></a>
          <a href="https://www.instram.com" target="_blank" rel="noopener noreferrer">
          <NavItem icon="add_circle" text="Create" link=""></NavItem></a>
          <a href="/https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <NavItem icon="account_circle" text="Profile" link=""></NavItem></a>
        </div>
      </div>



      <div className="main-content">
        {Posts.map((post,i)=>{return <Post  postMediaLink={post.postMediaLink}
            postMeta={post.postMeta}
            avatar={post.avatar}
            name={post.name}
            bio={post.bio} key={i}></Post>;})}
      </div>



      <div className="right-side-bar">
        {followersList.map((follower,i)=>{return (<FollowBack avatar={follower.avatar} name={follower.name}key={i}></FollowBack>)},)}
        {/*
        <FollowBack avatar="https://randomuser.me/api/portraits/women/67.jpg" name="Bridget Von Ascheberg"></FollowBack>
        <FollowBack avatar="https://randomuser.me/api/portraits/women/34.jpg" name="Jules Ambrose"></FollowBack>
        <FollowBack avatar="https://th.bing.com/th/id/OIP.6QxZgfMe1rnyuhuR35YXrgAAAA?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7tps://randomuser.me/api/portraits/men/26.jpg" name="Alex Volkov"></FollowBack>
        <FollowBack avatar="https://th.bing.com/th/id/OIP.CkbmfNuiYyXAjkOIrgsStQAAAA?w=215&h=215&c=7&r=0&o=5&dpr=1.3&pid=1.7" name="Christian Harper"></FollowBack>
        <FollowBack avatar="https://randomuser.me/api/portraits/women/22.jpg" name="Ava Chen"></FollowBack>
        <FollowBack avatar="https://i.pinimg.com/originals/43/cc/52/43cc52bae27cd017277a915918f6a905.jpg" name="Josh Chen"></FollowBack>
        <FollowBack avatar="https://th.bing.com/th/id/OIP.u_6K492_PzjS1aJizWWwKgHaHa?w=199&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7" name="Rhys Larsen"></FollowBack>
        <FollowBack avatar="https://randomuser.me/api/portraits/women/82.jpg" name="Stella Alonso"></FollowBack>
        <FollowBack avatar="https://th.bing.com/th/id/OIP.T5kKvSwr7KsfHGvONRy_QwAAAA?w=186&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" name="Zade Meadows"></FollowBack>
        <FollowBack avatar="https://randomuser.me/api/portraits/women/46.jpg" name="Adeline Reilly"></FollowBack>
      */}
      </div>
    </div>
  );
}

export default App;
