export function NavItem(props){
    return(
        <div className="nav-item">
          <span className="material-symbols-outlined icon"> {props.icon} </span>
          <span className="nav-text">{props.text}</span>
        </div>
    );
}