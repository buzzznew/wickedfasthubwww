/* ===========================
   INSTALL BUTTON
=========================== */

const installBtn = document.getElementById("installBtn");

installBtn.addEventListener("click", () => {

    installBtn.innerHTML = "Installing...";
    installBtn.disabled = true;

    showToast("Preparing download...");

    setTimeout(() => {

        installBtn.innerHTML = "Installed ✓";
        installBtn.style.background = "#27ae60";

        // Redirect example
        // window.location.href="https://your-link.com";

    },2000);

});

/* ===========================
   SHARE
=========================== */

const shareBtn = document.querySelector(".share");

shareBtn.onclick = async () => {

    if(navigator.share){

        try{

            await navigator.share({

                title:"Proxy Browser",

                text:"Check out this app!",

                url:location.href

            });

        }catch(e){}

    }else{

        navigator.clipboard.writeText(location.href);

        showToast("Link copied");

    }

};

/* ===========================
   STORY CLICK
=========================== */

document.querySelectorAll(".story").forEach(story=>{

    story.onclick=()=>{

        story.style.transform="scale(.9)";

        setTimeout(()=>{

            story.style.transform="scale(1)";

        },180);

        showToast(story.innerText);

    }

});

/* ===========================
   TAB SWITCH
=========================== */

const tabs=document.querySelectorAll(".tab");

tabs.forEach(tab=>{

    tab.onclick=()=>{

        tabs.forEach(t=>t.classList.remove("active"));

        tab.classList.add("active");

        showToast(tab.innerText);

    }

});

/* ===========================
   LIKE BUTTONS
=========================== */

document.querySelectorAll(".actions button").forEach(btn=>{

    btn.onclick=()=>{

        const icon=btn.querySelector("i");

        if(icon.classList.contains("fa-heart")){

            icon.classList.remove("fa-regular");

            icon.classList.add("fa-solid");

            icon.style.color="#ff204f";

        }

    }

});

/* ===========================
   COUNTER ANIMATION
=========================== */

function animateValue(id,end){

    const el=document.getElementById(id);

    if(!el) return;

    let start=0;

    const timer=setInterval(()=>{

        start+=Math.ceil(end/80);

        if(start>=end){

            start=end;

            clearInterval(timer);

        }

        if(end>=1000000){

            el.innerHTML=(start/1000000).toFixed(1)+"M";

        }else{

            el.innerHTML=(start/1000).toFixed(0)+"K";

        }

    },20);

}

animateValue("likes",1800000);

animateValue("downloads",2000000);

/* ===========================
   DARK MODE
=========================== */

let dark=false;

document.addEventListener("keydown",(e)=>{

    if(e.key.toLowerCase()=="d"){

        dark=!dark;

        if(dark){

            document.body.style.background="#101010";

            document.querySelector(".page").style.background="#181818";

            document.querySelectorAll("*").forEach(el=>{

                el.style.color="#fff";

            });

        }else{

            location.reload();

        }

    }

});

/* ===========================
   SCROLL ANIMATION
=========================== */

const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition=".5s";

observer.observe(card);

});

/* ===========================
   TOAST
=========================== */

const toast=document.createElement("div");

toast.style.position="fixed";
toast.style.bottom="30px";
toast.style.left="50%";
toast.style.transform="translateX(-50%)";
toast.style.background="#111";
toast.style.color="#fff";
toast.style.padding="12px 20px";
toast.style.borderRadius="40px";
toast.style.opacity="0";
toast.style.transition=".3s";
toast.style.zIndex="9999";

document.body.appendChild(toast);

function showToast(text){

toast.innerHTML=text;

toast.style.opacity="1";

setTimeout(()=>{

toast.style.opacity="0";

},1800);

}

/* ===========================
   MENU BUTTON
=========================== */

document.querySelector(".menu-btn").onclick=()=>{

showToast("Menu clicked");

};

/* ===========================
   PAGE LOADED
=========================== */

window.onload=()=>{

showToast("Welcome 👋");

};
