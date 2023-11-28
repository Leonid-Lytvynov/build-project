
// const buildNav = document.querySelector('.build-nav')
// const buildInfo = document.querySelector('.build-info')

// function reportWindowSize() {
//    const buildNavWidth = buildNav.offsetWidth;
//    const buildInfoWidth = buildInfo.offsetWidth;

//    const calcWidth = buildNavWidth - buildInfoWidth - 50;
//    buildInfo.style.right = calcWidth + "px";
// }
// reportWindowSize()
// window.onresize = reportWindowSize;


const buildInstall = () => {

   const buildItem = document.querySelectorAll('.build-links path');
   const buildItemAdress = document.querySelector('#street');
   const buildItemStages = document.querySelector('#stages');
   const buildItemFlats = document.querySelector('#flats');

   const buildItemFloor = document.querySelector('#floor');
   const buildItemFreeFlats = document.querySelector('#all-flats');
   const buildItemSoldFlats = document.querySelector('#sold-flats');
   const buildItemActionFlats = document.querySelector('#action-flats');
   const buildItemReservationFlats = document.querySelector('#reservation-flats');

   buildItem.forEach(item => {
      const getItemAdress = item.getAttribute('data-adress');
      const getItemStages = item.getAttribute('data-stages');
      const getItemFlats = item.getAttribute('data-flats');

      const getItemFloor = item.getAttribute('data-floor');
      const getItemFreeFlats = item.getAttribute('data-all-flats');
      const getItemSoldFlats = item.getAttribute('data-sold-flats');
      const getItemActionFlats = item.getAttribute('data-action-flats');
      const getItemReservationFlats = item.getAttribute('data-reservation-flats');

      if (Number(getItemFlats) === 0) {
         item.classList.add('sold');
      };

      const soldItem = document.querySelectorAll('.sold')

      soldItem.forEach((sold, index) => {
         // sold.setAttribute('data-modal', 'modal-' + (index + 1));
         sold.setAttribute('data-modal', 'sold-modal');
      });

      item.addEventListener('mouseover', () => {
         function getAttr(item, value) {
            item.innerHTML = value;
         }

         if (document.querySelector('.build-1')) {
            soldItem ? getAttr(buildItemFloor, 0) : null;
            soldItem ? getAttr(buildItemFlats, 0) : null;
            soldItem ? getAttr(buildItemSoldFlats, 8) : null;
            soldItem ? getAttr(buildItemActionFlats, 0) : null;
            soldItem ? getAttr(buildItemReservationFlats, 0) : null;
         }

         getItemAdress ? getAttr(buildItemAdress, getItemAdress) : null;
         getItemStages ? getAttr(buildItemStages, getItemStages) : null;
         getItemFlats ? getAttr(buildItemFlats, getItemFlats) : null;

         getItemFloor ? getAttr(buildItemFloor, getItemFloor) : null;
         getItemFreeFlats ? getAttr(buildItemFreeFlats, getItemFreeFlats) : null;
         getItemSoldFlats ? getAttr(buildItemSoldFlats, getItemSoldFlats) : null;
         getItemActionFlats ? getAttr(buildItemActionFlats, getItemActionFlats) : null;
         getItemReservationFlats ? getAttr(buildItemReservationFlats, getItemReservationFlats) : null;
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

   closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', onCloseModal)
   });

   function onCloseModal() {
      const closeBtn = document.querySelector('.show-modal');
      closeBtn.classList.remove('show-modal');
   };

   window.addEventListener('keydown', (event) => {
      event.key === "Escape" ? onCloseModal() : null
   });

   window.onclick = (event) => customModal.forEach(item => {
      event.target == item ? onCloseModal() : false;
   });
};
document.querySelector('.custom-modal') ? modalInstall() : null;