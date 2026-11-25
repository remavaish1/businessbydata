function openWorkshopPathway(hash) {
  const pathway = document.getElementById(hash.slice(1));
  if (pathway?.matches('details.workshop-pathway')) pathway.open = true;
}

for (const link of document.querySelectorAll('.workshop-explore')) {
  link.addEventListener('click', () => openWorkshopPathway(link.hash));
}

window.addEventListener('hashchange', () => openWorkshopPathway(window.location.hash));
openWorkshopPathway(window.location.hash);
