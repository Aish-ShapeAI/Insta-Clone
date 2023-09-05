export function PostHeader(avatar,name,bio){
    return(
        <div class="header">
            <div class="profile">
              <img
                src={avatar}
                alt="UserName"
              />
              <div class="title">
                <p class="text-bold">{name}</p>
                <p class="text">{bio}</p>
              </div>
            </div>
            <div class="button">
              <span class="material-symbols-outlined"> more_horiz </span>
            </div>
          </div>
    )

}