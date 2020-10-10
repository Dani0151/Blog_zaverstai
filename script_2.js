let likeCounter = document.getElementById("likes-counter");
let likeButton = document.getElementById("like-button");
let liked = false;

likeButton.onclick = function () {
  if (liked) {
    likeCounter.textContent = Number(likeCounter.textContent) - 1;
    likeCounter.style.fontWeight = "normal";
    liked = false;
  } else {
    likeCounter.textContent = Number(likeCounter.textContent) + 1;
    likeCounter.style.fontWeight = "600";
    liked = true;
  }
};

let textarea = document.getElementById("message-comment");
let button = document.getElementById("submit-comment");

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

let commentsContainer = document.querySelector(".comments");
let form = document.getElementById("form-comment-2");

form.onsubmit = function () {
  event.preventDefault();

  var commentName = document.querySelector("#name-comment").value;
  var commentText = textarea.value;
  commentsContainer.innerHTML +=
    '<div class="comment"><img src="Desktop_2/image-comment-unknown.png"/><h3>' +
    commentName +
    "</h3><span>" +
    commentText +
    "</span></div>";

  document.querySelector("#name-comment").value = "";
  document.querySelector("#mail-comment").value = "";
  document.querySelector("#message-comment").value = "";
};
