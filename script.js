  // Mobile menu toggle
  document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.remove('hidden');
});
document.getElementById('close-menu').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.add('hidden');
});