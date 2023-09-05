export function PostMedia({postMediaLink,postMeta}){
    return(
         <div className="post">
            <img src={postMediaLink} alt={postMeta}/>
        </div>
    );
}export default PostMedia;