import { createElement, createSvgElement } from '../../utils/dom.js';

const PRODUCTS = [
  {
    name: 'Modern lamp study',
    price: '$258',
    image: 'assets/images/products-floor-lamp.jpg',
    alt: 'Dark grey floor lamp',
    width: '1345',
    height: '2018',
  },
  {
    name: 'Modern lamp study',
    price: '$135',
    image: 'assets/images/products-chair.jpg',
    alt: 'White chair with wooden legs and folded dark blankets',
    width: '1345',
    height: '2018',
  },
  {
    name: 'Classic lamp',
    price: '$425',
    image: 'assets/images/products-classic-lamp.jpg',
    alt: 'Copper geometric pendant lamp',
    width: '1345',
    height: '2018',
  },
  {
    name: 'Clock cute',
    price: '$331',
    image: 'assets/images/products-clock.jpg',
    alt: 'Black twin-bell alarm clock',
    width: '2018',
    height: '1345',
  },
];

const ARROW_POINTS = {
  prev: '8,1 2,7 8,13',
  next: '2,1 8,7 2,13',
};

function createTitle() {
  const solid = createElement('span', {
    classes: ['products__title-solid'],
    text: 'Our you have to buy',
  });

  const outline = createElement('span', {
    classes: ['products__title-outline', 'u-outline'],
    text: 'Product',
  });

  return createElement('h2', {
    classes: ['products__title'],
    attrs: { id: 'products-title' },
    children: [solid, outline],
  });
}

function createArrow(direction, label, onClick) {
  const line = createSvgElement('polyline', {
    points: ARROW_POINTS[direction],
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
  });

  const icon = createSvgElement(
    'svg',
    { width: '10', height: '14', viewBox: '0 0 10 14', 'aria-hidden': 'true' },
    [line],
  );

  const button = createElement('button', {
    classes: ['products__arrow'],
    attrs: { type: 'button', 'aria-label': label },
    children: [icon],
  });

  button.addEventListener('click', onClick);
  return button;
}

function createCard({ name, price, image, alt, width, height }) {
  const picture = createElement('img', {
    classes: ['products__image'],
    attrs: { src: image, alt, width, height, loading: 'lazy' },
  });

  const title = createElement('h3', {
    classes: ['products__name'],
    text: name,
  });

  const cost = createElement('p', {
    classes: ['products__price'],
    text: price,
  });

  return createElement('li', {
    classes: ['products__card'],
    children: [picture, title, cost],
  });
}

export function ProductsSection() {
  const list = createElement('ul', {
    classes: ['products__list'],
    children: PRODUCTS.map(createCard),
  });

  const showPrevious = () => list.prepend(list.lastElementChild);
  const showNext = () => list.append(list.firstElementChild);

  const controls = createElement('div', {
    classes: ['products__controls'],
    children: [
      createArrow('prev', 'Previous product', showPrevious),
      createArrow('next', 'Next product', showNext),
    ],
  });

  const head = createElement('div', {
    classes: ['products__head'],
    children: [createTitle(), controls],
  });

  const inner = createElement('div', {
    classes: ['products__inner', 'container'],
    children: [head, list],
  });

  return createElement('section', {
    classes: ['products'],
    attrs: { id: 'products', 'aria-labelledby': 'products-title' },
    children: [inner],
  });
}
