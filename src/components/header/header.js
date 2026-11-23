import { createElement, createSvgElement } from '../../utils/dom.js';

const navItems = [
  { text: 'Home', href: '#hero' },
  { text: 'About', href: '#about' },
  { text: 'Collection', href: '#features' },
  { text: 'Shop', href: '#products' },
];

function createIcon(size, shapes) {
  return createSvgElement(
    'svg',
    {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'aria-hidden': 'true',
    },
    shapes
  );
}

function createIconButton(label, icon) {
  return createElement('button', {
    classes: ['site-header__icon-btn'],
    attrs: { type: 'button', 'aria-label': label },
    children: [icon],
  });
}

function createNav() {
  const items = navItems.map(({ text, href }) => {
    const link = createElement('a', {
      classes: ['site-header__link'],
      text,
      attrs: { href },
    });
    return createElement('li', { children: [link] });
  });

  const list = createElement('ul', { classes: ['site-header__list'], children: items });

  return createElement('nav', {
    classes: ['site-header__nav'],
    attrs: { id: 'site-nav', 'aria-label': 'Main navigation' },
    children: [list],
  });
}

function createActions() {
  const cartIcon = createIcon('18', [
    createSvgElement('path', { d: 'M5 8h14l-1 12H6L5 8z' }),
    createSvgElement('path', { d: 'M9 8V6a3 3 0 0 1 6 0v2' }),
  ]);
  const searchIcon = createIcon('20', [
    createSvgElement('circle', { cx: '11', cy: '11', r: '7' }),
    createSvgElement('path', { d: 'm20 20-3.5-3.5' }),
  ]);

  const toggle = createElement('button', {
    classes: ['site-header__toggle'],
    attrs: {
      type: 'button',
      'aria-label': 'Toggle menu',
      'aria-expanded': 'false',
      'aria-controls': 'site-nav',
    },
    children: [
      document.createElement('span'),
      document.createElement('span'),
      document.createElement('span'),
    ],
  });

  return createElement('div', {
    classes: ['site-header__actions'],
    children: [
      createIconButton('Cart', cartIcon),
      createIconButton('Search', searchIcon),
      toggle,
    ],
  });
}

export function Header() {
  const logo = createElement('a', {
    classes: ['site-header__logo'],
    text: 'Furniutr.',
    attrs: { href: '#hero', 'aria-label': 'Furniutr. — home' },
  });

  const inner = createElement('div', {
    classes: ['site-header__inner', 'container'],
    children: [logo, createNav(), createActions()],
  });

  return createElement('header', {
    classes: ['site-header'],
    attrs: { id: 'top' },
    children: [inner],
  });
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
