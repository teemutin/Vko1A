import "./styles.css";
if (document.readyState !== "loading") {
  console.log("Doc rdy");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Doc rdy soon");
  });
}
function initializeCode() {
  const addCommentButton = document.getElementById("add-comment");

  addCommentButton.addEventListener("click", function () {
    const addComment = document.getElementById("comments");
    const review = document.getElementById("text");
    let li = document.createElement("li");
    li.textContent = review.value;
    addComment.append(li);
    /*const addComment = document.getElementById("comments");*/
    /*addComment.innerHTML = addComment.innerHTML + "hei\t";*/
  });
}

/*
document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
*/
