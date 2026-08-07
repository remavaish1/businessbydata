window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-DN5RXLDB6X');

document.addEventListener('click', function(event) {
  const link = event.target.closest('a');
  if (!link) return;

  const destination = link.getAttribute('href') || '';

  if (destination.startsWith('mailto:')) {
    gtag('event', 'generate_lead', { method: 'email' });
  } else if (destination.includes('wa.me')) {
    gtag('event', 'generate_lead', { method: 'whatsapp' });
  } else if (destination.includes('/services')) {
    gtag('event', 'view_services', { link_text: link.innerText.trim() });
  } else if (destination === '#contact' || destination === '#service-contact') {
    gtag('event', 'cta_click', { link_text: link.innerText.trim() });
  }
});
