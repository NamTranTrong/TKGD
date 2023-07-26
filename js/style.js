$(function(){
  $(window).scroll(function() {
    /* Lấy vị trí và kích thước của viewport */
    let viewportTop = $(window).scrollTop();
    let viewportBottom = viewportTop + $(window).height();

    /* Lặp qua từng section */
    $("section").each(function() {
      let sectionTop = $(this).offset().top;
      let sectionBottom = sectionTop + $(this).outerHeight();

      /* Kiểm tra nếu section nằm trong viewport */
      if (sectionTop < viewportBottom && sectionBottom > viewportTop) {
        /* Thêm lớp 'animate' vào section để kích hoạt hiệu ứng */
        $(this).addClass("animate");
      } else {
        /* Nếu không, loại bỏ lớp 'animate' để ẩn hiệu ứng */
        $(this).removeClass("animate");
      }
    });
  });

  /* Kích hoạt sự kiện scroll ban đầu khi trang được tải */
  $(window).scroll();
});
 

