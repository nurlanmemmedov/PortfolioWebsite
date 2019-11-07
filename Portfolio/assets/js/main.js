$(document).ready(function () {
  $(".owl-main").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
  });

  $(".owl-edu").owlCarousel({
    items: 4,
    loop: true,
    nav: true,
    autoplay: true,
    navText: ["<i class='fas fa-arrow-circle-left fa-2x'></i>", "<i class='fas fa-arrow-circle-right fa-2x'></i>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1140: {
        items: 4,
      }
    }
  });

  $(".owl-images").owlCarousel({
    items: 4,
    loop: true,
    nav: true,
    autoplay: true,
    navText: ["<i class='fas fa-arrow-circle-left fa-2x'></i>", "<i class='fas fa-arrow-circle-right fa-2x'></i>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
      1140: {
        items: 3,
      }
    }
  });
  
  $(function () {
    $('.chart').easyPieChart({
    });
  });


  $('.button-menu').on('click', () => {
    $('.menu').toggleClass('active');
    $('.button-menu').toggleClass('rot');
  })

  $('.menu-2').css('padding-top', $('header').innerHeight());
  $('.button-menu-2').on('click', () => {
    $('.menu-2').toggleClass('active');
    $('.button-menu-2').toggleClass('rot');
  })


  var prevscroll = $('header').innerHeight();
  $('.scrolltop').css('display', 'none')
  $(document).scroll(() => {
    if ($(document).scrollTop() > prevscroll) {
      $('header').css('transform', 'translateY(-100%')
      prevscroll = $(document).scrollTop();
    } else {
      $('header').css('transform', 'translateY(0px)')
      prevscroll = $(document).scrollTop();
    }
    if ($(document).scrollTop() > 614 + $('header').innerHeight()) {
      $('.scrolltop').css('display', 'block')
    }
    else {
      $('.scrolltop').css('display', 'none');
    }

  })

  $('.scrolltop').click(() => {
    $('html').animate({ scrollTop: 0 }, 1000);
    return false;
  })
// if (localStorage.getItem("class") != null) {
    //     classes = JSON.parse(localStorage.getItem("class"));
    // }
  



    
  
  // function lusers() {
  //   var classes = [];
  //   var clas = JSON.stringify(classes);
  //   localStorage.setItem("class", clas);

    $('.dark-mode').click(() => {
      if ($('.bg-change').hasClass('bg-white')) {
        $('.circul').css('background-color', 'black');
        $('.circul').css('transform', ` translate(${$('.dark-mode').width() - $('.circul').width()}px)`);
        $('.bg-change').removeClass('bg-white');
        $('.bg-change').addClass('bg-black');
        $('.a-color').removeClass('a-black');
        $('.a-color').addClass('a-white');
        $('.stick').css('background-color', 'white');
        $('.page-part').addClass('page-part-white');
        $('.page-part').removeClass('page-part-black');
        // classes.shift(classes[1]);
        // classes.unshift(document.querySelector('.bg-change').classList);
        // console.log(classes);
      } else {
        $('.circul').css('transform', ' translateX(0px)');
        $('.circul').css('background-color', 'white');
        $('.bg-change').removeClass('bg-black');
        $('.bg-change').addClass('bg-white');
        $('.a-color').removeClass('a-white');
        $('.a-color').addClass('a-black');
        $('.stick').css('background-color', 'black');
        $('.page-part').addClass('page-part-black');
        $('.page-part').removeClass('page-part-white');
        // classes.shift(classes[1]);
        // classes.unshift(document.querySelector('.bg-change').classList);
        // console.log(classes);

      }
    })
//     // console.log(classes);
// }
// lusers();

 






  $('.about').click(() => {
    $('html').animate({ scrollTop: $('#about').offset().top }, 1000);
    return false;
  })
  $('.resume').click(() => {
    $('html').animate({ scrollTop: $('#resume').offset().top }, 1000);
    return false;
  })
  $('.projects').click(() => {
    $('html').animate({ scrollTop: $('#projects').offset().top }, 1000);
    return false;
  })
  $('.skills').click(() => {
    $('html').animate({ scrollTop: $('#skills').offset().top }, 1000);
    return false;
  })
  $('.news').click(() => {
    $('html').animate({ scrollTop: $('#news').offset().top }, 1000);
    return false;
  })

  var visualBlog = 1;
  const blog = document.querySelectorAll('.blog-items');
  for (let i = 0; i < blog.length; i++) {
    if (i >= visualBlog) {
      blog[i].style.display = 'none'
    }
  }
  $('.load-blog').on('click', () => {
    visualBlog = visualBlog + 1;
    for (let i = 0; i < blog.length; i++) {
      if (i < visualBlog) {
        blog[i].style.display = 'flex'
      }

      if (blog.length == visualBlog) {
        $('.load-blog').html('Show less');
        $('.load-blog').css('background-color', 'orange')

      } else if (blog.length < visualBlog) {
        visualBlog = 1;
        for (let i = 0; i < blog.length; i++) {
          if (i >= visualBlog) {
            blog[i].style.display = 'none'
          }
        }
      } else if (visualBlog == 1) {
        $('.load-blog').html('load-more');
        $('.load-blog').css('background-color', 'black')
      }
    }
  })



  var visualProject = 1;
  const project = document.querySelectorAll('.projects-main-page ');
  
  for (let k = 0; k < project.length; k++) {
    if (k >= visualProject) {
      project[k].style.display ='none';
    }
  }
  $('.load-project').on('click', () => {
    visualProject = visualProject + 1;
    for (let k = 0; k < project.length; k++) {
      if (k < visualProject) {
        project[k].style.display = 'flex'
      }

      if (project.length == visualProject) {
        $('.load-project').html('Show less');
        $('.load-project').css('background-color', 'orange')

      } else if (project.length < visualProject) {
        visualProject = 1;
        for (let k = 0; k < project.length; k++) {
          if (k >= visualProject) {
            project[k].style.display = 'none'
          }
        }
      } else if (visualProject == 1) {
        $('.load-project').html('load-more');
        $('.load-project').css('background-color', 'black')
      }
    }
  })
})
