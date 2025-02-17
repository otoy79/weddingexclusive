  $(document).ready(function() {
    $('#bootstrapForm').submit(function(event) {
      event.preventDefault();
      var name = $('#567219042').val();
      var comment = $('#407961063').val();
      
      if (name.length > 3 && comment.length > 3) {
        // Kirim data ke Google Forms
        $.ajax({
          type: 'POST',
          url: 'https://docs.google.com/forms/d/e/1FAIpQLSerzBQ460naHkzyugrBdeni8NgC9xrXJYNB2gvuYVLUL9s79A/formResponse',
          data: {
            'entry.567219042': name,
            'entry.407961063': comment
          },
          success: function() {
            // Tambahkan komentar baru ke dalam elemen .field-comments
            $('.field-comments').append('<div class="comment"><p class="comment-name">' + name + '</p><p class="comment-text">' + comment + '</p></div>');
            // Update counter komentar
            var counter = parseInt($('.counter-coment').text()) + 1;
            $('.counter-coment').text(counter);
            // Reset form
            $('#bootstrapForm')[0].reset();
          },
          error: function() {
            alert('Komentar Tersimpan!');
          }
        });
      } else {
        alert('Nama dan komentar harus diisi!');
      }
    });
  });


function filterArray(array) {
    return $.grep(array, function(element) {
        return element !== null && element !== undefined && element.length !== 0;
    });
}
$('.submit-comment').click(function(e) {
    let name = $('#567219042').val()
let comment = $('#407961063').val()
if (name.length>3&&comment.length>3) {
  $('.field-comments').prepend(`<div class="comment new-comment"><p class="comment-name">${name} </p><i>Just now</i><p class="comment-text">${comment}</p></div>`)

  $('.com').hide()
  $('.com2').hide()
  $('.submit-comment').hide()
  alert("Komentar anda akan tersimpan dan  anda tidak bisa menghapus..!!"); 
}
})
fetch('https://script.google.com/macros/s/AKfycbwgeWUxtizKANb-dIwlm_S8NIdYHepS8mWPqF5qJdWH6yc5itQFTtLV-RE7VeGu1c02oQ/exec').then(function (response) {
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
