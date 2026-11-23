import { createElement, createDecoration } from '../../utils/dom.js';

function createVisual() {
  const media = createElement('div', {
    classes: ['about__media', 'u-media'],
    attrs: {
      role: 'img',
      'aria-label': 'Wooden console table with a plant and a chair',
    },
  });

  return createElement('div', {
    classes: ['about__visual'],
    children: [
      createDecoration('about__block', 'about__block--left'),
      createDecoration('about__block', 'about__block--right'),
      createDecoration('about__dots', 'about__dots--side'),
      createDecoration('about__dots', 'about__dots--bottom'),
      media,
    ],
  });
}

function createContent() {
  const solid = createElement('span', {
    classes: ['about__title-solid'],
    text: 'About',
  });

  const outline = createElement('span', {
    classes: ['about__title-outline', 'u-outline'],
    text: 'Furniture',
  });

  const title = createElement('h2', {
    classes: ['about__title'],
    attrs: { id: 'about-title' },
    children: [solid, outline],
  });

  const text = createElement('p', {
    classes: ['about__text'],
    text: 'People have been using natural objects, such as tree stumps, rocks and moss, as furniture since the beginning of human civilisation.',
  });

  const button = createElement('a', {
    classes: ['btn', 'about__button'],
    text: 'Read more',
    attrs: { href: '#features' },
  });

  return createElement('div', {
    classes: ['about__content'],
    children: [title, text, button],
  });
}

export function AboutSection() {
  const inner = createElement('div', {
    classes: ['about__inner', 'container'],
    children: [createVisual(), createContent()],
  });

  return createElement('section', {
    classes: ['about'],
    attrs: { id: 'about', 'aria-labelledby': 'about-title' },
    children: [inner],
  });
}
