import type { SiteLanguage } from './types';

export const UI_TRANSLATIONS: Record<SiteLanguage, {
  nav: { services: string; pricing: string; gallery: string; reviews: string; contact: string; book: string; menu: string; home: string };
  hero: { cta1: string; cta2: string };
  stats: { years: string; clients: string; rating: string; guarantee: string };
  services: { title: string; subtitle: string };
  menu: { title: string; subtitle: string };
  schedule: { title: string; subtitle: string };
  pricing: { title: string; subtitle: string; popular: string; book: string };
  gallery: { title: string; subtitle: string };
  reviews: { title: string; subtitle: string };
  whyUs: { title: string; subtitle: string; q1Title: string; q1Desc: string; q2Title: string; q2Desc: string; q3Title: string; q3Desc: string; q4Title: string; q4Desc: string };
  booking: { title: string; subtitle: string; name: string; phone: string; service: string; date: string; submit: string; success: string; benefit1: string; benefit2: string; benefit3: string; benefit4: string; selectService: string; note: string };
  contact: { title: string; subtitle: string; address: string; phone: string; email: string; hours: string; mapTitle: string; monFri: string; satSun: string; closed: string };
  footer: { rights: string; poweredBy: string; nav: string; contact: string; booking: string; bookingText: string; bookBtn: string; privacy?: string; cookies: string; impressum?: string };
  chat: { greeting: string; fallback: string; placeholder: string; send: string; open: string; close: string; online: string; qr1Label: string; qr1Reply: string; qr2Label: string; qr2Reply: string; qr3Label: string; qr3Reply: string; qr4Label: string; qr4Reply: string };
  faq: { title: string };
  portfolio: { title: string; subtitle: string; openImage: string; imageAlt: string };
  whatsapp: { label: string };
  cookie: { message: string; accept: string; reject: string; learnMore: string; settings: string };
}> = {
  sk: {
    nav: { services: 'Služby', pricing: 'Cenník', gallery: 'Galéria', reviews: 'Recenzie', contact: 'Kontakt', book: 'Objednať', menu: 'Menu', home: 'Domov' },
    hero: { cta1: 'Rezervovať termín', cta2: 'Naše služby' },
    stats: { years: 'Rokov skúseností', clients: 'Spokojných klientov', rating: 'Hodnotenie', guarantee: 'Záruka' },
    services: { title: 'Naše služby', subtitle: 'Profesionálne služby, ktorým môžete dôverovať.' },
    menu: { title: 'Naše menu', subtitle: 'Čerstvé ingrediencie, tradičné recepty a moderná kuchyňa.' },
    schedule: { title: 'Rozvrh hodín', subtitle: 'Aktuálny týždenný rozvrh tried a lekcií.' },
    pricing: { title: 'Cenník', subtitle: 'Transparentné ceny bez skrytých poplatkov.', popular: 'Najpopulárnejší', book: 'Objednať' },
    gallery: { title: 'Galéria', subtitle: 'Pozrite si naše práce.' },
    reviews: { title: 'Recenzie', subtitle: 'Čo hovoria naši klienti.' },
    whyUs: { title: 'Prečo my', subtitle: 'Profesionálny prístup ku každému klientovi.', q1Title: 'Kvalita', q1Desc: 'Výsledky, ktorým môžete dôverovať.', q2Title: 'Rýchlosť', q2Desc: 'Rýchle vykonanie bez kompromisov.', q3Title: 'Férové ceny', q3Desc: 'Transparentné ceny bez skrytých poplatkov.', q4Title: 'Záruka', q4Desc: 'Za každú prácu ručíme.' },
    booking: { title: 'Rezervácia', subtitle: 'Objednajte sa online.', name: 'Meno', phone: 'Telefón', service: 'Služba', date: 'Dátum', submit: 'Odoslať', success: 'Ďakujeme! Ozveme sa vám.', benefit1: 'Rýchla odpoveď do 24 hodín', benefit2: 'Bez záväzkov — rezervácia je bezplatná', benefit3: 'Bezplatná cenová ponuka', benefit4: 'Flexibilné termíny', selectService: 'Vyberte službu...', note: 'Poznámka' },
    contact: { title: 'Kontakt', subtitle: 'Nájdete nás tu alebo nám napíšte.', address: 'Adresa', phone: 'Telefón', email: 'E-mail', hours: 'Otváracie hodiny', mapTitle: 'Mapa', monFri: 'Po – Pi', satSun: 'So – Ne', closed: 'Zatvorené' },
    footer: { rights: 'Všetky práva vyhradené.', poweredBy: 'Vytvorené cez', nav: 'Navigácia', contact: 'Kontakt', booking: 'Rezervácia', bookingText: 'Rezervujte si termín online alebo nás kontaktujte priamo.', bookBtn: 'Rezervovať', privacy: 'Ochrana súkromia', cookies: 'Cookies' },
    chat: { greeting: 'Dobrý deň! Ako vám môžem pomôcť?', fallback: 'Ďakujeme za správu. Ozveme sa vám čo najskôr.', placeholder: 'Napíšte správu...', send: 'Odoslať', open: 'Otvoriť chat', close: 'Zavrieť', online: 'Online', qr1Label: '📋 Služby', qr1Reply: 'Kontaktujte nás pre zoznam všetkých služieb.', qr2Label: '🕐 Otváracie hodiny', qr2Reply: 'Pozrite si sekciu kontakt pre otváracie hodiny.', qr3Label: '📍 Lokalita', qr3Reply: 'Pozrite si sekciu kontakt pre adresu.', qr4Label: '📅 Rezervácia', qr4Reply: 'Rezervujte cez formulár na tejto stránke alebo nás zavolajte.' },
    faq: { title: 'Časté otázky' },
    portfolio: { title: 'Naše práce', subtitle: 'Výber z našich realizovaných projektov.', openImage: 'Otvoriť obrázok', imageAlt: 'Obrázok z portfólia' },
    whatsapp: { label: 'Kontaktovať cez WhatsApp' },
    cookie: { message: 'Používame cookies na zlepšenie vašich skúseností. Pokračovaním v prehliadaní súhlasíte s našou cookie politikou.', accept: 'Prijať všetky', reject: 'Odmietnuť', learnMore: 'Viac informácií', settings: 'Nastavenia cookies' },
  },
  ru: {
    nav: { services: 'Услуги', pricing: 'Цены', gallery: 'Галерея', reviews: 'Отзывы', contact: 'Контакт', book: 'Записаться', menu: 'Меню', home: 'Главная' },
    hero: { cta1: 'Записаться', cta2: 'Наши услуги' },
    stats: { years: 'Лет опыта', clients: 'Довольных клиентов', rating: 'Рейтинг', guarantee: 'Гарантия' },
    services: { title: 'Наши услуги', subtitle: 'Профессиональные услуги, которым можно доверять.' },
    menu: { title: 'Наше меню', subtitle: 'Свежие ингредиенты, традиционные рецепты и современная кухня.' },
    schedule: { title: 'Расписание занятий', subtitle: 'Актуальное еженедельное расписание занятий.' },
    pricing: { title: 'Цены', subtitle: 'Прозрачные цены без скрытых платежей.', popular: 'Популярный', book: 'Записаться' },
    gallery: { title: 'Галерея', subtitle: 'Посмотрите наши работы.' },
    reviews: { title: 'Отзывы', subtitle: 'Что говорят наши клиенты.' },
    whyUs: { title: 'Почему мы', subtitle: 'Профессиональный подход к каждому клиенту.', q1Title: 'Качество', q1Desc: 'Результаты, которым можно доверять.', q2Title: 'Быстро', q2Desc: 'Быстрое выполнение без компромиссов.', q3Title: 'Честные цены', q3Desc: 'Прозрачные цены без скрытых платежей.', q4Title: 'Гарантия', q4Desc: 'Мы отвечаем за каждую работу.' },
    booking: { title: 'Запись', subtitle: 'Запишитесь онлайн.', name: 'Имя', phone: 'Телефон', service: 'Услуга', date: 'Дата', submit: 'Отправить', success: 'Спасибо! Мы свяжемся с вами.', benefit1: 'Быстрый ответ в течение 24 часов', benefit2: 'Без обязательств — запись бесплатна', benefit3: 'Бесплатная ценовая консультация', benefit4: 'Гибкий график', selectService: 'Выберите услугу...', note: 'Примечание' },
    contact: { title: 'Контакты', subtitle: 'Найдите нас здесь или напишите нам.', address: 'Адрес', phone: 'Телефон', email: 'E-mail', hours: 'Режим работы', mapTitle: 'Карта', monFri: 'Пн – Пт', satSun: 'Сб – Вс', closed: 'Закрыто' },
    footer: { rights: 'Все права защищены.', poweredBy: 'Создано с помощью', nav: 'Навигация', contact: 'Контакты', booking: 'Бронирование', bookingText: 'Забронируйте онлайн или свяжитесь с нами.', bookBtn: 'Забронировать', privacy: 'Политика конфиденциальности', cookies: 'Cookies' },
    chat: { greeting: 'Здравствуйте! Чем могу помочь?', fallback: 'Спасибо за сообщение. Мы свяжемся с вами.', placeholder: 'Напишите сообщение...', send: 'Отправить', open: 'Открыть чат', close: 'Закрыть', online: 'Онлайн', qr1Label: '📋 Услуги', qr1Reply: 'Свяжитесь с нами для получения полного списка услуг.', qr2Label: '🕐 Режим работы', qr2Reply: 'Посмотрите раздел контакты для получения информации о режиме работы.', qr3Label: '📍 Местоположение', qr3Reply: 'Посмотрите раздел контакты для получения адреса.', qr4Label: '📅 Запись', qr4Reply: 'Вы можете записаться через форму на этой странице или позвонить нам.' },
    faq: { title: 'Частые вопросы' },
    portfolio: { title: 'Наши работы', subtitle: 'Подборка наших реализованных проектов.', openImage: 'Открыть изображение', imageAlt: 'Изображение портфолио' },
    whatsapp: { label: 'Связаться через WhatsApp' },
    cookie: { message: 'Мы используем файлы cookie для улучшения вашего опыта. Продолжая просмотр, вы соглашаетесь с нашей политикой.', accept: 'Принять все', reject: 'Отклонить', learnMore: 'Узнать больше', settings: 'Настройки cookie' },
  },
  en: {
    nav: { services: 'Services', pricing: 'Pricing', gallery: 'Gallery', reviews: 'Reviews', contact: 'Contact', book: 'Book Now', menu: 'Menu', home: 'Home' },
    hero: { cta1: 'Book Now', cta2: 'Our Services' },
    stats: { years: 'Years of experience', clients: 'Happy clients', rating: 'Rating', guarantee: 'Guarantee' },
    services: { title: 'Our Services', subtitle: 'Professional services you can trust.' },
    menu: { title: 'Our Menu', subtitle: 'Fresh ingredients, traditional recipes and modern cuisine.' },
    schedule: { title: 'Class Schedule', subtitle: 'Current weekly schedule of classes and sessions.' },
    pricing: { title: 'Pricing', subtitle: 'Transparent pricing with no hidden fees.', popular: 'Most Popular', book: 'Book Now' },
    gallery: { title: 'Gallery', subtitle: 'See our work.' },
    reviews: { title: 'Reviews', subtitle: 'What our clients say.' },
    whyUs: { title: 'Why Us', subtitle: 'Professional approach to every client.', q1Title: 'Quality', q1Desc: 'Results you can trust.', q2Title: 'Fast', q2Desc: 'Quick turnaround without compromising quality.', q3Title: 'Fair pricing', q3Desc: 'Transparent pricing with no hidden fees.', q4Title: 'Guaranteed', q4Desc: 'We stand behind every job we do.' },
    booking: { title: 'Booking', subtitle: 'Book online.', name: 'Name', phone: 'Phone', service: 'Service', date: 'Date', submit: 'Submit', success: 'Thank you! We will contact you soon.', benefit1: 'Quick response within 24 hours', benefit2: 'No obligations — booking is free', benefit3: 'Free price quote', benefit4: 'Flexible scheduling', selectService: 'Select a service...', note: 'Note' },
    contact: { title: 'Contact', subtitle: 'Find us here or write to us.', address: 'Address', phone: 'Phone', email: 'Email', hours: 'Working hours', mapTitle: 'Map', monFri: 'Mon – Fri', satSun: 'Sat – Sun', closed: 'Closed' },
    footer: { rights: 'All rights reserved.', poweredBy: 'Powered by', nav: 'Navigation', contact: 'Contact', booking: 'Booking', bookingText: 'Book online or contact us directly.', bookBtn: 'Book Now', privacy: 'Privacy Policy', cookies: 'Cookies' },
    chat: { greeting: 'Hello! How can I help you?', fallback: 'Thank you for your message. We will get back to you soon.', placeholder: 'Type a message...', send: 'Send', open: 'Open chat', close: 'Close', online: 'Online', qr1Label: '📋 Services', qr1Reply: 'Please contact us for a full list of services.', qr2Label: '🕐 Working hours', qr2Reply: 'Please check our contact section for working hours.', qr3Label: '📍 Location', qr3Reply: 'Please check our contact section for the address.', qr4Label: '📅 Booking', qr4Reply: 'You can book via the form on this page or call us directly.' },
    faq: { title: 'FAQ' },
    portfolio: { title: 'Our work', subtitle: 'A selection of our completed projects.', openImage: 'Open image', imageAlt: 'Portfolio image' },
    whatsapp: { label: 'Contact via WhatsApp' },
    cookie: { message: 'We use cookies to improve your experience. By continuing to browse, you agree to our cookie policy.', accept: 'Accept All', reject: 'Reject', learnMore: 'Learn more', settings: 'Cookie Settings' },
  },
  de: {
    nav: { services: 'Leistungen', pricing: 'Preise', gallery: 'Galerie', reviews: 'Bewertungen', contact: 'Kontakt', book: 'Termin buchen', menu: 'Menü', home: 'Startseite' },
    hero: { cta1: 'Termin buchen', cta2: 'Unsere Leistungen' },
    stats: { years: 'Jahre Erfahrung', clients: 'Zufriedene Kunden', rating: 'Bewertung', guarantee: 'Garantie' },
    services: { title: 'Unsere Leistungen', subtitle: 'Professionelle Dienstleistungen, denen Sie vertrauen können.' },
    menu: { title: 'Unsere Speisekarte', subtitle: 'Frische Zutaten, traditionelle Rezepte und moderne Küche.' },
    schedule: { title: 'Stundenplan', subtitle: 'Aktueller Wochenplan der Klassen und Lektionen.' },
    pricing: { title: 'Preise', subtitle: 'Transparente Preise ohne versteckte Gebühren.', popular: 'Am beliebtesten', book: 'Buchen' },
    gallery: { title: 'Galerie', subtitle: 'Sehen Sie unsere Arbeiten.' },
    reviews: { title: 'Bewertungen', subtitle: 'Was unsere Kunden sagen.' },
    whyUs: { title: 'Warum wir', subtitle: 'Professioneller Ansatz für jeden Kunden.', q1Title: 'Qualität', q1Desc: 'Ergebnisse, denen Sie vertrauen können.', q2Title: 'Schnell', q2Desc: 'Schnelle Ausführung ohne Abstriche.', q3Title: 'Faire Preise', q3Desc: 'Transparente Preise ohne versteckte Kosten.', q4Title: 'Garantiert', q4Desc: 'Wir stehen für jede unserer Leistungen.' },
    booking: { title: 'Buchung', subtitle: 'Online buchen.', name: 'Name', phone: 'Telefon', service: 'Leistung', date: 'Datum', submit: 'Absenden', success: 'Vielen Dank! Wir melden uns bei Ihnen.', benefit1: 'Schnelle Antwort innerhalb von 24 Stunden', benefit2: 'Keine Verpflichtungen — Buchung ist kostenlos', benefit3: 'Kostenloses Preisangebot', benefit4: 'Flexible Termine', selectService: 'Leistung auswählen...', note: 'Notiz' },
    contact: { title: 'Kontakt', subtitle: 'Finden Sie uns hier oder schreiben Sie uns.', address: 'Adresse', phone: 'Telefon', email: 'E-Mail', hours: 'Öffnungszeiten', mapTitle: 'Karte', monFri: 'Mo – Fr', satSun: 'Sa – So', closed: 'Geschlossen' },
    footer: { rights: 'Alle Rechte vorbehalten.', poweredBy: 'Erstellt mit', nav: 'Navigation', contact: 'Kontakt', booking: 'Buchung', bookingText: 'Buchen Sie online oder kontaktieren Sie uns.', bookBtn: 'Buchen', privacy: 'Datenschutz', cookies: 'Cookies', impressum: 'Impressum' },
    chat: { greeting: 'Hallo! Wie kann ich Ihnen helfen?', fallback: 'Danke für Ihre Nachricht. Wir melden uns bei Ihnen.', placeholder: 'Nachricht schreiben...', send: 'Senden', open: 'Chat öffnen', close: 'Schließen', online: 'Online', qr1Label: '📋 Leistungen', qr1Reply: 'Kontaktieren Sie uns für eine vollständige Liste unserer Leistungen.', qr2Label: '🕐 Öffnungszeiten', qr2Reply: 'Bitte schauen Sie in unseren Kontaktbereich für die Öffnungszeiten.', qr3Label: '📍 Standort', qr3Reply: 'Bitte schauen Sie in unseren Kontaktbereich für die Adresse.', qr4Label: '📅 Buchung', qr4Reply: 'Sie können über das Formular auf dieser Seite oder telefonisch buchen.' },
    faq: { title: 'Häufige Fragen' },
    portfolio: { title: 'Unsere Arbeiten', subtitle: 'Eine Auswahl unserer abgeschlossenen Projekte.', openImage: 'Bild öffnen', imageAlt: 'Portfolio-Bild' },
    whatsapp: { label: 'Über WhatsApp kontaktieren' },
    cookie: { message: 'Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Durch das Surfen stimmen Sie unserer Cookie-Richtlinie zu.', accept: 'Alle akzeptieren', reject: 'Ablehnen', learnMore: 'Mehr erfahren', settings: 'Cookie-Einstellungen' },
  },
  cs: {
    nav: { services: 'Služby', pricing: 'Ceník', gallery: 'Galerie', reviews: 'Recenze', contact: 'Kontakt', book: 'Objednat', menu: 'Menu', home: 'Domů' },
    hero: { cta1: 'Objednat termín', cta2: 'Naše služby' },
    stats: { years: 'Let zkušeností', clients: 'Spokojených klientů', rating: 'Hodnocení', guarantee: 'Záruka' },
    services: { title: 'Naše služby', subtitle: 'Profesionální služby, kterým můžete důvěřovat.' },
    menu: { title: 'Naše menu', subtitle: 'Čerstvé ingredience, tradiční recepty a moderní kuchyně.' },
    schedule: { title: 'Rozvrh hodin', subtitle: 'Aktuální týdenní rozvrh tříd a lekcí.' },
    pricing: { title: 'Ceník', subtitle: 'Transparentní ceny bez skrytých poplatků.', popular: 'Nejpopulárnější', book: 'Objednat' },
    gallery: { title: 'Galerie', subtitle: 'Podívejte se na naši práci.' },
    reviews: { title: 'Recenze', subtitle: 'Co říkají naši klienti.' },
    whyUs: { title: 'Proč my', subtitle: 'Profesionální přístup ke každému klientovi.', q1Title: 'Kvalita', q1Desc: 'Výsledky, kterým můžete důvěřovat.', q2Title: 'Rychlost', q2Desc: 'Rychlé provedení bez kompromisů.', q3Title: 'Férové ceny', q3Desc: 'Transparentní ceny bez skrytých poplatků.', q4Title: 'Záruka', q4Desc: 'Za každou práci ručíme.' },
    booking: { title: 'Rezervace', subtitle: 'Objednejte se online.', name: 'Jméno', phone: 'Telefon', service: 'Služba', date: 'Datum', submit: 'Odeslat', success: 'Děkujeme! Ozveme se vám.', benefit1: 'Rychlá odpověď do 24 hodin', benefit2: 'Bez závazků — rezervace je zdarma', benefit3: 'Bezplatná cenová nabídka', benefit4: 'Flexibilní termíny', selectService: 'Vyberte službu...', note: 'Poznámka' },
    contact: { title: 'Kontakt', subtitle: 'Najdete nás zde nebo nám napište.', address: 'Adresa', phone: 'Telefon', email: 'E-mail', hours: 'Otevírací doba', mapTitle: 'Mapa', monFri: 'Po – Pá', satSun: 'So – Ne', closed: 'Zavřeno' },
    footer: { rights: 'Všechna práva vyhrazena.', poweredBy: 'Vytvořeno pomocí', nav: 'Navigace', contact: 'Kontakt', booking: 'Rezervace', bookingText: 'Rezervujte si termín online nebo nás kontaktujte přímo.', bookBtn: 'Rezervovat', privacy: 'Ochrana soukromí', cookies: 'Cookies' },
    chat: { greeting: 'Dobrý den! Jak vám mohu pomoci?', fallback: 'Děkuji za zprávu. Ozveme se vám co nejdříve.', placeholder: 'Napište zprávu...', send: 'Odeslat', open: 'Otevřít chat', close: 'Zavřít', online: 'Online', qr1Label: '📋 Služby', qr1Reply: 'Kontaktujte nás pro seznam všech služeb.', qr2Label: '🕐 Otevírací doba', qr2Reply: 'Prosím zkontrolujte sekci kontakt pro otevírací dobu.', qr3Label: '📍 Lokalita', qr3Reply: 'Prosím zkontrolujte sekci kontakt pro adresu.', qr4Label: '📅 Rezervace', qr4Reply: 'Rezervujte prostřednictvím formuláře nebo nás zavolejte.' },
    faq: { title: 'Časté dotazy' },
    portfolio: { title: 'Naše práce', subtitle: 'Výběr z našich realizovaných projektů.', openImage: 'Otevřít obrázek', imageAlt: 'Obrázek z portfolia' },
    whatsapp: { label: 'Kontaktovat přes WhatsApp' },
    cookie: { message: 'Používáme cookies ke zlepšení vašich zkušeností. Pokračováním v prohlížení souhlasíte s naší cookie politikou.', accept: 'Přijmout vše', reject: 'Odmítnout', learnMore: 'Více informací', settings: 'Nastavení cookies' },
  },
  uk: {
    nav: { services: 'Послуги', pricing: 'Ціни', gallery: 'Галерея', reviews: 'Відгуки', contact: 'Контакти', book: 'Записатися', menu: 'Меню', home: 'Головна' },
    hero: { cta1: 'Записатися', cta2: 'Наші послуги' },
    stats: { years: 'Років досвіду', clients: 'Задоволених клієнтів', rating: 'Рейтинг', guarantee: 'Гарантія' },
    services: { title: 'Наші послуги', subtitle: 'Професійні послуги, яким можна довіряти.' },
    menu: { title: 'Наше меню', subtitle: 'Свіжі інгредієнти, традиційні рецепти та сучасна кухня.' },
    schedule: { title: 'Розклад занять', subtitle: 'Актуальний тижневий розклад занять.' },
    pricing: { title: 'Ціни', subtitle: 'Прозорі ціни без прихованих платежів.', popular: 'Найпопулярніший', book: 'Записатися' },
    gallery: { title: 'Галерея', subtitle: 'Подивіться наші роботи.' },
    reviews: { title: 'Відгуки', subtitle: 'Що кажуть наші клієнти.' },
    whyUs: { title: 'Чому ми', subtitle: 'Професійний підхід до кожного клієнта.', q1Title: 'Якість', q1Desc: 'Результати, яким можна довіряти.', q2Title: 'Швидкість', q2Desc: 'Швидке виконання без компромісів.', q3Title: 'Чесні ціни', q3Desc: 'Прозорі ціни без прихованих платежів.', q4Title: 'Гарантія', q4Desc: 'Ми відповідаємо за кожну роботу.' },
    booking: { title: 'Запис', subtitle: 'Запишіться онлайн.', name: "Ім'я", phone: 'Телефон', service: 'Послуга', date: 'Дата', submit: 'Відправити', success: "Дякуємо! Ми зв'яжемося з вами.", benefit1: 'Швидка відповідь протягом 24 годин', benefit2: "Без зобов'язань — запис безкоштовний", benefit3: 'Безкоштовна цінова пропозиція', benefit4: 'Гнучкий графік', selectService: 'Оберіть послугу...', note: 'Примітка' },
    contact: { title: 'Контакти', subtitle: 'Знайдіть нас тут або напишіть нам.', address: 'Адреса', phone: 'Телефон', email: 'E-mail', hours: 'Графік роботи', mapTitle: 'Карта', monFri: 'Пн – Пт', satSun: 'Сб – Нд', closed: 'Зачинено' },
    footer: { rights: 'Всі права захищені.', poweredBy: 'Створено за допомогою', nav: 'Навігація', contact: 'Контакти', booking: 'Бронювання', bookingText: 'Забронюйте онлайн або зв\'яжіться з нами.', bookBtn: 'Забронювати', privacy: 'Політика конфіденційності', cookies: 'Cookies' },
    chat: { greeting: 'Вітаю! Чим можу допомогти?', fallback: "Дякую за повідомлення. Ми зв'яжемося з вами.", placeholder: 'Напишіть повідомлення...', send: 'Надіслати', open: 'Відкрити чат', close: 'Закрити', online: 'Онлайн', qr1Label: '📋 Послуги', qr1Reply: "Зв'яжіться з нами для отримання повного списку послуг.", qr2Label: '🕐 Графік роботи', qr2Reply: 'Перевірте розділ контакти для отримання інформації про графік роботи.', qr3Label: '📍 Місцезнаходження', qr3Reply: 'Перевірте розділ контакти для отримання адреси.', qr4Label: '📅 Запис', qr4Reply: 'Ви можете записатися через форму на цій сторінці або зателефонувати нам.' },
    faq: { title: 'Часті питання' },
    portfolio: { title: 'Наші роботи', subtitle: 'Вибір наших реалізованих проектів.', openImage: 'Відкрити зображення', imageAlt: 'Зображення портфоліо' },
    whatsapp: { label: "Зв'язатися через WhatsApp" },
    cookie: { message: 'Ми використовуємо файли cookie для покращення вашого досвіду. Продовжуючи перегляд, ви погоджуєтесь з нашою політикою.', accept: 'Прийняти всі', reject: 'Відхилити', learnMore: 'Дізнатися більше', settings: 'Налаштування cookie' },
  },
};
