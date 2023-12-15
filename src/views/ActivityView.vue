<template>
  <div class="activity">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="images/zijie/DM_20231214205634_031.png" alt=""></div>
        <div class="swiper-slide"><img src="images/zijie/DM_20231214205634_032.jpg" alt=""></div>
        <div class="swiper-slide"><img src="images/zijie/DM_20231214205634_033.jpg" alt=""></div>
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination">
      </div>
    </div>
  </div>
</template>

<script>

import Swiper from 'swiper';
import 'swiper/css/swiper.min.css'
export default {
  mounted() {
    new Swiper('.swiper-container', {
      direction: 'vertical',
      effect: 'slide',
      speed: 600,
      mousewheel: true,
      slidesPerView: 1,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          // 使用相对路径指向 images/ico 文件夹下的图像文件
          return `<img class="${className}" src="images/ico/ico${index + 1}.png" alt="Bullet ${index + 1}">`;
        },
      },
      on: {
        slideChangeTransitionStart: function () {
          // 滑动开始时，将所有 slide 的透明度设为 0
          Array.from(this.slides).forEach(slide => {
            slide.style.opacity = 0;
          });
        },
        slideChangeTransitionEnd: function () {
          // 滑动结束时，将所有 slide 的透明度恢复为 1
          Array.from(this.slides).forEach(slide => {
            slide.style.opacity = 1;
          });
        },
      }
    })
  }
}

</script>

<style>
.swiper-container {
  width: 100%;
  max-height: calc(100vh - 64px);
  min-height: 590px;
  margin: 0 auto;

  .swiper-slide {
    width: 100%;
    min-width: 1290px;
    min-height: 590px;
    max-height: calc(100vh - 64px);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      min-height: 590px;
      /* height: calc(100vh - 64px); */
      /* height: 110vh; */
    }
  }

  .swiper-pagination-bullets {
    right: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    .swiper-pagination-bullet {
      background-color: antiquewhite;
      margin: 10px 0;
      transition: all 0.3s ease;
      width: 30px;
      height: 30px;
      opacity: .5;
    }

    .swiper-pagination-bullet:hover {
      opacity: 1;
      width: 45px;
      height: 45px;
    }

    .swiper-pagination-bullet-active {
      opacity: 1;
      width: 45px;
      height: 45px;
    }
  }



}

.swiper-slide {
  opacity: 0;
  transition: opacity 0.15s;

}

.swiper-slide-active {
  opacity: 1;
}
</style>