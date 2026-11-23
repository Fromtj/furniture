export function AboutSection() {
  return `
    <section class="about" id="about" aria-labelledby="about-title">
      <div class="about__inner container">
        <div class="about__visual">
          <span class="about__block about__block--left" aria-hidden="true"></span>
          <span class="about__block about__block--right" aria-hidden="true"></span>
          <span class="about__dots about__dots--side" aria-hidden="true"></span>
          <span class="about__dots about__dots--bottom" aria-hidden="true"></span>
          <div class="about__media u-media" role="img" aria-label="Wooden console table with a plant and a chair"></div>
        </div>

        <div class="about__content">
          <h2 class="about__title" id="about-title">
            <span class="about__title-solid">About</span>
            <span class="about__title-outline u-outline">Furniture</span>
          </h2>
          <p class="about__text">
            People have been using natural objects, such as tree stumps, rocks and moss,
            as furniture since the beginning of human civilisation.
          </p>
          <a class="btn about__button" href="#features">Read more</a>
        </div>
      </div>
    </section>
  `;
}
