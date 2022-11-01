//parek v rohliku

const hlasujForm = document.querySelector("form");

hlasujForm.onsubmit = (event) => {
    event.preventDefault();
    const jmeno = document.querySelector("#jmeno").value;
    console.log(jmeno);

    fetch('https://apps.kodim.cz/daweb/hlasovani/api/poll/1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          optionId: 1,
          voterName: jmeno,
        }),
      });
};

