export function NavItem(props){
    return(
        <div class="nav-item">
          <span class="material-symbols-outlined icon"> {props.icon} </span>
          <span class="nav-text">{props.text}</span>
        </div>
    );
}