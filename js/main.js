'use strict'; {

  // ＊＊＊＊＊＊＊＊＊＊＊＊＊  作品背景始め  ＊＊＊＊＊＊＊＊＊＊＊＊＊

  const images = [
    'img/background/pic00.png',
    'img/background/pic01.png',
    'img/background/pic02.png',
    'img/background/pic03.png',
    'img/background/pic04.png',
    'img/background/pic05.png',
    'img/background/pic06.png',
    'img/background/pic07.png',
  ]; //*


  function setMainImage(image){
    document.querySelector('.backphoto img').src = image;
  }

  let currentNum = 0;

  function playSlideshow() {
    setTimeout(() => {
      currentNum++;
      if (currentNum === images.length) {
        currentNum = 0;
      }
      setMainImage(images[currentNum]);
      playSlideshow();
    }, 1000);
  }

  playSlideshow();



  // ＊＊＊＊＊＊＊＊＊＊＊＊＊  作品背景終り  ＊＊＊＊＊＊＊＊＊＊＊＊＊






  // 'use strict'の終わり
}
