window.onload = (e) => {
  const resetLinearBtn = document.querySelector("#reset-linear-time");
  const resetParallelBtn = document.querySelector("#reset-parallel-time");

  const forwardLinearBtn = document.querySelector("#frwrd-linear-time");
  const forwardParallelBtn = document.querySelector("#frwrd-parallel-time");

  var linearImg = document.querySelector(".linearSlides img");
  var parallelImg = document.querySelector(".parallelSlides img");

  forwardLinearBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const current = linearImg.src;
    resetLinearBtn.disabled = false;
    if (current.match("time1")) {
      linearImg.src = "images/diagrams/linear-time2.png";
    } else if (current.match("time2")) {
      linearImg.src = "images/diagrams/linear-time3.png";
    } else if (current.match("time3")) {
      linearImg.src = "images/diagrams/linear-time4.png";
    } else {
      linearImg.src = "images/diagrams/linear-time5.png";
      forwardLinearBtn.disabled = true;
      resetLinearBtn.disabled = false;
    }
  });

  resetLinearBtn.addEventListener("click", (e) => {
    e.preventDefault();
    linearImg.src = "images/diagrams/linear-time1.png";
    resetLinearBtn.disabled = true;
    forwardLinearBtn.disabled = false;
  });

  forwardParallelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const current = parallelImg.src;
    resetParallelBtn.disabled = false;
    if (current.match("time1")) {
      parallelImg.src = "images/diagrams/parallel-time2.png";
      forwardParallelBtn.disabled = true;
      resetParallelBtn.disabled = false;
    }
  });

  resetParallelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    parallelImg.src = "images/diagrams/parallel-time1.png";
    resetParallelBtn.disabled = true;
    forwardParallelBtn.disabled = false;
  });

};






