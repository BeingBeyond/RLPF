// js/index.js

document.addEventListener('DOMContentLoaded', () => {

  // ... 这里是您已有的其他JS代码，比如navbar的逻辑，请保留 ...

  // 定义一个通用的轮播配置对象，避免代码重复
  const carouselOptions = {
    slidesToScroll: 1,
    slidesToShow: 4,    // 在大屏幕上默认显示4个，这样滑动效果更明显
    loop: true,
    pagination: true,
    navigation: true,
    breakpoints: [{
      changePoint: 1024, // 桌面和平板
      slidesToShow: 3,
      slidesToScroll: 1,
    }, {
      changePoint: 769, // 平板竖屏
      slidesToShow: 2,
      slidesToScroll: 1
    }, {
      changePoint: 480, // 手机
      slidesToShow: 1,
      slidesToScroll: 1
    }]
  };

  // 初始化第一个轮播 (上排)
  bulmaCarousel.attach('#carousel-row-1', carouselOptions);

  // 初始化第二个轮播 (下排)
  bulmaCarousel.attach('#carousel-row-2', carouselOptions);

}); 