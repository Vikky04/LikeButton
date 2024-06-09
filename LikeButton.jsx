import { useState } from "react";
export default function LikeButton(){
    let [isliked,setisLiked]=useState(false);
    let togglelike=()=>{
         let newval=!isliked;
         setisLiked(newval);
    }
    let styles={color:"red"};
    return (<div>
            <p onClick={togglelike}> {
                   isliked ? (<i className="fa-solid fa-heart" style={styles}></i>) : (<i className="fa-regular fa-heart"></i>)
                }
           </p>
    </div>);
}