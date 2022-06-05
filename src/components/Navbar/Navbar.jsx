import classes from './Navbar.module.scss';
import NavLinkItem from './NavLinkItem/NavLinkItem';
import SidebarFriends from "./SidebarFriends/SidebarFriends";


const Navbar = (props) => {
    let sideItem = props.state.sideItem.map(s => <NavLinkItem name={s.name} url={s.url}/>)
    let sideFriend = props.state.friends.map(f => <SidebarFriends name={f.name} img={f.img}/>)
    let sliceFriend =sideFriend.slice(0,3);
    return (
        <nav className={classes.nav}>
            <div className={classes.navItem}>
            {sideItem}
            </div>
            <div className={classes.wrapperFriends}>
                <h2 className={classes.friendTitle}>Friends</h2>
                <div className={classes.friends}>
                {sliceFriend}
                </div>
            </div>
        </nav>
    )
}
export default Navbar