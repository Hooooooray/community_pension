<template>
  <div class="home">
    <video class="fullscreen-video" autoplay loop>
      <source src="images/index-video.mp4" type="video/mp4">
    </video>
    <div class="home-page-block">
      <div class="home-page-block-title">
        社区养老服务平台
      </div>
      <div class="home-page-block-subtitle">
        我们致力于为老年人提供更智能更快捷的养老服务
      </div>
    </div>
    <div class="slogan">
      <div class="slogan-title">爱心无限，温馨陪伴</div>
      <div class="slogan-subtitle">INFINITE LOVE, WARM COMPANY</div>
    </div>
  </div>
</template>

<style scoped>
.home {
  min-height: 410px;
  height: 100vh;
  /* overflow: hidden; */

  .home-page-block {
    width: 100%;
    height: 207px;
    padding-top: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .home-page-block-title {
      font-size: 32px;
      color: #1f2329;
      line-height: 41px;
      font-weight: bold;
      letter-spacing: 6px;
    }

    .home-page-block-subtitle {
      font-size: 16px;
      line-height: 1.5;
      color: #646a73;
      margin-top: 30px;
      letter-spacing: 6px;
    }
  }
}

.fullscreen-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slogan {
  position: absolute;
  min-width: 990px;
  width: 100%;
  top: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

  .slogan-title {
    font-weight: 800;
    font-size: 54px;
  }

  .slogan-subtitle {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 23px;
    margin-top: 10px;
    opacity: 0.8;
  }
}
</style>
