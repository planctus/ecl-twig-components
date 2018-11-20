import TwigBase from 'twig-components/twig-base';

export default class SocialIcon extends TwigBase {
  static get observedAttributes() {
    return ['test'];
  }

  renderTemplate(variables) {
    return require('./social-icon.twig')(variables);
  }
}

if (!window.customElements.get('social-icon')) {
  window.customElements.define('social-icon', SocialIcon);
}
