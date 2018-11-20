// Simple content for demo
module.exports = {
  links: [
    {
      href: '/example',
      label: 'Standard link',
      variant: 'standalone',
    },
    {
      href: '/example',
      label: 'Facebook',
      variant: 'icon',
      iconPosition: 'before',
      icon: [
        {
          shape: 'facebook',
          size: 'xl',
        },
        {
          shape: 'facebook_hover',
          size: 'xl',
        },
      ],
    },
  ],
};
