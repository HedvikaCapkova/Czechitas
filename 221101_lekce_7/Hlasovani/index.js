//parek v rohliku
const hlasujButton = document.querySelector("button");
hlasujButton.onclick = () => {
    fetch('https://apps.kodim.cz/daweb/hlasovani/api/poll/1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          optionId: 1,
          voterName: 'Hedvika',
        }),
      });
};

