const viewer=document.querySelector('dialog');
const expanded=viewer.querySelector('img');
document.querySelectorAll('[data-image]').forEach(button=>button.addEventListener('click',()=>{expanded.src=button.dataset.image;expanded.alt=button.querySelector('img').alt;viewer.showModal()}));
viewer.querySelector('.close').addEventListener('click',()=>viewer.close());
viewer.addEventListener('click',event=>{if(event.target===viewer){const rect=viewer.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)viewer.close()}});
