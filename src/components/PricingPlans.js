import React, { useState } from 'react';
import '../components/plans.css';
import ContactForm from './ContactForm';

const services = [
  { name: 'Social Media Management' },
  { name: 'Website Design & Development' },
  { name: 'Video Editing' },
  { name: 'Voice Dubbing' }, // ✅ New Service
];

const plansData = {
  'Social Media Management': [
    {
      title: 'Starter Plan',
      price: '$120/mo',
      description: 'Basic content strategy & posting',
      features: ['✓ 8 posts/mo', '✓ 2 reels/mo', '✓ 1 platform', '✓ Basic reporting'],
      button: 'Get Started',
    },
    {
      title: 'Growth Plan',
      price: '$240/mo',
      description: 'Accelerated growth with better engagement',
      features: ['✓ 15 posts/mo', '✓ 4 reels/mo', '✓ Up to 2 platforms', '✓ Engagement & reports'],
      button: 'Choose Plan',
    },
    {
      title: 'Premium Brand Plan',
      price: '$420/mo',
      description: 'Complete brand management',
      features: ['✓ Unlimited posts', '✓ 8+ reels/mo', '✓ All platforms', '✓ Influencer collabs', '✓ Advanced analytics'],
      button: 'Go Premium',
    },
  ],
  'Website Design & Development': [
    {
      title: 'Landing Page',
      price: '$100',
      description: 'One-page scroll site',
      features: ['✓ Mobile Responsive', '✓ Fast load time', '✓ Contact form'],
      button: 'Start Now',
    },
    {
      title: 'Business Website',
      price: '$250',
      description: 'Multi-page site for services',
      features: ['✓ 5-7 pages', '✓ Basic SEO', '✓ Admin panel'],
      button: 'Build It',
    },
    {
      title: 'Portfolio Website',
      price: '$200',
      description: 'Personal branding and portfolio site',
      features: ['✓ Clean layout', '✓ Project showcase', '✓ Mobile optimized'],
      button: 'Get Portfolio',
    },
  ],
  'Video Editing': [
    {
      title: 'Basic Reels',
      price: '$6/reel',
      description: 'Short-form engaging edits',
      features: ['✓ Text overlays', '✓ Transitions', '✓ Royalty-free music'],
      button: 'Edit Reel',
    },
    {
      title: 'YouTube Videos',
      price: '$30/video',
      description: 'Full-length YouTube content edits',
      features: ['✓ Jump cuts', '✓ Effects', '✓ Thumbnails'],
      button: 'Start Editing',
    },
    {
      title: 'Monthly Editing Pack',
      price: '$110/mo',
      description: 'Bulk content editing for creators',
      features: ['✓ 10+ videos', '✓ Consistent style', '✓ Fast delivery'],
      button: 'Subscribe',
    },
  ],
  'Voice Dubbing': [ // ✅ New Service Added
    {
      title: 'Basic Dubbing',
      price: '$20/video',
      description: 'English/Hindi dubbing with basic sync',
      features: ['✓ 1 language', '✓ Basic timing sync', '✓ Clean audio'],
      button: 'Get Dubbing',
    },
    {
      title: 'Multilingual Dubbing',
      price: '$40/video',
      description: 'Dubbing in 2 languages',
      features: ['✓ 2 languages', '✓ High-quality voiceovers', '✓ Background music'],
      button: 'Expand Reach',
    },
    {
      title: 'Premium Studio Quality',
      price: '$75/video',
      description: 'Professional dubbing with voice actors',
      features: ['✓ Studio voice artists', '✓ Lip sync', '✓ Background scoring'],
      button: 'Go Premium',
    },
  ],
};

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState('Social Media Management');
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupService, setPopupService] = useState('');
  const [popupPlan, setPopupPlan] = useState('');

  const handleTabClick = (service) => {
    setSelectedService(service);
  };

  const openPopup = (service, plan) => {
    setPopupService(service);
    setPopupPlan(plan);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const plans = plansData[selectedService] || [];

  return (
    <section id="services" className="services-section">
      <h2 className="section-title">Choose a Service</h2>

      <div className="service-tabs">
        {services.map((service) => (
          <button
            key={service.name}
            className={`service-button ${selectedService === service.name ? 'active' : ''}`}
            onClick={() => handleTabClick(service.name)}
          >
            {service.name}
          </button>
        ))}
      </div>

      <div className="plans-container">
        {plans.length > 0 ? (
          plans.map((plan, idx) => (
            <div key={idx} className="plan-card">
              <h3>{plan.title}</h3>
              <p className="plan-price">{plan.price}</p>
              <p className="plan-description">{plan.description}</p>
              <ul className="plan-features">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="plan-button" onClick={() => openPopup(selectedService, plan.title)}>
                {plan.button}
              </button>
            </div>
          ))
        ) : (
          <p>No plans available for this service.</p>
        )}
      </div>

      {popupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-button" onClick={closePopup}>×</button>
            <ContactForm selectedService={popupService} selectedPlan={popupPlan} />
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
