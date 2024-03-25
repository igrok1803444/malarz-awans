const input = document.querySelector(".space-count-input");
const runButton = document.querySelector(".submit-btn");

const handleClick = (event) => {
  event.preventDefault();

  const spaceCoount = Number(input.value);

  const jarCount = Math.ceil(spaceCoount / 4);

  const outputText = `<p>Liczba potrzebnych puszek: ${jarCount}</p>`;

  runButton.nextElementSibling.innerHTML = outputText;

  console.dir(runButton);

  //   runButton.insertAdjacentHTML("afterend", outputText);

  console.log(jarCount);
};

runButton.addEventListener("click" || "touch", handleClick);
