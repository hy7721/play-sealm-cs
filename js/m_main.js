$(document).ready(function () {

  // 2depth accordion menu
  $('.list_q').click(function () {
    $(this).next('.list_a').stop().slideToggle(300)
    $(this).toggleClass('is_active').siblings().removeClass('is_active')
    $(this).next('.list_a').siblings('.list_a').slideUp(300)
  })

  $('.list_title').click(function () {
    $(this).next('.list_article').stop().slideToggle(300)
    $(this).toggleClass('is_active').siblings().removeClass('is_active')
    $(this).next('.list_article').siblings('.list_a').slideUp(300)
  })

  // btnTop(IE not supports. Supports all major browsers)
  window.scrollY
  document.scrollingElement.scrollTop
  document.documentElement.scrollTop
  document.querySelector('html').scrollTop

  window.addEventListener('scroll', () => {
    if (window.pageYOffset <= 0) {
      $('#btnTop').removeClass('showButton')
    } else {
      $('#btnTop').addClass('showButton')
    }
  })
  $(window).on('touchmove', function (e) {
    if (window.pageYOffset <= 0) {
      $('#btnTop').removeClass('showButton')
    } else {
      $('#btnTop').addClass('showButton')
    }
  })
  $('#btnTop').on('click touch', function () {
    $('html,body').animate({ scrollTop: 0 }, 300);
    $('#btnTop').removeClass('showButton');
  })

  // 모바일 100vh 하단 가려지는 현상 해결
  // let vh = window.innerHeight * 0.01
  // document.documentElement.style.setProperty('--vh', `${vh}px`)
  // document.querySelector('.wrap_result', '.wrap_receipt', '.wrap_error').style.height = window.innerHeight + "px";
})

// loading
// $(document).ready(function(){[]
// 	$('#preloader').hide(); //첫 시작시 로딩바를 숨겨준다.
// })
// .ajaxStart(function(){
//   $('#preloader').show(); //ajax실행시 로딩바를 보여준다.
// })
// .ajaxStop(function(){
//   $('#preloader').hide(); //ajax종료시 로딩바를 숨겨준다.
// });
$(window).on('load', function () {
  if ($('#preloader').length) {
    $('#preloader')
      .delay(1)
      .fadeOut('fast', function () {
        $(this).remove()
    })
  }
})

// layer popup
function layerPopupOpen($t) {
  $('.wrap_popup' + '.' + $t)
    .stop(true, true)
    .fadeIn(300)
  // $('body').css("overflow", "hidden");
}
function layerPopupClose() {
  $('.wrap_popup').each(function () {
    if ($(this).css('display') != 'none') $(this).stop(true, true).fadeOut(300)
  })
}

// editor(summernote)
$(document).ready(function () {
  $('.summernote').summernote({
    placeholder: '내용을 입력해주세요.',
    tabsize: 2,
    minHeight: 300,
    focus: true,

    toolbar: [
      ['style', ['style']],
      ['font', ['bold', 'underline', 'clear']],
      ['color', ['color']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['table', ['table']],
      ['insert', ['link', 'picture', 'video']],
      ['view', ['codeview', 'help']],
    ],

    popover: {
      table: [
        ['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']],
        ['delete', ['deleteRow', 'deleteCol', 'deleteTable']],
        ['custom', ['tableStyles']],
      ],

      air: [
        ['color', ['color']],
        ['font', ['bold', 'underline', 'clear']],
        ['para', ['ul', 'paragraph']],
        ['table', ['table']],
        ['insert', ['link', 'picture']],
      ],

      image: [
        ['image', ['resizeFull', 'resizeHalf', 'resizeQuarter', 'resizeNone']],
        ['float', ['floatLeft', 'floatRight', 'floatNone']],
        ['remove', ['removeMedia']],
      ],
    },

    callbacks: {
      onImageUpload: function (image) {
        let file = image[0]
        let reader = new FileReader()
        reader.onloadend = function () {
          let image = $('<img>').attr('src', reader.result)
          image.attr('width', '100%')
          $('#summernote').summernote('insertNode', image[0])
        }

        reader.readAsDataURL(file)
      },
    },

    styleTags: [
      'p',
      {
        tag: 'p',
        className: 'txt_article',
      },
    ],
    fontNames: ['Noto Sans KR', 'Apple SD Gothic Neo', 'sans-serif'],
  })
})
