import { createElement, createDecoration } from '../../utils/dom.js';

const FEATURES = [
  {
    modifier: 'one',
    number: '1',
    title: 'Full services',
    text: 'Provide the best service and very fast response.',
  },
  {
    modifier: 'two',
    number: '2',
    title: 'Long warranty.',
    text: 'With a 5-year warranty provided, providing satisfying service.',
  },
  {
    modifier: 'three',
    number: '3',
    title: 'Modern design',
    text: 'The room looks beautiful with a blend of contemporary and attractive design.',
  },
];

function createTitle() {
  const solid = createElement('span', {
    classes: ['features__title-solid'],
    text: 'More value from this',
  });

  const outline = createElement('span', {
    classes: ['features__title-outline', 'u-outline'],
    text: 'Furniture',
  });

  return createElement('h2', {
    classes: ['features__title'],
    attrs: { id: 'features-title' },
    children: [solid, outline],
  });
}

function createCard({ modifier, number, title, text }) {
  const badge = createElement('span', {
    classes: ['features__number'],
    text: number,
    attrs: { 'aria-hidden': 'true' },
  });

  const heading = createElement('h3', {
    classes: ['features__card-title'],
    text: title,
  });

  const description = createElement('p', {
    classes: ['features__card-text'],
    text,
  });

  return createElement('li', {
    classes: ['features__card', `features__card--${modifier}`],
    children: [badge, heading, description],
  });
}

function createVisual() {
  const image = createElement('img', {
    classes: ['features__image'],
    attrs: {
      src: 'assets/images/features-room.jpg',
      alt: 'Living room with a white sofa, blue cushions, two lamps and a framed painting',
      width: '2018',
      height: '1345',
      loading: 'lazy',
    },
  });

  const cards = createElement('ul', {
    classes: ['features__cards'],
    children: FEATURES.map(createCard),
  });

  return createElement('div', {
    classes: ['features__visual'],
    children: [createDecoration('features__dots'), image, cards],
  });
}

export function FeaturesSection() {
  const inner = createElement('div', {
    classes: ['features__inner', 'container'],
    children: [createTitle(), createVisual()],
  });

  return createElement('section', {
    classes: ['features'],
    attrs: { id: 'features', 'aria-labelledby': 'features-title' },
    children: [inner],
  });
}
