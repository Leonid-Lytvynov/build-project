

const buildInstall = () => {

   const buildItem = document.querySelectorAll('.build-links path');
   const buildItemAdress = document.querySelector('#street');
   const buildItemStages = document.querySelector('#stages');
   const buildItemFlats = document.querySelector('#flats');

   buildItem.forEach(item => {
      const getItemAdress = item.getAttribute('data-adress');
      const getItemStages = item.getAttribute('data-stages');
      const getItemFlats = item.getAttribute('data-flats');

      if (Number(getItemFlats) === 0) {
         item.classList.add('sold');
      };

      const soldItem = document.querySelectorAll('.sold')

      soldItem.forEach((sold, index) => {
         // sold.setAttribute('data-modal', 'modal-' + (index + 1));
         sold.setAttribute('data-modal', 'sold-modal');
      });

      item.addEventListener('mouseover', () => {
         // buildItemAdress.innerHTML = getItemAdress;
         // buildItemStages.innerHTML = getItemStages;
         // buildItemFlats.innerHTML = getItemFlats;
         function getAttr(item, value) {
            item.innerHTML = value;
         }
         getAttr(buildItemAdress, getItemAdress);
         getAttr(buildItemStages, getItemStages);
         getAttr(buildItemFlats, getItemFlats);
      })
      item.addEventListener('click', (event) => {
         if (item.closest('.sold')) {
            event.preventDefault();
         }
      });
   });
}
document.querySelector('.build-links') ? buildInstall() : null;

const modalInstall = () => {

   const callModalBtn = document.querySelectorAll('[data-modal]');
   const customModal = document.querySelectorAll('.custom-modal');
   const closeModal = document.querySelectorAll('.close-modal');

   customModal.forEach((item, index) => {
      // item.setAttribute('id', 'modal-' + (index + 1));
      item.setAttribute('id', 'sold-modal');
   });

   callModalBtn.forEach((item, index) => {
      item.addEventListener('click', () => {
         // const callModal = document.querySelector('#modal-' + (index + 1))
         const callModal = document.querySelector('#sold-modal')
         callModal.classList.add('show-modal');
      });
   });

   closeModal.forEach(item => {
      item.addEventListener('click', () => {
         const closeBtn = document.querySelector('.show-modal');
         closeBtn.classList.remove('show-modal');
      })
   });
};
document.querySelector('.custom-modal') ? modalInstall() : null;