const leftBtn = document.querySelector(".left"),
  rightBtn = document.querySelector(".right"),
  imgsContainer = document.querySelector(".images");

// Define which img to show
let currInd = 0;
// Define array for orignal images sizes
let sizes = [];

leftBtn.addEventListener("click", () => {
  //   If reached start, move to end
  if (currInd === 0) {
    currInd = imgsContainer.children.length - 1;
    // Move all elements to left and then last to 0 (slider current)
    Array.from(imgsContainer.children).forEach((img) =>
      img.setAttribute("style", "left:-100%;")
    );
    imgsContainer.children[imgsContainer.children.length - 1].setAttribute(
      "style",
      "left:0;"
    );
  } else {
    // Move now seen to right and show previous after reducing index
    imgsContainer.children[currInd].setAttribute("style", "left:100%;");
    currInd--;
    imgsContainer.children[currInd].setAttribute("style", "left:0;");
  }

  moveImg();
});

rightBtn.addEventListener("click", () => {
  //   If reached end, move to start
  if (currInd === imgsContainer.children.length - 1) {
    currInd = 0;
    // Move all elements to right and then first to 0 (slider current)
    Array.from(imgsContainer.children).forEach((img) =>
      img.setAttribute("style", "left:100%;")
    );
    imgsContainer.children[0].setAttribute("style", "left:0;");
  } else {
    // Move now seen to left and show next after increasing index
    imgsContainer.children[currInd].setAttribute("style", "left:-100%;");
    currInd++;
    imgsContainer.children[currInd].setAttribute("style", "left:0;");
  }

  moveImg();
});

const moveImg = () => {
  // Get image ratio to resize
  // Viewport width * 0.8 (in css max-width 80vw) divided by width of current img
  // Viewport height * 0.8 (in css max-height 80vh) divided by width of current img
  let ratio = Math.min(
    (window.innerWidth * 0.8) / sizes[currInd].width,
    (window.innerHeight * 0.8) / sizes[currInd].height
  );
  // Change size of view to image size
  imgsContainer.setAttribute(
    "style",
    `--height:${sizes[currInd].height * ratio}px;--width:${
      sizes[currInd].width * ratio
    }px;`
  );
};

window.addEventListener("load", () => {
  // Loop thru images and get their actual sizes
  Array.from(imgsContainer.children).forEach((img) => {
    sizes.push({ width: img.naturalWidth, height: img.naturalHeight });
  });

  // Initial trigger - won't show any image without it
  moveImg();
});


// Back Top
let mybutton = document.getElementById("myRoll");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// AMINATE TEXT WELCOME

