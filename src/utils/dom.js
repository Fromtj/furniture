const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

function applyAttributes(element, attributes) {
  Object.entries(attributes).forEach(([name, value]) => {
    element.setAttribute(name, value);
  });
}

export function createElement(tag, options = {}) {
  const { classes = [], text = '', attrs = {}, children = [] } = options;
  const element = document.createElement(tag);

  if (classes.length > 0) {
    element.classList.add(...classes);
  }
  if (text) {
    element.textContent = text;
  }
  applyAttributes(element, attrs);
  element.append(...children);

  return element;
}

export function createSvgElement(tag, attrs = {}, children = []) {
  const element = document.createElementNS(SVG_NAMESPACE, tag);

  applyAttributes(element, attrs);
  element.append(...children);

  return element;
}

export function createDecoration(...classes) {
  return createElement('span', {
    classes,
    attrs: { 'aria-hidden': 'true' },
  });
}
