import TwigBase from 'twig-components/twig-base';
import data from '../../demo/social-media-follow/data';

export default class SocialMediaFollow extends TwigBase {
  static get observedAttributes() {
    return ['css_class', 'link', 'variant', 'system', 'extra_attributes', 'social_icons'];
  }

  renderTemplate(variables) {
    return require('./social-media-follow.twig')(data);
  }
}

if (!window.customElements.get('social-media-follow')) {
  window.customElements.define('social-media-follow', SocialMediaFollow);
}