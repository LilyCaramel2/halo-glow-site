/**
 * Cookie Consent Banner for Halo Glow Beauty
 * Stores user consent in localStorage
 * GDPR/POPIA compliant - no cookies until accepted
 */

(function() {
  'use strict';

  // Check if user has already responded to cookie consent
  const cookieConsent = localStorage.getItem('cookieConsent');
  
  if (cookieConsent !== null) {
    // User has already made a choice
    if (cookieConsent === 'accepted') {
      loadAnalytics();
    }
    return;
  }

  // Create cookie banner
  const banner = document.createElement('div');
  banner.className = 'cookie-consent';
  banner.innerHTML = `
    <div class="cookie-consent-inner">
      <div class="cookie-consent-text">
        <strong>🍪 We use cookies</strong><br>
        We use cookies to enhance your browsing experience and analyze our traffic. 
        By clicking "Accept", you consent to our use of cookies. 
        <a href="/privacy-policy.html">Learn more</a>
      </div>
      <div class="cookie-consent-buttons">
        <button class="cookie-btn cookie-btn-accept" id="cookie-accept">
          Accept All
        </button>
        <button class="cookie-btn cookie-btn-decline" id="cookie-decline">
          Decline
        </button>
      </div>
    </div>
  `;

  // Add banner to page
  document.body.appendChild(banner);

  // Show banner with animation after a short delay
  setTimeout(() => {
    banner.classList.add('show');
  }, 500);

  // Handle Accept button
  document.getElementById('cookie-accept').addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    hideBanner();
    loadAnalytics();
  });

  // Handle Decline button
  document.getElementById('cookie-decline').addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'declined');
    hideBanner();
  });

  // Hide banner with animation
  function hideBanner() {
    banner.classList.remove('show');
    setTimeout(() => {
      banner.remove();
    }, 400);
  }

  // Load analytics scripts only after consent
  function loadAnalytics() {
    // Add Google Analytics or other tracking scripts here when ready
    // Example:
    // const script = document.createElement('script');
    // script.src = 'https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID';
    // document.head.appendChild(script);
    
    console.log('✅ Analytics consent granted');
  }
})();