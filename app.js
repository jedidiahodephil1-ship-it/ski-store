const revealTargets=document.querySelectorAll(".system-card,.principles article,.products article");
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")})},{threshold:.12});
revealTargets.forEach(e=>{e.classList.add("reveal");observer.observe(e)});