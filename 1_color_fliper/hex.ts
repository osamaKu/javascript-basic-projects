const hex: any[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn: HTMLButtonElement = document.getElementById(
  "btn",
) as HTMLButtonElement;
const color: HTMLSpanElement = document.querySelector(
  ".color",
) as HTMLSpanElement;

btn?.addEventListener("click", function (): void {
  let hexColor: string = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  function getRandomNumber(): number {
    return Math.floor(Math.random() * hex.length);
  }

  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});
