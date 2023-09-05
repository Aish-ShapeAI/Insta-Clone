export function FollowBack(props){
    return(
        <div class="profile">
              <img src={props.avatar} alt="Photo"/>
              <div class="title">
                <p class="text-bold">{props.name}</p>
                <p class="text">Follows You</p>
              </div>
            </div>
    );
}