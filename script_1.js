let selectNotOpened = document.querySelector(".select-not-opened");
let selectOpened = document.querySelector(".select-opened");
let selectOptions = document.querySelectorAll(".select-option");
let news = document.querySelectorAll("article");

for (let selectOption of selectOptions) {
  selectOption.onclick = function () {
    if (selectOption.dataset.tag === "all") {
      for (let i = 0; i < news.length; i++) {
        news[i].classList.remove("hidden");
        news[i].classList.remove("centered");
      }
      news[3].style.margin = "62px 0 0 0";
      news[4].style.margin = "62px 0 0 0";
    } else {
    for (let i = 0; i < news.length; i++) {
      if (selectOption.dataset.tag !== news[i].dataset.category) {
        news[i].classList.add("hidden");
      } else {
        news[i].classList.remove("hidden");
        news[i].classList.add("centered");
        news[i].style.margin = "0 0 0 0";
      }
    }
    }
    selectOpened.style.visibility = "hidden";
    selectNotOpened.style.visibility = "visible";
  };
}

selectNotOpened.onclick = function () {
  selectNotOpened.style.visibility = "hidden";
  selectOpened.style.visibility = "visible";
};

let textarea = document.getElementById("message-1");
let button = document.getElementById("submit-message");

textarea.oninput = function () {
  if (textarea.value.length > 200) {
    textarea.style.color = "#ff0000";
    textarea.style.borderColor = "#ff0000";
    button.classList.add("disabled");
    button.disabled = true;
  } else {
    textarea.style.color = "#2e2f22";
    textarea.style.borderColor = "#2e2f22";
    button.classList.remove("disabled");
    button.disabled = false;
  }
};