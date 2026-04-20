import type { SiteLanguage } from './types';

export const UI_TRANSLATIONS: Record<SiteLanguage, {
  nav: { services: string; pricing: string; gallery: string; reviews: string; contact: string; book: string };
  hero: { cta1: string; cta2: string };
  stats: { years: string; clients: string; rating: string; guarantee: string };
  services: { title: string; subtitle: string };
  menu: { title: string; subtitle: string };
  schedule: { title: string; subtitle: string };
  pricing: { title: string; subtitle: string; popular: string; book: string };
  gallery: { title: string; subtitle: string };
  reviews: { title: string; subtitle: string };
  whyUs: { title: string; subtitle: string };
  booking: { title: string; subtitle: string; name: string; phone: string; service: string; date: string; submit: string; success: string; benefit1: string; benefit2: string; benefit3: string; benefit4: string; selectService: string; note: string };
  contact: { title: string; subtitle: string; address: string; phone: string; email: string; hours: string };
  footer: { rights: string; poweredBy: string; nav: string; contact: string; booking: string; bookingText: string; bookBtn: string; privacy: string; cookies: string };
  chat: { greeting: string; fallback: string };
  faq: { title: string };
}> = {
  sk: {
    nav: { services: 'Služby', pricing: 'Cenník', gallery: 'Galéria', reviews: 'Recenzie', contact: 'Kontakt', book: 'Objednať' },
    hero: { cta1: 'Rezervovať termín', cta2: 'Naše služby' },
    stats: { years: 'Rokov skúseností', clients: 'Spokojných klientov', rating: 'Hodnotenie', guarantee: 'Záruka' },
    services: { title: 'Naše služby', subtitle: 'Profesionálne služby, ktorým môžete dôverovať.' },
    menu: { title: 'Naše menu', subtitle: 'Čerstvé ingrediencie, tradičné recepty a moderná kuchyňa.' },
    schedule: { title: 'Rozvrh hodín', subtitle: 'Aktuálny týždenný rozvrh tried a lekcií.' },
    pricing: { title: 'Cenník', subtitle: 'Transparentné ceny bez skrytých poplatkov.', popular: 'Najpopulárnejší', book: 'Objednať' },
    gallery: { title: 'Galéria', subtitle: 'Pozrite si naše práce.' },
    reviews: { title: 'Recenzie', subtitle: 'Čo hovoria naši klienti.' },
    whyUs: { title: 'Prečo my', subtitle: 'Profesionálny prístup ku každému klientovi.' },
    booking: { title: 'Rezervácia', subtitle: 'Objednajte sa online.', name: 'Meno', phone: 'Telefón', service: 'Služba', date: 'Dátum', submit: 'Odoslať', success: 'Ďakujeme! Ozveme sa vám.', benefit1: 'Rýchla odpoveď do 24 hodín', benefit2: 'Bez záväzkov — rezervácia je bezplatná', benefit3: 'Bezplatná cenová ponuka', benefit4: 'Flexibilné termíny', selectService: 'Vyberte službu...', note: 'Poznámka' },
    contact: { title: 'Kontakt', subtitle: 'Nájdete nás tu alebo nám napíšte.', address: 'Adresa', phone: 'Telefón', email: 'E-mail', hours: 'Otváracie hodiny' },
    footer: { rights: 'Všetky práva vyhradené.', poweredBy: 'Vytvorené cez', nav: 'Navigácia', contact: 'Kontakt', booking: 'Rezervácia', bookingText: 'Rezervujte si termín online alebo nás kontaktujte priamo.', bookBtn: 'Rezervovať', privacy: 'Ochrana súkromia', cookies: 'Cookies' },
    chat: { greeting: 'Dobrý deň! Ako vám môžem pomôcť?', fallback: 'Ďakujeme za správu. Ozveme sa vám čo najskôr.' },
    faq: { title: 'Časté otázky' },
  },
  ru: {
    nav: { services: 'Услуги', pricing: 'Цены', gallery: 'Галерея', reviews: 'Отзывы', contact: 'Контакт', book: 'Записаться' },
    hero: { cta1: 'Записаться', cta2: 'Наши услуги' },
    stats: { years: 'Лет опыта', clients: 'Довольных клиентов', rating: 'Рейтинг', guarantee: 'Гарантия' },
    services: { title: 'Наши услуги', subtitle: 'Профессиональные услуги, которым можно доверять.' },
    menu: { title: 'Наше меню', subtitle: 'Свежие ингредиенты, традиционные рецепты и современная кухня.' },
    schedule: { title: 'Расписание занятий', subtitle: 'Актуальное еженедельное расписание занятий.' },
    pricing: { title: 'Цены', subtitle: 'Прозрачные цены без скрытых платежей.', popular: 'Популярный', book: 'Записаться' },
    gallery: { title: 'Галерея', subtitle: 'Посмотрите наши работы.' },
    reviews: { title: 'Отзывы', subtitle: 'Что говорят наши клиенты.' },
    whyUs: { title: 'Почему мы', subtitle: 'Профессиональный подход к каждому клиенту.' },
    booking: { title: 'Запись', subtitle: 'Запишитесь онлайн.', name: 'Имя', phone: 'Телефон', service: 'Услуга', date: 'Дата', submit: 'Отправить', success: 'Спасибо! Мы свяжемся с вами.', benefit1: 'Быстрый ответ в течение 24 часов', benefit2: 'Без обязательств — запись бесплатна', benefit3: 'Бесплатная ценовая консультация', benefit4: 'Гибкий график', selectService: 'Выберите услугу...', note: 'Примечание' },
    contact: { title: 'Контакты', subtitle: 'Найдите нас здесь или напишите нам.', address: 'Адрес', phone: 'Телефон', email: 'E-mail', hours: 'Режим работы' },
    footer: { rights: 'Все права защищены.', poweredBy: 'Создано с помощью', nav: 'Навигация', contact: 'Контакты', booking: 'Бронирование', bookingText: 'Забронируйте онлайн или свяжитесь с нами.', bookBtn: 'Забронировать', privacy: 'Политика конфиденциальности', cookies: 'Cookies' },
    chat: { greeting: 'Здравствуйте! Чем могу помочь?', fallback: 'Спасибо за сообщение. Мы свяжемся с вами.' },
    faq: { title: 'Частые вопросы' },
  },
  en: {
    nav: { services: 'Services', pricing: 'Pricing', gallery: 'Gallery', reviews: 'Reviews', contact: 'Contact', book: 'Book Now' },
    hero: { cta1: 'Book Now', cta2: 'Our Services' },
    stats: { years: 'Years of experience', clients: 'Happy clients', rating: 'Rating', guarantee: 'Guarantee' },
    services: { title: 'Our Services', subtitle: 'Professional services you can trust.' },
    menu: { title: 'Our Menu', subtitle: 'Fresh ingredients, traditional recipes and modern cuisine.' },
    schedule: { title: 'Class Schedule', subtitle: 'Current weekly schedule of classes and sessions.' },
    pricing: { title: 'Pricing', subtitle: 'Transparent pricing with no hidden fees.', popular: 'Most Popular', book: 'Book Now' },
    gallery: { title: 'Gallery', subtitle: 'See our work.' },
    reviews: { title: 'Reviews', subtitle: 'What our clients say.' },
    whyUs: { title: 'Why Us', subtitle: 'Professional approach to every client.' },
    booking: { title: 'Booking', subtitle: 'Book online.', name: 'Name', phone: 'Phone', service: 'Service', date: 'Date', submit: 'Submit', success: 'Thank you! We will contact you soon.', benefit1: 'Quick response within 24 hours', benefit2: 'No obligations — booking is free', benefit3: 'Free price quote', benefit4: 'Flexible scheduling', selectService: 'Select a service...', note: 'Note' },
    contact: { title: 'Contact', subtitle: 'Find us here or write to us.', address: 'Address', phone: 'Phone', email: 'Email', hours: 'Working hours' },
    footer: { rights: 'All rights reserved.', poweredBy: 'Powered by', nav: 'Navigation', contact: 'Contact', booking: 'Booking', bookingText: 'Book online or contact us directly.', bookBtn: 'Book Now', privacy: 'Privacy Policy', cookies: 'Cookies' },
    chat: { greeting: 'Hello! How can I help you?', fallback: 'Thank you for your message. We will get back to you soon.' },
    faq: { title: 'FAQ' },
  },
  de: {
    nav: { services: 'Leistungen', pricing: 'Preise', gallery: 'Galerie', reviews: 'Bewertungen', contact: 'Kontakt', book: 'Termin buchen' },
    hero: { cta1: 'Termin buchen', cta2: 'Unsere Leistungen' },
    stats: { years: 'Jahre Erfahrung', clients: 'Zufriedene Kunden', rating: 'Bewertung', guarantee: 'Garantie' },
    services: { title: 'Unsere Leistungen', subtitle: 'Professionelle Dienstleistungen, denen Sie vertrauen können.' },
    menu: { title: 'Unsere Speisekarte', subtitle: 'Frische Zutaten, traditionelle Rezepte und moderne Küche.' },
    schedule: { title: 'Stundenplan', subtitle: 'Aktueller Wochenplan der Klassen und Lektionen.' },
    pricing: { title: 'Preise', subtitle: 'Transparente Preise ohne versteckte Gebühren.', popular: 'Am beliebtesten', book: 'Buchen' },
    gallery: { title: 'Galerie', subtitle: 'Sehen Sie unsere Arbeiten.' },
    reviews: { title: 'Bewertungen', subtitle: 'Was unsere Kunden sagen.' },
    whyUs: { title: 'Warum wir', subtitle: 'Professioneller Ansatz für jeden Kunden.' },
    booking: { title: 'Buchung', subtitle: 'Online buchen.', name: 'Name', phone: 'Telefon', service: 'Leistung', date: 'Datum', submit: 'Absenden', success: 'Vielen Dank! Wir melden uns bei Ihnen.', benefit1: 'Schnelle Antwort innerhalb von 24 Stunden', benefit2: 'Keine Verpflichtungen — Buchung ist kostenlos', benefit3: 'Kostenloses Preisangebot', benefit4: 'Flexible Termine', selectService: 'Leistung auswählen...', note: 'Notiz' },
    contact: { title: 'Kontakt', subtitle: 'Finden Sie uns hier oder schreiben Sie uns.', address: 'Adresse', phone: 'Telefon', email: 'E-Mail', hours: 'Öffnungszeiten' },
    footer: { rights: 'Alle Rechte vorbehalten.', poweredBy: 'Erstellt mit', nav: 'Navigation', contact: 'Kontakt', booking: 'Buchung', bookingText: 'Buchen Sie online oder kontaktieren Sie uns.', bookBtn: 'Buchen', privacy: 'Datenschutz', cookies: 'Cookies' },
    chat: { greeting: 'Hallo! Wie kann ich Ihnen helfen?', fallback: 'Danke für Ihre Nachricht. Wir melden uns bei Ihnen.' },
    faq: { title: 'Häufige Fragen' },
  },
  cs: {
    nav: { services: 'Služby', pricing: 'Ceník', gallery: 'Galerie', reviews: 'Recenze', contact: 'Kontakt', book: 'Objednat' },
    hero: { cta1: 'Objednat termín', cta2: 'Naše služby' },
    stats: { years: 'Let zkušeností', clients: 'Spokojených klientů', rating: 'Hodnocení', guarantee: 'Záruka' },
    services: { title: 'Naše služby', subtitle: 'Profesionální služby, kterým můžete důvěřovat.' },
    menu: { title: 'Naše menu', subtitle: 'Čerstvé ingredience, tradiční recepty a moderní kuchyně.' },
    schedule: { title: 'Rozvrh hodin', subtitle: 'Aktuální týdenní rozvrh tříd a lekcí.' },
    pricing: { title: 'Ceník', subtitle: 'Transparentní ceny bez skrytých poplatků.', popular: 'Nejpopulárnější', book: 'Objednat' },
    gallery: { title: 'Galerie', subtitle: 'Podívejte se na naši práci.' },
    reviews: { title: 'Recenze', subtitle: 'Co říkají naši klienti.' },
    whyUs: { title: 'Proč my', subtitle: 'Profesionální přístup ke každému klientovi.' },
    booking: { title: 'Rezervace', subtitle: 'Objednejte se online.', name: 'Jméno', phone: 'Telefon', service: 'Služba', date: 'Datum', submit: 'Odeslat', success: 'Děkujeme! Ozveme se vám.', benefit1: 'Rychlá odpověď do 24 hodin', benefit2: 'Bez závazků — rezervace je zdarma', benefit3: 'Bezplatná cenová nabídka', benefit4: 'Flexibilní termíny', selectService: 'Vyberte službu...', note: 'Poznámka' },
    contact: { title: 'Kontakt', subtitle: 'Najdete nás zde nebo nám napište.', address: 'Adresa', phone: 'Telefon', email: 'E-mail', hours: 'Otevírací doba' },
    footer: { rights: 'Všechna práva vyhrazena.', poweredBy: 'Vytvořeno pomocí', nav: 'Navigace', contact: 'Kontakt', booking: 'Rezervace', bookingText: 'Rezervujte si termín online nebo nás kontaktujte přímo.', bookBtn: 'Rezervovat', privacy: 'Ochrana soukromí', cookies: 'Cookies' },
    chat: { greeting: 'Dobrý den! Jak vám mohu pomoci?', fallback: 'Děkuji za zprávu. Ozveme se vám co nejdříve.' },
    faq: { title: 'Časté dotazy' },
  },
  uk: {
    nav: { services: 'Послуги', pricing: 'Ціни', gallery: 'Галерея', reviews: 'Відгуки', contact: 'Контакти', book: 'Записатися' },
    hero: { cta1: 'Записатися', cta2: 'Наші послуги' },
    stats: { years: 'Років досвіду', clients: 'Задоволених клієнтів', rating: 'Рейтинг', guarantee: 'Гарантія' },
    services: { title: 'Наші послуги', subtitle: 'Професійні послуги, яким можна довіряти.' },
    menu: { title: 'Наше меню', subtitle: 'Свіжі інгредієнти, традиційні рецепти та сучасна кухня.' },
    schedule: { title: 'Розклад занять', subtitle: 'Актуальний тижневий розклад занять.' },
    pricing: { title: 'Ціни', subtitle: 'Прозорі ціни без прихованих платежів.', popular: 'Найпопулярніший', book: 'Записатися' },
    gallery: { title: 'Галерея', subtitle: 'Подивіться наші роботи.' },
    reviews: { title: 'Відгуки', subtitle: 'Що кажуть наші клієнти.' },
    whyUs: { title: 'Чому ми', subtitle: 'Професійний підхід до кожного клієнта.' },
    booking: { title: 'Запис', subtitle: 'Запишіться онлайн.', name: "Ім'я", phone: 'Телефон', service: 'Послуга', date: 'Дата', submit: 'Відправити', success: "Дякуємо! Ми зв'яжемося з вами.", benefit1: 'Швидка відповідь протягом 24 годин', benefit2: "Без зобов'язань — запис безкоштовний", benefit3: 'Безкоштовна цінова пропозиція', benefit4: 'Гнучкий графік', selectService: 'Оберіть послугу...', note: 'Примітка' },
    contact: { title: 'Контакти', subtitle: 'Знайдіть нас тут або напишіть нам.', address: 'Адреса', phone: 'Телефон', email: 'E-mail', hours: 'Графік роботи' },
    footer: { rights: 'Всі права захищені.', poweredBy: 'Створено за допомогою', nav: 'Навігація', contact: 'Контакти', booking: 'Бронювання', bookingText: 'Забронюйте онлайн або зв\'яжіться з нами.', bookBtn: 'Забронювати', privacy: 'Політика конфіденційності', cookies: 'Cookies' },
    chat: { greeting: 'Вітаю! Чим можу допомогти?', fallback: "Дякую за повідомлення. Ми зв'яжемося з вами." },
    faq: { title: 'Часті питання' },
  },
};
