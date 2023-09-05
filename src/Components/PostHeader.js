export function PostHeader({avatar,name,bio}){
    return(
        <div className="header">
          <a href="https://www.instagram.com" className="profile" target="_blank" rel="noopener noreferrer">
              <img src={avatar} alt="UserName" />
              <div className="title">
                <p className="text-bold">{name}</p>
                <p className="text">{bio}</p>
              </div>
             </a>
            <div className="button">
              <span className="material-symbols-outlined"> more_horiz </span>
            </div>
            </div>
          
    )

}export default PostHeader;