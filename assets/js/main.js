document.addEventListener('DOMContentLoaded', function() {
  var toggle = document.getElementById('mobile-toggle');
  var drawer = document.getElementById('mobile-drawer');
  var overlay = document.getElementById('drawer-overlay');
  var closeBtn = document.getElementById('drawer-close');

  function openMenu() {
    if (drawer) drawer.classList.add('open');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    if (drawer) drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (toggle) toggle.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);
});