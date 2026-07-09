const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{ if(entry.isIntersecting) entry.target.classList.add('show'); });
},{threshold:0.12});
document.querySelectorAll('.section,.card,.day-card,.mini-card').forEach(el=>{el.classList.add('reveal');observer.observe(el)});
