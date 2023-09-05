import { PostFooter } from "./PostFooter";
import { PostHeader } from "./PostHeader";
import { PostMedia } from "./PostMedia";
export function Post({postMediaLink,postMeta,avatar,name,bio}){
    return(
        <div className="card">
            <PostHeader avatar={avatar} name={name} bio={bio}></PostHeader>
            <PostMedia postMediaLink={postMediaLink} postMeta={postMeta}></PostMedia>
            <PostFooter></PostFooter>
        </div>
    );
}export default Post;