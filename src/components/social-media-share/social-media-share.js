import TwigBase from 'twig-components/twig-base';
import data from '../../demo/social-media-share/data';

export default class SocialMediaShare extends TwigBase {
  static get observedAttributes() {
    return ['css_class', 'link', 'variant', 'system', 'extra_attributes', 'social_icons'];
  }

  renderTemplate(variables) {
    return require('./social-media-share.twig')(data);
  }
}

if (!window.customElements.get('social-media-share')) {
  window.customElements.define('social-media-share', SocialMediaShare);
}
