    //localStorage    
    let likeCount = parseInt(localStorage.getItem('likeCount')) || 0;
    // let shareCount = parseInt(localStorage.getItem('shareCount')) || 0;

    // sessionstorage
    let commentCount = parseInt(sessionStorage.getItem('commentCount')) || 0;
    let subscribeCount = parseInt(sessionStorage.getItem('subscribeCount')) || 0;

    document.getElementById("likeCount").innerHTML = likeCount;
    // document.getElementById("shareCount").innerHTML = shareCount;
    document.getElementById("commentCount").innerHTML = commentCount;
    document.getElementById("subscribeCount").innerHTML = subscribeCount;


    const handleLikeCount = () => {
        likeCount++; 
        document.getElementById("likeCount").innerHTML = likeCount; 
        localStorage.setItem("likeCount", likeCount);
    }

    // const handleShareCount = () => {
    //     shareCount++; 
    //     document.getElementById("shareCount").innerHTML = shareCount; 
    //     localStorage.setItem("shareCount", shareCount);
    // }

    const handleCommentCount = () => {
        commentCount++; 
        document.getElementById("commentCount").innerHTML = commentCount; 
        sessionStorage.setItem("commentCount", commentCount);
    }

    const handleSubscribeCount = () => {
        subscribeCount++; 
        document.getElementById("subscribeCount").innerHTML = subscribeCount; 
        sessionStorage.setItem("subscribeCount", subscribeCount);
    }

    document.getElementById('shareBtn').addEventListener('click', async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Check out this website!',
                    text: 'I found this amazing website and wanted to share it with you.',
                    url: window.location.href,
                });
                console.log('Successfully shared');
            }
            catch (error) {
                console.error('Error sharing:', error);
            }
        }
        else {
            alert('Web Share API not supported in this browser.');
        }
    });

    document.getElementById("likeBtn").addEventListener("click", handleLikeCount);
    // document.getElementById("shareBtn").addEventListener("click", handleShareCount);
    document.getElementById("commentBtn").addEventListener("click", handleCommentCount);
    document.getElementById("subscribeBtn").addEventListener("click", handleSubscribeCount);

    console.log("likeCount:", likeCount, "shareCount:", shareCount, "commentCount:", commentCount, "subscribeCount:", subscribeCount); 

      