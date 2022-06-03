import classes from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";
import BackgroundImage from "./Wallpapper/BackgroundImage";
import Avatar from "./Avatar/Avatar";

const Profile = (props) => {

    return (
        <div className={classes.content}>
            <BackgroundImage src='https://cdn5.f-cdn.com/contestentries/1533674/20850863/5d2bac5b60bd2_thumb900.jpg'/>
            <MyPosts postData={props.postData}/>
        </div>
    )
}
export default Profile