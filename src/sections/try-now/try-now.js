export function TryNowSection() {
  const section = document.createElement('section');
  section.classList.add('trynow');
  section.setAttribute('id', 'try-now');

  const dotsMarkup = Array.from({ length: 16 })
    .map(() => '<span class="trynow__dot"></span>')
    .join('');

  section.innerHTML = `
    <div class="trynow__container">
      <div class="trynow__content">
        <h2 class="trynow__title">
          <span class="trynow__title-outline">Let’s</span>
          <span class="trynow__title-solid">Try Now</span>
        </h2>
        <button type="button" class="trynow__btn">Explore</button>
      </div>

      <div class="trynow__media">
        <div class="trynow__bg-box" aria-hidden="true"></div>
        <div class="trynow__image-wrap">
          <img
            src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80"
            alt="Minimalist interior with wooden stool"
            class="trynow__image"
          />
        </div>
        <div class="trynow__dots" aria-hidden="true">
          ${dotsMarkup}
        </div>
      </div>
    </div>
  `;

  return section;
}