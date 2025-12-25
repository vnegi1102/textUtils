import React, {useState} from "react";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleLike =()=>{
    if(liked){
      setLikes (likes- 1);
      setLiked(false);
    }else{
      setLikes (likes + 1);
      setLiked(true);
    }
  };
  return (
    <div>
    <button onClick={handleLike} style={{padding:"10px 20px", backgroundColor: liked ? "red" : "lightgray", color: "white", border: "none", borderRadius: "8px", cursor: "pointer"}}>Like {likes}</button>  
    </div>
  )
}