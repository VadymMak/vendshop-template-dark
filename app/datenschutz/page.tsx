import { redirect } from 'next/navigation';
import { IMPRINT } from '@/lib/constants';
import { SITE_CONFIG } from '@/lib/config';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import styles from './datenschutz.module.css';

export function generateMetadata() {
  return {
    title: `Datenschutz – ${SITE_CONFIG.name}`,
    robots: { index: false },
  };
}

export default function DatenschutzPage() {
  if (!IMPRINT) redirect('/');

  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.content}>
          <h1 className={styles.heading}>Datenschutzerklärung</h1>

          <section className={styles.section}>
            <h2 className={styles.subheading}>Verantwortlicher</h2>
            <p className={styles.line}><strong>{IMPRINT.businessName}</strong></p>
            <p className={styles.line}>{IMPRINT.ownerFullName}</p>
            <p className={styles.address}>{IMPRINT.address}</p>
            <p className={styles.line}>
              E-Mail:{' '}
              <a href={`mailto:${IMPRINT.impressumEmail}`} className={styles.link}>
                {IMPRINT.impressumEmail}
              </a>
            </p>
            <p className={styles.line}>
              Telefon:{' '}
              <a href={`tel:${IMPRINT.phone}`} className={styles.link}>
                {IMPRINT.phone}
              </a>
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.subheading}>Erhebung und Speicherung personenbezogener Daten</h2>
            <p className={styles.text}>
              Beim Besuch unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden
              Browser automatisch Informationen an den Server unserer Website gesendet. Diese
              Informationen werden temporär in einem sogenannten Logfile gespeichert. Folgende
              Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung
              gespeichert: IP-Adresse des anfragenden Rechners, Datum und Uhrzeit des Zugriffs, Name
              und URL der abgerufenen Datei, Website, von der aus der Zugriff erfolgt (Referrer-URL),
              verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres
              Access-Providers.
            </p>
            <p className={styles.text} style={{ marginTop: '0.75rem' }}>
              Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet: Gewährleistung
              eines reibungslosen Verbindungsaufbaus der Website, Gewährleistung einer komfortablen
              Nutzung unserer Website, Auswertung der Systemsicherheit und -stabilität sowie zu
              weiteren administrativen Zwecken. Die Rechtsgrundlage für die Datenverarbeitung ist
              Art. 6 Abs. 1 S. 1 lit. f DSGVO.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.subheading}>Cookies</h2>
            <p className={styles.text}>
              Wir setzen auf unserer Seite Cookies ein. Dabei handelt es sich um kleine Dateien, die
              Ihr Browser automatisch erstellt und die auf Ihrem Endgerät gespeichert werden, wenn
              Sie unsere Seite besuchen. Cookies richten auf Ihrem Endgerät keinen Schaden an,
              enthalten keine Viren, Trojaner oder sonstige Schadware.
            </p>
            <p className={styles.text} style={{ marginTop: '0.75rem' }}>
              Wir verwenden ausschließlich technisch notwendige Cookies, die für den Betrieb der
              Website erforderlich sind. Sie können Ihren Browser so einstellen, dass Sie über das
              Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben. Bei der
              Deaktivierung von Cookies kann die Funktionalität unserer Website eingeschränkt sein.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.subheading}>Kontaktaufnahme</h2>
            <p className={styles.text}>
              Bei Ihrer Kontaktaufnahme mit uns per E-Mail oder Telefon werden die von Ihnen
              mitgeteilten Daten (Ihre E-Mail-Adresse, ggf. Ihr Name und Ihre Telefonnummer) von uns
              gespeichert, um Ihre Fragen zu beantworten. Die in diesem Zusammenhang anfallenden
              Daten löschen wir, nachdem die Speicherung nicht mehr erforderlich ist, oder
              schränken die Verarbeitung ein, falls gesetzliche Aufbewahrungspflichten bestehen.
              Rechtsgrundlage ist Art. 6 Abs. 1 S. 1 lit. f DSGVO.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.subheading}>Hosting</h2>
            <p className={styles.text}>
              Diese Website wird bei Vercel Inc., 340 Pine Street, Suite 900, San Francisco,
              CA 94104, USA gehostet. Vercel verarbeitet Ihre Daten in unserem Auftrag. Wir haben
              mit Vercel einen Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO abgeschlossen.
              Weitere Informationen finden Sie in der Datenschutzerklärung von Vercel unter{' '}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                vercel.com/legal/privacy-policy
              </a>.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.subheading}>Betroffenenrechte</h2>
            <p className={styles.text}>
              Sie haben das Recht: Auskunft über Ihre bei uns gespeicherten persönlichen Daten zu
              erhalten (Art. 15 DSGVO); die Berichtigung unrichtiger persönlicher Daten zu verlangen
              (Art. 16 DSGVO); die Löschung Ihrer bei uns gespeicherten Daten zu verlangen
              (Art. 17 DSGVO); die Einschränkung der Datenverarbeitung zu verlangen (Art. 18 DSGVO);
              Widerspruch gegen die Verarbeitung Ihrer Daten einzulegen (Art. 21 DSGVO); sowie das
              Recht auf Datenübertragbarkeit (Art. 20 DSGVO).
            </p>
            <p className={styles.text} style={{ marginTop: '0.75rem' }}>
              Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die
              Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.subheading}>Widerspruchsrecht</h2>
            <p className={styles.text}>
              Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß
              Art. 6 Abs. 1 S. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, gemäß
              Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten
              einzulegen, soweit dafür Gründe vorliegen, die sich aus Ihrer besonderen Situation
              ergeben.
            </p>
            <p className={styles.text} style={{ marginTop: '0.75rem' }}>
              Möchten Sie von Ihrem Widerspruchsrecht Gebrauch machen, genügt eine E-Mail an{' '}
              <a href={`mailto:${IMPRINT.impressumEmail}`} className={styles.link}>
                {IMPRINT.impressumEmail}
              </a>.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.subheading}>Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <p className={styles.text}>
              Diese Datenschutzerklärung ist aktuell gültig. Durch die Weiterentwicklung unserer
              Website und Angebote oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher
              Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils
              aktuelle Datenschutzerklärung kann jederzeit auf dieser Website abgerufen werden.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
