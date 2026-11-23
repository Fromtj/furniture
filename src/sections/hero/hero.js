import { createElement, createSvgElement, createDecoration } from '../../utils/dom.js';

function createContent() {
  const eyebrow = createElement('p', {
    classes: ['hero__eyebrow'],
    text: 'DECORATE HOME',
  });

  const title = createElement('h1', {
    classes: ['hero__title'],
    text: 'Feel your home with a modern design space',
    attrs: { id: 'hero-title' },
  });

  const discover = createElement('a', {
    classes: ['btn', 'hero__discover'],
    text: 'Discover',
    attrs: { href: '#about' },
  });

  const playIcon = createSvgElement(
    'svg',
    { width: '10', height: '12', viewBox: '0 0 10 12', fill: 'currentColor' },
    [createSvgElement('path', { d: 'M0 0l10 6-10 6z' })]
  );

  const videoIcon = createElement('span', {
    classes: ['hero__video-icon'],
    attrs: { 'aria-hidden': 'true' },
    children: [playIcon],
  });

  const videoLabel = createElement('span', {
    classes: ['hero__video-label'],
    text: 'Watch video',
  });

  const video = createElement('button', {
    classes: ['hero__video'],
    attrs: { type: 'button' },
    children: [videoIcon, videoLabel],
  });

  const actions = createElement('div', {
    classes: ['hero__actions'],
    children: [discover, video],
  });

  return createElement('div', {
    classes: ['hero__content'],
    children: [eyebrow, title, actions],
  });
}

function createVisual() {
  const media = createElement('div', {
    classes: ['hero__media', 'u-media'],
    attrs: {
      role: 'img',
      'aria-label': 'Modern living room with armchairs and plants',
    },
  });

  return createElement('div', {
    classes: ['hero__visual'],
    children: [
      createDecoration('hero__backdrop'),
      createDecoration('hero__dots'),
      media,
    ],
  });
}

export function HeroSection() {
  const inner = createElement('div', {
    classes: ['hero__inner', 'container'],
    children: [createContent(), createVisual()],
  });

  return createElement('section', {
    classes: ['hero'],
    attrs: { id: 'hero', 'aria-labelledby': 'hero-title' },
    children: [
      createDecoration('hero__accent'),
      createDecoration('hero__grid'),
      inner,
    ],
  });
}
