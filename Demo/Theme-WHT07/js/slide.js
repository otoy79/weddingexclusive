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


// READ MORE COMMENT
 $('#bootstrapForm').submit(function (event) {
    event.preventDefault()
    var extraData = {}
    $('#bootstrapForm').ajaxSubmit({
        data: extraData,
        dataType: 'jsonp',  // This won't really work. It's just to use a GET instead of a POST to allow cookies from different domain.
        error: function () {
            // Submit of form should be successful but JSONP callback will fail because Google Forms
            // does not support it, so this is handled as a failure.
          // alert('Trimakasih atas do`a anda.')
         
     // window.history.back(); 
        }
    })
})

function filterArray(array) {
    return $.grep(array, function(element) {
        return element !== null && element !== undefined && element.length !== 0;
    });
}
$('.submit-comment').click(function(e) {
    let name = $('#882527044').val()
let comment = $('#653328471').val()
if (name.length>3&&comment.length>3) {
  $('.field-comments').prepend(`<div class="comment new-comment"><p class="comment-name">${name} </p><i>Just now</i><p class="comment-text">${comment}</p></div>`)

   $('.counter-coment').text( $('.counter-coment').text()*1+1)
  $('.comment-wrapper').append('<p class="comment-text">Komentar Anda tersimpan</p>')
  $('.com').hide()
  $('.com').hide()
  $('.submit-comment').hide()
   $(".submit-comment").each(function() { 
    alert("Komentar anda akan dikirim... pastikan akun anda udah login di browser anda..!! Terima Kasih..!"); 
});
}
})
fetch('https://script.google.com/macros/s/AKfycbxGdp0Lz6E8qM82I12n__XSL83W8vE6ntgVRR-v4NHJbObvj4Xxr2W02K7FtYfk4T0l/exec').then(function (response) {
 return response.json();
}).then(function (json) {

let comments = json
delete comments[0]
jQuery.each( comments, function( i, val ) {
if(val!==undefined) {
val = filterArray(val)
}
  if(val!==undefined&&val.length===3) {
  
    $('.counter-coment').text(comments.length - 1)
    const digitMonths = {
  1: 'Jan',
2: 'Feb',
      3: 'Mar',
      4: 'Apr',
      5: 'Mei',
      6: 'Jun',
      7: 'Jul',
      8: 'Ags',
      9: 'Sep',
      10: 'Okt',
      11: 'Nov',
      12: 'Des',
};
  let hh = new Date(val[0]).getHours()*1
  if(hh<10) {hh='0'+hh}
  let mm = new Date(val[0]).getMinutes()*1
  if(mm<10) {mm='0'+mm}
  let dd = new Date(val[0]).getDate()*1
  if(dd<10) {dd='0'+dd}
    let time = hh+':'+mm+', '+ dd+' '+digitMonths[new Date(val[0]).getMonth()+1]+' ' + new Date(val[0]).getFullYear(),
        name = val[1],
        comment = val[2]
    $('.field-comments').prepend(`<div class="comment"><p class="comment-name">${name} </p><i>${time}</i><p class="comment-text">${comment}</p></div>`)}

});
hideComments()
}).catch(function (err) {
 console.warn('Something went wrong.', err);
});

function hideComments() {
  let hiddenNumber = 5
if ($('.comment').length>(hiddenNumber-1)) {
let comments = $('.comment')
for (i=0;i<comments.length;i++) {let index = [i];if(index>(hiddenNumber-1)) {comments[i].classList.add('hidden')}}
  $('.field-comments').append('<a class="show-more" onclick="showMore()"> Semua Komentar</a>')
}
  }

function showMore() {
  $('.comment').removeClass('hidden')
  $('.show-more').hide()
}




