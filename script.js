document.addEventListener('DOMContentLoaded', function () {
  const cardInfos = document.querySelectorAll('.hero__card-info');

  cardInfos.forEach(function (cardInfo) {
    const image = cardInfo.querySelector('img');
    const overlay = cardInfo.querySelector('.overlay');
    const selectedIcon = cardInfo.querySelector('.selected-icon');

    const selectButton = document.getElementById('selectAccommodationButton');

    cardInfo.addEventListener('click', function () {
      document.querySelectorAll('.hero__options').forEach(option => {
        option.classList.remove('selected');
      });
      cardInfo.querySelector('.hero__options').classList.add('selected');

      selectButton.style.backgroundColor = '#5181FC';
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


document.addEventListener('DOMContentLoaded', function() {
  const transportCards = document.querySelectorAll('.transport__card-info, .food__card-info');
    transportCards.forEach(card => {
        card.addEventListener('click', function() {
          transportCards.forEach(card => {
            card.classList.remove('selected');
            card.querySelector('.transport__options, .food__options').style.color = '';
          });

          this.classList.add('selected');
          const options = this.querySelector('.transport__options, .food__options');
          if (this.classList.contains('selected')) {
            options.style.color = 'blue';
          }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
  const cardInfos = document.querySelectorAll('.transport__card-info');

  cardInfos.forEach(function (cardInfo) {
    const image = cardInfo.querySelector('img');
    const overlay = cardInfo.querySelector('.overlay');
    const selectedIcon = cardInfo.querySelector('.selected-icon');

    cardInfo.addEventListener('click', function () {
      document.querySelectorAll('.transport__options').forEach(option => {
        option.classList.remove('selected');
      });
      cardInfo.querySelector('.transport__options').classList.add('selected');

      const buttonId = cardInfo.parentElement.parentElement.querySelector('button').id;
      const selectButton = document.getElementById(buttonId);
      selectButton.style.backgroundColor = '#D73780';
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


document.addEventListener('DOMContentLoaded', function () {
  const cardInfos = document.querySelectorAll('.food__card-info');

  cardInfos.forEach(function (cardInfo) {
    const image = cardInfo.querySelector('img');
    const overlay = cardInfo.querySelector('.overlay');
    const selectedIcon = cardInfo.querySelector('.selected-icon');

    cardInfo.addEventListener('click', function () {
      document.querySelectorAll('.food__options').forEach(option => {
        option.classList.remove('selected');
      });
      cardInfo.querySelector('.food__options').classList.add('selected');

      const buttonId = cardInfo.parentElement.parentElement.querySelector('button').id;
      const selectButton = document.getElementById(buttonId);
      selectButton.style.backgroundColor = '#61AB04';
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


document.addEventListener("DOMContentLoaded", function() {
  const startButton = document.getElementById('startButton');
  const selectAccommodationButton = document.getElementById('selectAccommodationButton');
  const selectTransportButton = document.getElementById('selectTransportButton');
  const selectFoodButton = document.getElementById('selectFoodButton');
  const savedOptionsJSON = localStorage.getItem('selectedOptions');
  const savedOptions = savedOptionsJSON ? JSON.parse(savedOptionsJSON) : {
    accommodation: null,
    transport: null,
    food: null
  };


  function updateLocalStorage(options) {
    localStorage.setItem('selectedOptions', JSON.stringify(options));
  }


  function showOptions() {
    const totalPrice = savedOptions.accommodation + savedOptions.transport + savedOptions.food;
    alert("Selected options:\nAccommodation: $" + savedOptions.accommodation + "\nTransport: $" + savedOptions.transport + "\nFood: $" + savedOptions.food + "\n\nTotal: $" + totalPrice);
  }


  function hideAndShowScreens(hideScreenId, showScreenId) {
    document.getElementById(hideScreenId).classList.add('hidden');
    document.getElementById(showScreenId).classList.remove('hidden');
  }


  startButton.addEventListener('click', function() {
    document.querySelector('.start').classList.add('hidden');
    document.getElementById('accommodationScreen').classList.remove('hidden');
  });

    selectAccommodationButton.addEventListener('click', function() {
      const selectedAccommodation = document.querySelector('.hero__card-info.selected');
      if (selectedAccommodation) {
        savedOptions.accommodation = parseInt(selectedAccommodation.querySelector('.hero__options span:nth-child(2)').textContent.replace('$', ''));
        updateLocalStorage(savedOptions);
        hideAndShowScreens('accommodationScreen', 'transportScreen');
      }
    });

    selectTransportButton.addEventListener('click', function() {
      const selectedTransport = document.querySelector('.transport__card-info.selected');
      if (selectedTransport) {
        savedOptions.transport = parseInt(selectedTransport.querySelector('.transport__options span:nth-child(2)').textContent.replace('$', ''));
        updateLocalStorage(savedOptions);
        hideAndShowScreens('transportScreen', 'foodScreen');
      }
    });

    selectFoodButton.addEventListener('click', function() {
      const selectedFood = document.querySelector('.food__card-info.selected');
      if (selectedFood) {
        savedOptions.food = parseInt(selectedFood.querySelector('.food__options span:nth-child(2)').textContent.replace('$', ''));
        updateLocalStorage(savedOptions);
        showOptions();
      }
    });


  const cardInfos = document.querySelectorAll('.hero__card-info, .transport__card-info, .food__card-info');

    cardInfos.forEach(card => {
      card.addEventListener('click', function() {
        cardInfos.forEach(card => card.classList.remove('selected'));
        card.classList.add('selected');
      });
    });
});









