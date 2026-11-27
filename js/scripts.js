// ResumeTemplate v1.0 ClearCareer
// url: clearcareer.ca
// by: Iskender Piyale-Sheard
// website: izzydoesizzy.com
// Created 06-27-2016
 

// Smooth Scroll Function
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



// CV dropdown toggle (fixed panel; escapes nav overflow clipping)
(function () {
  function closeAll(except) {
    document.querySelectorAll('.cv-drop').forEach(function (d) {
      if (d !== except) {
        d.hidden = true;
        var t = d.parentNode.querySelector('.cv-drop-toggle');
        if (t) t.setAttribute('aria-expanded', 'false');
      }
    });
  }
  document.addEventListener('click', function (e) {
    var t = e.target.closest('.cv-drop-toggle');
    if (t) {
      e.preventDefault();
      var d = t.parentNode.querySelector('.cv-drop');
      var open = d.hidden;
      closeAll(d);
      if (open) {
        var r = t.getBoundingClientRect();
        d.style.top = (r.bottom + 6) + 'px';
        if ((document.documentElement.dir || '').toLowerCase() === 'rtl') {
          d.style.right = Math.max(8, window.innerWidth - r.right) + 'px';
          d.style.left = 'auto';
        } else {
          d.style.left = Math.max(8, r.left) + 'px';
          d.style.right = 'auto';
        }
      }
      d.hidden = !open;
      t.setAttribute('aria-expanded', open ? 'true' : 'false');
      return;
    }
    if (!e.target.closest('.cv-drop')) closeAll(null);
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeAll(null); });
})();
