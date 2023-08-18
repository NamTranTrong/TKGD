function showDiv(divNumber) {
    // Ẩn tất cả các div
    var allDivs = document.querySelectorAll('.content > div');
    for (var i = 0; i < allDivs.length; i++) {
      allDivs[i].classList.add('hidden');
    }
    
    // Hiển thị div tương ứng với lựa chọn
    var divToShow = document.getElementById('div' + divNumber);
    divToShow.classList.remove('hidden');
  }