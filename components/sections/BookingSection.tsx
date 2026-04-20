'use client';

import { useState } from 'react';
import { SERVICE_CATEGORIES } from '@/lib/constants';
import { t } from '@/lib/get-ui-text';
import styles from './BookingSection.module.css';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

interface FormData {
  name: string;
  phone: string;
  service: string;
  date: string;
  message: string;
}

export default function BookingSection() {
  const ui = t();
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const allServices = SERVICE_CATEGORIES.flatMap((cat) => cat.items);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with your API call or email service
    setSubmitted(true);
  };

  return (
    <section id="booking" className={`section section--alt ${styles.section}`}>
      <div className="container">
        <div className={styles.layout}>
          <ScrollReveal animation="fadeLeft" className={styles.info}>
            <h2 className="section-title">{ui.booking.title}</h2>
            <p className="section-subtitle">{ui.booking.subtitle}</p>
            <ul className={styles.benefits}>
              <li>✅ {ui.booking.benefit1}</li>
              <li>✅ {ui.booking.benefit2}</li>
              <li>✅ {ui.booking.benefit3}</li>
              <li>✅ {ui.booking.benefit4}</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={200} animation="fadeRight" className={styles.formWrap}>
            {submitted ? (
              <div className="success-message">
                <div className="success-icon">✅</div>
                <h3>{ui.booking.success}</h3>
                <button className="btn btn--outline" onClick={() => setSubmitted(false)}>
                  {ui.booking.title}
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                  <div className="form-group">
                    <label htmlFor="name">{ui.booking.name} *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-control"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">{ui.booking.phone} *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="form-control"
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className="form-group">
                    <label htmlFor="service">{ui.booking.service} *</label>
                    <select
                      id="service"
                      name="service"
                      className="form-control"
                      value={form.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">{ui.booking.selectService}</option>
                      {allServices.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="date">{ui.booking.date}</label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      className="form-control"
                      value={form.date}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">{ui.booking.note}</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className={`btn btn--primary ${styles.submit}`}>
                  {ui.booking.submit}
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
