export function Header() {
  return `
    <header class="site-header" id="top">
      <div class="site-header__inner container">
        <a class="site-header__logo" href="#hero" aria-label="Furniutr. — home">Furniutr.</a>

        <nav class="site-header__nav" id="site-nav" aria-label="Main navigation">
          <ul class="site-header__list">
            <li><a class="site-header__link" href="#hero">Home</a></li>
            <li><a class="site-header__link" href="#about">About</a></li>
            <li><a class="site-header__link" href="#features">Collection</a></li>
            <li><a class="site-header__link" href="#products">Shop</a></li>
          </ul>
        </nav>

        <div class="site-header__actions">
          <button class="site-header__icon-btn" type="button" aria-label="Cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M5 8h14l-1 12H6L5 8z" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" />
            </svg>
          </button>
          <button class="site-header__icon-btn" type="button" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </button>
          <button
            class="site-header__toggle"
            type="button"
            aria-label="Toggle menu"
            aria-expanded="false"
            aria-controls="site-nav"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  `;
}

function initHeader() {
  const toggle = document.querySelector('.site-header__toggle');
  const header = document.querySelector('.site-header');
  const nav = document.getElementById('site-nav');
  if (!toggle || !header || !nav) return;

  const setOpen = (open) => {
    header.classList.toggle('site-header--open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };

  toggle.addEventListener('click', () => {
    setOpen(!header.classList.contains('site-header--open'));
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });
}

document.addEventListener('page:rendered', initHeader);
