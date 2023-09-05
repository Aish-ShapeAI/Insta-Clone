export function FollowBack(props){
      return(
        <a href="https://www.instagram.com" className="profile" target="_blank" rel="noopener noreferrer" >
              <img src={props.avatar} alt="Photo"/>
              <div className="title">
                <p className="text-bold">{props.name}</p>
                <p className="text">Follows You</p>
              </div>
            </a>
    );
}export default FollowBack;

