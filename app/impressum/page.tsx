import { redirect } from 'next/navigation';
import { IMPRINT } from '@/lib/constants';
import { SITE_CONFIG } from '@/lib/config';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import styles from './impressum.module.css';

export function generateMetadata() {
  return {
    title: `Impressum – ${SITE_CONFIG.name}`,
    robots: { index: false },
  };
}

export default function ImpressumPage() {
  if (!IMPRINT) redirect('/');

  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.content}>
          <h1 className={styles.heading}>Impressum</h1>

          <section className={styles.section}>
            <h2 className={styles.subheading}>Angaben gemäß § 5 TMG</h2>
            <p className={styles.line}><strong>{IMPRINT.businessName}</strong></p>
            <p className={styles.line}>{IMPRINT.companyLegalForm}</p>
            <p className={styles.line}>{IMPRINT.ownerFullName}</p>
            <p className={styles.address}>{IMPRINT.address}</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.subheading}>Kontakt</h2>
            <p className={styles.line}>
              Telefon:{' '}
              <a href={`tel:${IMPRINT.phone}`} className={styles.link}>
                {IMPRINT.phone}
              </a>
            </p>
            <p className={styles.line}>
              E-Mail:{' '}
              <a href={`mailto:${IMPRINT.impressumEmail}`} className={styles.link}>
                {IMPRINT.impressumEmail}
              </a>
            </p>
          </section>

          {IMPRINT.vatId && (
            <section className={styles.section}>
              <h2 className={styles.subheading}>Umsatzsteuer-ID</h2>
              <p className={styles.line}>
                Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:
              </p>
              <p className={styles.line}><strong>{IMPRINT.vatId}</strong></p>
            </section>
          )}

          {IMPRINT.registrationNumber && (
            <section className={styles.section}>
              <h2 className={styles.subheading}>Handelsregister</h2>
              <p className={styles.line}>Registernummer: <strong>{IMPRINT.registrationNumber}</strong></p>
            </section>
          )}

          <section className={styles.section}>
            <h2 className={styles.subheading}>Haftung für Inhalte</h2>
            <p className={styles.text}>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
              als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.subheading}>Haftung für Links</h2>
            <p className={styles.text}>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
              keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
              Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
