import { Header } from './components/header/header.js';
import { Footer } from './components/footer/footer.js';

import { HeroSection } from './sections/hero/hero.js';
import { AboutSection } from './sections/about/about.js';
import { FeaturesSection } from './sections/features/features.js';
import { ProductsSection } from './sections/products/products.js';
import { TryNowSection } from './sections/try-now/try-now.js';

const sections = [
  HeroSection,
  AboutSection,
  FeaturesSection,
  ProductsSection,
  TryNowSection,
];

function render() {
  const root = document.getElementById('app');
  if (!root) {
    throw new Error('Missing <div id="app"></div> in index.html');
  }

  const main = document.createElement('main');
  main.setAttribute('id', 'main');
  main.append(...sections.map((createSection) => createSection()));

  root.replaceChildren(Header(), main, Footer());

  document.dispatchEvent(new CustomEvent('page:rendered'));
}

render();
