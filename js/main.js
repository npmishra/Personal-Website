// basic interactions: mobile menu, year, simple contact form success, animate bars
document.addEventListener('DOMContentLoaded', function(){
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  if(navToggle && nav){
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      if(nav.classList.contains('open')){
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.background = 'white';
        nav.style.padding = '12px';
        nav.style.borderRadius = '10px';
      } else {
        nav.style.display = '';
      }
    });
  }

  const bars = document.querySelectorAll('.bar span');
  if(bars.length){
    bars.forEach((b, i) => {
      const target = b.getAttribute('data-width') || b.style.width || '80%';
      setTimeout(()=> b.style.width = target, 300 + i*150);
    });
  }

  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      const btn = this.querySelector('button[type="submit"]');
      btn.textContent = 'Sending...';
      setTimeout(()=>{
        btn.textContent = 'Send Message';
        const msg = document.getElementById('formMsg');
        if(msg){ msg.textContent = 'Thanks — your message was sent (demo). I will contact you shortly!'; }
        contactForm.reset();
      }, 900);
    });
  }
});
