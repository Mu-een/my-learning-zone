<template>
  <div class="banner">
    <img src="../assets/5WvBVN1e2nJd4C_m_example-header-image.jpg" alt="banner-img">
  </div>
</template>

<script>
export default {
  name: 'BannerC',
};
</script>

<style scoped>
.banner {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  overflow: hidden;
}

.banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-bottom: 30px;
}

</style>