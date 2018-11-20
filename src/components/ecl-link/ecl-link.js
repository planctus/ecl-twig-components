import TwigBase from 'twig-components/twig-base';

export default class EclLink extends TwigBase {
  static get observedAttributes() {
    return ['css_class', 'href', 'variant', 'label', 'extra_attributes'];
  }

  renderTemplate(variables) {
    console.log(variables);
    return require('./ecl-link.twig')(variables);
  }
}

if (!window.customElements.get('ecl-link')) {
  window.customElements.define('ecl-link', EclLink);
}