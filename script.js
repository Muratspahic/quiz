function showScreen(screenId) {
  const screens = document.querySelectorAll('.start, .hero, .transport, .food');
  screens.forEach(screen => screen.classList.add('hidden'));

  const selectedScreen = document.getElementById(screenId);
  selectedScreen.classList.remove('hidden');
}


document.getElementById('startButton').addEventListener('click', function () {
  showScreen('accommodationScreen');
});

document.getElementById('selectAccommodationButton').addEventListener('click', function () {
  showScreen('transportScreen');
});

document.getElementById('selectTransportButton').addEventListener('click', function () {
  showScreen('foodScreen');
});

document.addEventListener('DOMContentLoaded', function () {
  const cardInfos = document.querySelectorAll('.hero__card-info, .transport__card-info');

  cardInfos.forEach(function (cardInfo) {
    const image = cardInfo.querySelector('img');
    const overlay = cardInfo.querySelector('.overlay');
    const selectedIcon = cardInfo.querySelector('.selected-icon');

    const cardInfos = document.querySelectorAll('.hero__card-info, transport__card-info');

    cardInfos.forEach(cardInfo => {
      cardInfo.addEventListener('click', () => {
        document.querySelectorAll('.hero__options, .transport__options').forEach(option => {
          option.classList.remove('selected');
        });

        cardInfo.querySelector('.hero__options, .transport__options').classList.add('selected');
      });
    });

    image.addEventListener('click', function () {
      const allOverlays = document.querySelectorAll('.overlay');
      const allSelectedIcons = document.querySelectorAll('.selected-icon');

      allOverlays.forEach(function (overlay) {
        overlay.classList.remove('active');
      });

      allSelectedIcons.forEach(function (icon) {
        icon.style.display = 'none';
      });

      overlay.classList.add('active');
      selectedIcon.style.display = 'block';
    });

    document.addEventListener('click', function (event) {
      if (!cardInfo.contains(event.target)) {
        selectedIcon.style.display = 'none';
        overlay.classList.remove('active');
      }
    });
  });
});







