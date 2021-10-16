let text = document.getElementById("textarea");
document.getElementById("upper-case").addEventListener("click", function () {
  text.value = text.value.toUpperCase();
});
document.getElementById("lower-case").addEventListener("click", function () {
  text.value = text.value.toLowerCase();
});
document.getElementById("proper-case").addEventListener("click", function () {
  let textArr = text.value.split(" ");
  text.value = "";
  for (i = 0; i < textArr.length; i++) {
    text.value +=
      textArr[i].charAt(0).toUpperCase() +
      textArr[i].slice(1).toLowerCase() +
      " ";
  }
  text.value = text.value.slice(0, -1);
});
document.getElementById("sentence-case").addEventListener("click", function () {
  let textArr = text.value.split(". ");
  text.value = "";
  for (i = 0; i < textArr.length; i++) {
    text.value +=
      textArr[i].charAt(0).toUpperCase() +
      textArr[i].slice(1).toLowerCase() +
      ". ";
  }
  text.value = text.value.slice(0, -2);
});
document
  .getElementById("save-text-file")
  .addEventListener("click", function () {
    download("text", text.value);
  });
function download(filename, text) {
  let element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
