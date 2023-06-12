export const loadStyles = (domain = 'www.bitrix24.ru') => {
  const root = `//${domain}/bitrix/js/ui`;
  const files = [
    'alerts/ui.alerts.min.css',
    'buttons/ui.buttons.min.css',
    'buttons/icons/ui.buttons.icons.min.css',
    // 'entity-selector/dist/entity-selector.bundle.min.css',
    'fonts/opensans/ui.font.opensans.min.css',
    // 'fonts/roboto/ui.font.roboto.min.css',
    'forms/ui.forms.min.css',
    'icons/b24/ui.icons.b24.min.css',
    'icons/base/ui.icons.base.min.css',
    'icons/disk/ui.icons.disk.min.css',
    'icons/service/ui.icons.service.min.css',
    'progressbar/ui.progressbar.min.css',
  ];
  const styles = files.reduce((Fragment, file) => {
    const href = [root, file].join('/');
    const links = document.querySelectorAll(`[href="${href}"]`);
    if (links.length) return Fragment;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    Fragment.append(link);
    return Fragment;
  }, new DocumentFragment());

  document.head.prepend(styles);
};
