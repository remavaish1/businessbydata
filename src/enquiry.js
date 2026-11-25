const enquiryForm = document.querySelector('#enquiry');
const workshopChoice = enquiryForm.elements.workshop;
const enquiryButton = enquiryForm.querySelector('button[type="submit"]');
const enquiryStatus = enquiryForm.querySelector('.enquiry-status');
// Set to the production form endpoint once email delivery is configured.
const enquiryEndpoint = '';

document.querySelectorAll('[data-workshop]').forEach(link => {
  link.addEventListener('click', () => {
    const chosenGroup = [...workshopChoice.options].find(option => option.value === link.dataset.workshop).parentElement;
    workshopChoice.querySelectorAll('optgroup').forEach(group => {
      group.hidden = group !== chosenGroup;
      group.disabled = group !== chosenGroup;
    });
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

const workshopCatalog = document.querySelector('#workshops');
const pathwayPanels = [...workshopCatalog.querySelectorAll('.workshop-pathway')];
const pathwayPicker = workshopCatalog.querySelector('.workshop-picker');

document.querySelectorAll('a[href="#contact"]').forEach(link => {
  link.addEventListener('click', () => {
    workshopChoice.querySelectorAll('optgroup').forEach(group => {
      group.hidden = false;
      group.disabled = false;
    });
    workshopChoice.value = '';
    enquiryStatus.textContent = '';
  });
});

function showSelectedPathway() {
  // Keep the current pathway when jumping from a workshop to its enquiry form.
  if (window.location.hash === '#enquiry') return;
  const selected = pathwayPanels.find(panel => `#${panel.id}` === window.location.hash);
  pathwayPanels.forEach(panel => {
    panel.hidden = panel !== selected;
  });
  pathwayPicker.hidden = Boolean(selected);
  if (selected) requestAnimationFrame(() => selected.scrollIntoView());
}

window.addEventListener('hashchange', showSelectedPathway);
document.querySelectorAll('.workshop-explore, .workshop-picker a').forEach(link => {
  link.addEventListener('click', () => {
    if (link.hash === window.location.hash) showSelectedPathway();
  });
});
showSelectedPathway();
