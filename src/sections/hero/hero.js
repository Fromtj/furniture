export function HeroSection() {
  return `
    <section class="hero" id="hero" aria-labelledby="hero-title">
      <span class="hero__accent" aria-hidden="true"></span>
      <span class="hero__grid" aria-hidden="true"></span>

      <div class="hero__inner container">
        <div class="hero__content">
          <p class="hero__eyebrow">DECORATE HOME</p>
          <h1 class="hero__title" id="hero-title">
            Feel your home with a modern design space
          </h1>

          <div class="hero__actions">
            <a class="btn hero__discover" href="#about">Discover</a>
            <button class="hero__video" type="button">
              <span class="hero__video-icon" aria-hidden="true">
                <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor"><path d="M0 0l10 6-10 6z" /></svg>
              </span>
              <span class="hero__video-label">Watch video</span>
            </button>
          </div>
        </div>

        <div class="hero__visual">
          <span class="hero__backdrop" aria-hidden="true"></span>
          <span class="hero__dots" aria-hidden="true"></span>
          <div class="hero__media u-media" role="img" aria-label="Modern living room with armchairs and plants"></div>
        </div>
      </div>
    </section>
  `;
}
