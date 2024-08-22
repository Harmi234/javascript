    //localStorage    
    let likeCount = parseInt(localStorage.getItem('likeCount')) || 0;
    let shareCount = parseInt(localStorage.getItem('shareCount')) || 0;

    // sessionstorage
    let commentCount = parseInt(sessionStorage.getItem('commentCount')) || 0;
    let subscribeCount = parseInt(sessionStorage.getItem('subscribeCount')) || 0;

    document.getElementById("likeCount").textContent = likeCount;
    document.getElementById("shareCount").textContent = shareCount;
    document.getElementById("commentCount").textContent = commentCount;
    document.getElementById("subscribeCount").textContent = subscribeCount;


    const handleLikeCount = () => {
        likeCount++; 
        document.getElementById("likeCount").textContent = likeCount; 
        localStorage.setItem("likeCount", likeCount);
    }

    const handleShareCount = () => {
        shareCount++; 
        document.getElementById("shareCount").textContent = shareCount; 
        localStorage.setItem("shareCount", shareCount);
    }

    const handleCommentCount = () => {
        commentCount++; 
        document.getElementById("commentCount").textContent = commentCount; 
        sessionStorage.setItem("commentCount", commentCount);
    }

    const handleSubscribeCount = () => {
        subscribeCount++; 
        document.getElementById("subscribeCount").textContent = subscribeCount; 
        sessionStorage.setItem("subscribeCount", subscribeCount);
    }

    document.getElementById("likeBtn").addEventListener("click", handleLikeCount);
    document.getElementById("shareBtn").addEventListener("click", handleShareCount);
    document.getElementById("commentBtn").addEventListener("click", handleCommentCount);
    document.getElementById("subscribeBtn").addEventListener("click", handleSubscribeCount);

    console.log("likeCount:", likeCount, "shareCount:", shareCount, "commentCount:", commentCount, "subscribeCount:", subscribeCount); 

      