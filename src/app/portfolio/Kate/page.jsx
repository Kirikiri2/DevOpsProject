
'use client';

import '../../styles/Kate.css'

export default function PortfolioPage() {
  return (
    <div className="portfolio-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="color-dots">
          <span className="dot dot-pink-dark"></span>
          <span className="dot dot-pink-light"></span>
          <span className="dot dot-green"></span>
          <span className="dot dot-cream"></span>
        </div>
        
        <div className="hero-card">
          <div className="hero-tags">
            <span>дизайн</span>
            <span className="dot-separator">•</span>
            <span>айдентика</span>
            <span className="dot-separator">•</span>
            <span>портфолио</span>
          </div>
          
          <h1 className="hero-title">
            <span className="script-text">Design</span>
            <span className="bold-text">BYNOVA</span>
          </h1>
          
          <p className="hero-subtitle">Графический дизайнер и креатор</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="content-card">
          <h2 className="section-title">Обо мне</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Привет! Я создаю уникальный визуальный контент, 
                который вдохновляет и запоминается. Специализируюсь на 
                графическом дизайне, брендинге и создании полиграфии.
              </p>
              <p>
                Моя философия — это сочетание эстетики и функциональности. 
                Каждый проект для меня — это новая история, которую я помогаю 
                рассказать через дизайн.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">лет опыта</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">проектов</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">клиентов</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2 className="section-title">Услуги</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">✦</div>
            <h3>Графический дизайн</h3>
            <p>Создание визуальных концепций, иллюстраций и уникальных дизайнов</p>
          </div>
          <div className="service-card">
            <div className="service-icon">✦</div>
            <h3>Брендинг</h3>
            <p>Разработка фирменного стиля, логотипов и брендбуков</p>
          </div>
          <div className="service-card">
            <div className="service-icon">✦</div>
            <h3>Полиграфия</h3>
            <p>Дизайн открыток, буклетов, плакатов и другой печатной продукции</p>
          </div>
          <div className="service-card">
            <div className="service-icon">✦</div>
            <h3>Social Media</h3>
            <p>Оформление социальных сетей и создание контента</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-card">
          <h2 className="section-title">Контакты</h2>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">✈</span>
              <span>pancakeangels</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">☎</span>
              <span>+380 73 512 67 98</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">◎</span>
              <span>pollsmix</span>
            </div>
          </div>
          <p className="contact-cta">Давайте создадим что-то прекрасное вместе!</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Design BYNOVA. Все права защищены</p>
      </footer>
    </div>
  );
}
