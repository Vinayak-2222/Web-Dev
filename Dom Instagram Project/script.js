const reels = [
  {
    isMuted:true,
    username: "tech_world",
    likeCount: 1520,
    isLiked: false,
    commentCount: 120,
    caption: "10 JavaScript tricks every developer should know 🚀",
    video: "./reels/video1.mp4",
    userprofile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 48,
    isFollowed: true
  },
  {
    isMuted:true,
    username: "fit_india",
    likeCount: 890,
    isLiked: true,
    commentCount: 54,
    caption: "Morning fitness for a healthy life 💪",
    video: "./reels/video2.mp4",
    userprofile: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 22,
    isFollowed: false
  },
  {
    isMuted:true,
    username: "foodie_adda",
    likeCount: 2340,
    isLiked: true,
    commentCount: 180,
    caption: "Best street food in Bangalore 🤤",
    video: "./reels/video3.mp4",
    userprofile: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 110,
    isFollowed: true
  },
  {
    isMuted:true,
    username: "travel_boy",
    likeCount: 3100,
    isLiked: true,
    commentCount: 240,
    caption: "Solo trip to Manali 🏔️",
    video: "./reels/video4.mp4",
    userprofile: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 190,
    isFollowed: false
  },
  {
    isMuted:true,
    username: "code_with_raj",
    likeCount: 670,
    isLiked: false,
    commentCount: 36,
    caption: "Understanding closures in JavaScript in 1 min ⚡",
    video: "./reels/video5.mp4",
    userprofile: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 18,
    isFollowed: true
  },
  {
    isMuted:true,
    username: "dance_fever",
    likeCount: 4200,
    isLiked: true,
    commentCount: 310,
    caption: "New trending hook step 🔥",
    video: "./reels/video6.mp4",
    userprofile: "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 270,
    isFollowed: true
  },
  {
    isMuted:true,
    username: "daily_motivation",
    likeCount: 980,
    isLiked: false,
    commentCount: 65,
    caption: "Dream big, work harder 💯",
    video: "./reels/video7.mp4",
    userprofile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 34,
    isFollowed: false
  },
  {
    isMuted:true,
    username: "gamer_pro",
    likeCount: 5100,
    isLiked: true,
    commentCount: 420,
    caption: "Unbelievable last-second win 🎮",
    video: "./reels/video8.mp4",
    userprofile: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 350,
    isFollowed: true
  },
  {
    isMuted:true,
    username: "artistic_soul",
    likeCount: 1180,
    isLiked: false,
    commentCount: 92,
    caption: "From blank page to masterpiece 🎨",
    video: "./reels/video9.mp4",
    userprofile: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 58,
    isFollowed: false
  },
  {
    isMuted:true,
    username: "study_vibes",
    likeCount: 1650,
    isLiked: true,
    commentCount: 145,
    caption: "Late night study session motivation 📚",
    video: "./reels/video10.mp4",
    userprofile: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 105,
    isFollowed: true
  }
];
var allReels=document.querySelector('.all-reels')


function addData(){
  var sum=''
reels.forEach(function(elem,idx){
    sum=sum+`<div class="reels">
                    <video autoplay loop ${elem.isMuted?'muted':''} src="${elem.video}"></video>
                     <div class="mute" id=${idx}>
                     ${elem.isMuted?'<i class="ri-volume-mute-fill"></i>':'<i class="ri-volume-up-line"></i>'} 
                
         </div>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userprofile}" alt="">
                            <h4>${elem.username}</h4>
                            <button id=${idx} class='follow' >${elem.isFollowed?'Unfollow':'Follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div id=${idx} class="like">
                            <h4 class="like-icon icon">${elem.isLiked?'<i class="love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                         <div class="comment">
                            <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i> </h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                         <div class="share">
                            <h4 class="share-icon icon"><i class="ri-share-forward-line"></i> </h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i> </h4>
                        </div>
                    </div>
                    
                </div>`

})

allReels.innerHTML=sum
}
addData()
allReels.addEventListener('click',function(dets){
  if(dets.target.className =='like'){
    if(!reels[dets.target.id].isLiked){
    reels[dets.target.id].likeCount++;
    reels[dets.target.id].isLiked=true;
  }else{
    reels[dets.target.id].likeCount--;
    reels[dets.target.id].isLiked=false;
  }
  addData()
}
 if(dets.target.className=='follow'){
    if(!reels[dets.target.id].isFollowed){
    reels[dets.target.id].isFollowed=true;
  }else{
    reels[dets.target.id].isFollowed=false;
  }
  addData()
}
 if(dets.target.className=='mute'){
    if(!reels[dets.target.id].isMuted){
    reels[dets.target.id].isMuted=true;
  }else{
    reels[dets.target.id].isMuted=false;
  }
  addData()
}

})
