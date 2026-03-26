(function () {
  var buttons = document.querySelectorAll('.theme-btn');
  var current = document.documentElement.dataset.theme || 'grey';

  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
    buttons.forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.themeSet === theme);
    });
  }

  setTheme(current);

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      setTheme(btn.dataset.themeSet);
    });
  });
})();
