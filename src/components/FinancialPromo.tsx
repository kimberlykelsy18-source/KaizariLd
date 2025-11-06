import React from 'react';
import styles from './FinancialPromo.module.css';
import eventData from '../data/financialEvent.json';

const FinancialPromo: React.FC = () => {
  const event = eventData;

  return (
    <section className={styles.promo} aria-labelledby="financial-promo-heading">
      <div className={styles.ribbon} aria-hidden />
      <div className={styles.left}>
        <div className={styles.topRow}>
          <h3 id="financial-promo-heading" className={styles.title}>
            {event.title}
          </h3>
          <div className={styles.badge}>Featured</div>
        </div>

        {event.subtitle && <p className={styles.subtitle}>{event.subtitle}</p>}

        <ul className={styles.meta}>
          {event.startDate && (
            <li className={styles.metaItem}>
              <strong>
                {event.startDate}
                {event.endDate ? ` — ${event.endDate}` : ''}
              </strong>
            </li>
          )}
          {event.mode && <li className={styles.metaItem}>{event.mode}</li>}
          {event.price && <li className={styles.metaItem}>{event.price}</li>}
        </ul>

        {event.speakers && event.speakers.length > 0 && (
          <div className={styles.speakers} aria-hidden>
            {event.speakers.map((s, i) => (
              <div key={i} className={styles.speaker}>
                {s.avatar ? (
                  <img src={s.avatar} alt={s.name} className={styles.avatar} />
                ) : (
                  <div className={styles.avatarPlaceholder} aria-hidden />
                )}
                <div className={styles.speakerName}>{s.name}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.right}>
        <a
          className={styles.cta}
          href={event.ctaUrl || '#'}
          target={event.ctaUrl ? '_blank' : undefined}
          rel={event.ctaUrl ? 'noopener noreferrer' : undefined}
          aria-label={event.ctaLabel || 'Register'}
        >
          <span className={styles.ctaText}>{event.ctaLabel || 'Register Now'}</span>
          <span className={styles.ctaSpark} aria-hidden />
        </a>
      </div>
    </section>
  );
};

export default FinancialPromo;
