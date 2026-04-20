import { SITE_CONFIG } from './config';
import { UI_TRANSLATIONS } from './ui-translations';

export function t() {
  return UI_TRANSLATIONS[SITE_CONFIG.language];
}
