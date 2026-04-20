# CLAUDE.md — VendShop Template

## Это шаблон! Не конечный сайт.
При создании нового сайта из этого шаблона:
1. Поменяй SITE_CONFIG в lib/config.ts (название, палитра, шрифт)
2. Поменяй данные в lib/constants.ts (услуги, отзывы, контакты)
3. Замени фото в public/images/
4. Готово!

## Стек: Next.js 15, TypeScript, pure CSS, pnpm
## Команды: pnpm dev / pnpm build / npx tsc --noEmit

## Архитектура
- lib/config.ts — SITE_CONFIG: название, палитра, шрифт, контакты, template type
- lib/constants.ts — данные: услуги, отзывы, FAQ итд
- lib/types.ts — все TypeScript типы
- app/globals.css — CSS variables подставляются из SITE_CONFIG
- components/ — универсальные секции
- Все секции читают цвета из CSS variables (не хардкод)
