// Start directory move to different pages

function goToPage(link) {
  $("[data-page]").hide()
  $("[data-page="+link+"]").show()

// Add class active in navbar

  $('li.nav-item').each(function(){
    var href = $(this).find('a.nav-link').attr('href')
    if (href === link) 
      $(this).addClass('active')
    else
      $(this).removeClass('active')
  })
}

// Listen for click events on <a>

$("a").click(function (event) {
  event.preventDefault();
  var href = ($(this).attr("href"))
  //goToPage($(this).attr("href"))
  goToPage(href);
})

// Return Home when clicking on logo

$(".navbar-brand").click(function (event) {
  event.preventDefault();
  goToPage("home");
})
