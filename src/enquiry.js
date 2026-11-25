const enquiryForm = document.querySelector('#enquiry');
const workshopChoice = enquiryForm.elements.workshop;
const enquiryButton = enquiryForm.querySelector('button[type="submit"]');
const enquiryStatus = enquiryForm.querySelector('.enquiry-status');
// Set to the production form endpoint once email delivery is configured.
const enquiryEndpoint = '';

document.querySelectorAll('[data-workshop]').forEach(link => {
  link.addEventListener('click', () => {
    workshopChoice.value = link.dataset.workshop;
    enquiryStatus.textContent = '';
    workshopChoice.focus({ preventScroll: true });
  });
});

enquiryButton.disabled = false;
if (enquiryEndpoint) enquiryButton.textContent = 'Send enquiry';

enquiryForm.addEventListener('submit', async event => {
  event.preventDefault();
  const values = Object.fromEntries(new FormData(enquiryForm));
  const option = workshopChoice.selectedOptions[0];
  const workshop = option.textContent;
  const pathway = option.closest('optgroup')?.label || '';
  const subject = `Workshop enquiry — ${workshop}`;
  const body = [
    `Workshop: ${workshop}`,
    pathway && `Pathway: ${pathway}`,
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    values.organisation && `Organisation: ${values.organisation}`,
    values.groupSize && `Group size: ${values.groupSize}`,
    values.message && `Message: ${values.message}`,
  ].filter(Boolean).join('\n');

  if (!enquiryEndpoint) {
    enquiryStatus.textContent = 'Send the draft from your email app to complete your enquiry.';
    window.location.href = `mailto:admin@businessbydata.co?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return;
  }

  enquiryButton.disabled = true;
  enquiryStatus.textContent = 'Sending your enquiry…';
  try {
    const response = await fetch(enquiryEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...values, workshop, pathway, subject }),
    });
    if (!response.ok) throw new Error('Delivery failed');
    enquiryForm.reset();
    enquiryStatus.textContent = 'Thanks. Your enquiry has been sent.';
  } catch {
    enquiryStatus.textContent = 'Your enquiry could not be sent. Please try again or use Email BBD below.';
  } finally {
    enquiryButton.disabled = false;
  }
});
