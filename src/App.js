import './App.css';
import { Logo } from "./Logo";
import { NavItem } from "./NavItem";
import { FollowBack } from "./FollowBack";
import { Post } from "./Post";

function App() {
  const followersList=[
    {avatar:"https://randomuser.me/api/portraits/women/67.jpg",name:"Bridget Von Ascheberg",},
    {avatar:"https://randomuser.me/api/portraits/women/34.jpg", name:"Jules Ambrose",},
    {avatar:"https://th.bing.com/th/id/OIP.6QxZgfMe1rnyuhuR35YXrgAAAA?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7tps://randomuser.me/api/portraits/men/26.jpg",name:"Alex Volkov"},
    {avatar:"https://th.bing.com/th/id/OIP.CkbmfNuiYyXAjkOIrgsStQAAAA?w=215&h=215&c=7&r=0&o=5&dpr=1.3&pid=1.7",name:"Christian Harper"},
    {avatar:"https://randomuser.me/api/portraits/women/22.jpg", name:"Ava Chen"},
    {avatar:"https://i.pinimg.com/originals/43/cc/52/43cc52bae27cd017277a915918f6a905.jpg" ,name:"Josh Chen"},
    {avatar:"https://th.bing.com/th/id/OIP.u_6K492_PzjS1aJizWWwKgHaHa?w=199&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7" ,name:"Rhys Larsen"},
    {avatar:"https://randomuser.me/api/portraits/women/82.jpg" ,name:"Stella Alonso"},
    {avatar:"https://th.bing.com/th/id/OIP.uY81SMokKSLdbpU8EgB_NQHaHP?w=186&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7" ,name:"Zade Meadows"},
    {avatar:"https://randomuser.me/api/portraits/women/46.jpg" ,name:"Adeline Reilly"},
  ];
  return (
    <div className="container">

      <div className="side-bar"> 
        <Logo></Logo>
        <div>
          <NavItem icon="home" text="Home" link=""></NavItem>
          <NavItem icon="search" text="Search" link=""></NavItem>
          <NavItem icon="explore" text="Explore" link=""></NavItem>
          <NavItem icon="video_library" text="Reels" link=""></NavItem>
          <NavItem icon="chat" text="Messages" link=""></NavItem>
          <NavItem icon="favorite" text="Notifications" link=""></NavItem>
          <NavItem icon="add_circle" text="Create" link=""></NavItem>
          <NavItem icon="account_circle" text="Profile" link=""></NavItem>
        </div>
      </div>



      <div className="main-content">
        <Post></Post>
      </div>


      
      <div className="right-side-bar">
        {followersList.map((follower)=><FollowBack avatar={follower.avatar} name={follower.name}></FollowBack>)}
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
