(function(){
  var modal=document.getElementById('bbd-interest-modal');
  if(!modal) return;
  var close=modal.querySelector('.bbd-interest-close');
  function open(){modal.classList.add('is-open');modal.setAttribute('aria-hidden','false');}
  function shut(){modal.classList.remove('is-open');modal.setAttribute('aria-hidden','true');}
  document.querySelectorAll('[data-bbd-interest-open]').forEach(function(x){x.addEventListener('click',open);});
  close.addEventListener('click',shut);
  modal.addEventListener('click',function(e){if(e.target===modal)shut();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')shut();});
  modal.querySelectorAll('[data-interest]').forEach(function(button){
    button.addEventListener('click',function(){
      var topic=button.getAttribute('data-interest');
      window.location.href='mailto:hello@businessbydata.co?subject='+encodeURIComponent('Business By Data enquiry: '+topic)+'&body='+encodeURIComponent('Hello Business By Data,\n\nI would like to discuss '+topic+'.\n\n');
      shut();
    });
  });
  var alreadyShown=false;
  try { alreadyShown=sessionStorage.getItem('bbd-interest-seen')==='1'; } catch(e) {}
  if(!alreadyShown) setTimeout(function(){
    open();
    try { sessionStorage.setItem('bbd-interest-seen','1'); } catch(e) {}
  },5000);
})();