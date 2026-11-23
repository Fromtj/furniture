import { createElement } from '../../utils/dom.js';

const serviceLinks = [
  { text: 'Collection', href: '#features' },
  { text: 'How its work', href: '#features' },
  { text: 'Estimats', href: '#features' },
];

const companyLinks = [
  { text: 'Terms of use', href: '#top' },
  { text: 'Privacy policy', href: '#top' },
  { text: 'Careers', href: '#top' },
];

const contactLinks = [
  { text: 'Furniutr2@furniture.com', href: 'mailto:Furniutr2@furniture.com' },
  { text: '(888) 315-500', href: 'tel:+1888315500' },
  { text: 'St. Village, New York' },
];

function createTitle(text) {
  return createElement('h3', { classes: ['site-footer__title'], text });
}

function createLink({ text, href }) {
  if (!href) {
    return createElement('address', {
      classes: ['site-footer__link', 'site-footer__address'],
      text,
    });
  }
  return createElement('a', {
    classes: ['site-footer__link'],
    text,
    attrs: { href },
  });
}

function createColumn(title, links) {
  const items = links.map((link) => createElement('li', { children: [createLink(link)] }));
  const list = createElement('ul', { classes: ['site-footer__list'], children: items });

  return createElement('div', {
    classes: ['site-footer__col'],
    children: [createTitle(title), list],
  });
}

function createDiscountColumn() {
  return createElement('div', {
    classes: ['site-footer__col'],
    children: [
      createTitle("Get's your discount"),
      createLink({ text: 'Check now !', href: '#top' }),
    ],
  });
}

export function Footer() {
  const grid = createElement('div', {
    classes: ['site-footer__grid'],
    children: [
      createDiscountColumn(),
      createColumn('Our services', serviceLinks),
      createColumn('Company', companyLinks),
      createColumn('Contact', contactLinks),
    ],
  });

  const inner = createElement('div', {
    classes: ['site-footer__inner', 'container'],
    children: [grid],
  });

  return createElement('footer', {
    classes: ['site-footer'],
    children: [inner],
  });
}
