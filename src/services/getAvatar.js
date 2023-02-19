function randomAvatar(){
    const number=Math.floor(Math.random()*5)
    const background="/avatars/"+number+".png"
    
     return(
    `url(${background})` 
     )
    }

    export default randomAvatar;