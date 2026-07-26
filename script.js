// Elements
const feed = document.getElementById("feed");
const reels = document.querySelectorAll(".reel");
const videos = document.querySelectorAll(".video");

// ---------- Autoplay ----------
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        const video = entry.target.querySelector("video");

        if (!video) return;

        if (entry.isIntersecting) {

            document.querySelectorAll("video").forEach(v => {
                if (v !== video) {
                    v.pause();
                    v.currentTime = 0;
                }
            });

            video.play().catch(()=>{});

        } else {

            video.pause();

        }

    });

},{
    threshold:0.7
});

reels.forEach(reel=>observer.observe(reel));

// ---------- Double Tap Like ----------
reels.forEach(reel=>{

    let lastTap = 0;

    reel.addEventListener("click",(e)=>{

        const now = Date.now();

        if(now-lastTap<300){

            likeAnimation(reel);

            const btn = reel.querySelector(".like-btn");

            if(btn){

                btn.classList.add("active");

                btn.innerHTML=`
                    <i class="fa-solid fa-heart"></i>
                    <span>Liked</span>
                `;

            }

        }

        lastTap = now;

    });

});

// ---------- Heart Animation ----------
function likeAnimation(reel){

    const heart=document.createElement("div");

    heart.className="heart-animation";

    heart.innerHTML='<i class="fa-solid fa-heart"></i>';

    reel.appendChild(heart);

   
