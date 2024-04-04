// document.querySelectorAll('.transport__card-info').forEach(card => {
//   card.addEventListener('click', function () {
//     const clickedCard = this;
//     document.querySelectorAll('.transport__card-info').forEach(card => {
//       card.classList.remove('selected');

//     });
//     clickedCard.classList.add('selected');
//   });
// });

document.querySelectorAll('.food__card-info, .transport__card-info, .hero__card-info').forEach(card => {
  card.addEventListener('click', function () {
    document.querySelectorAll('.food__card-info, .transport__card-info, .hero__card-info').forEach(otherCard => {
      otherCard.classList.remove('selected');
    });
    this.classList.add('selected');
  });
});


