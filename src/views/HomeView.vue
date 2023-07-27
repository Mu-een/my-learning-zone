<template>
  <div class="home">
    <h1 class="display-1">My Learning Zone</h1>
    <BannerC id ="banner-component"/>
      <div class="course-description">
        <h2>What am I learning about?</h2>
        <p>
          This is a self-improvement course focused on helping you identify and harness your unique abilities to achieve 
          personal and professional success. 
        </p>
        <p>You will learn how to uncover your strengths, explore the benefits of this self-awareness.
          Gain practical insights on leveraging your strengths to enhance performance, confidence, and engagement. 
          The course empowers yourself to embrace your strengths and use them effectively in various aspects of life.</p>
        <p>
          This course is intended for employees as well as contractors. The estimated duration of the course is 1 hour.
        </p>
      </div>
    

    <div class="training-aim">
      <h2>What is the aim of the training?</h2>
      <p>
        The aim of the training is to help you gain a deeper understanding of your strengths and talents, 
        and then learn how to leverage these strengths effectively to enhance your personal and professional lives.
      </p>
    </div>

    <div class="learning-outcomes">
      <h2>What are the learning outcomes?</h2>
      <ul>
        <li>Self-awareness</li>
        <li>Increased confidence</li>
        <li>Career alignment</li>
        <li>Effective communication</li>
        <li>Personal growth</li>
      </ul>
      <p>
        The learning outcomes will aim to equip you with the knowledge and skills to understand, appreciate, and grasp your strengths,
         leading to greater personal fulfillment, career success, and positive impact on your surroundings.
      </p>
    </div>
    <CourseDetails/>
    <img src="../assets/vWBmqIzRwJxFAjFA_CM-SS-01.jpg" alt="course-img" class="course-image">
    <UserDataForm/>
  </div>
  <FooterC/>
</template>

<script>
import BannerC from '@/components/BannerC.vue';
import CourseDetails from '@/components/CourseDetails.vue';
import UserDataForm from '@/components/UserDataForm.vue';
import FooterC from '@/components/FooterC.vue';
export default {
  name: 'HomeView',
  components: {
    BannerC,
    CourseDetails,
    UserDataForm,
    FooterC
  },
  mounted() {
    const bannerComponent = document.getElementById('banner-component');
    window.addEventListener('scroll', () => {
      const distanceScrolled = window.scrollY;
      bannerComponent.style.transform = `translateY(-${distanceScrolled}px)`;
    });
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Outfit&display=swap');
body {
  margin: 0;
  padding: 0;
}


.home {
  max-width: 800px;
  margin: 0 auto; 
  padding: 20px;
}


h1 {
  text-align: center;
  margin-bottom: 20px;
  color: rgba(0, 0, 0, 0.849);
  font-family: 'Zilla Slab', serif;
}


h2 {
  margin-bottom: 10px;
  color: #82BB26;
  font-family: 'Zilla Slab', serif;
}


.course-description {
  border: 1px solid #000;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 15px;
}


.training-aim {
  border: 1px solid #000;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 15px;
}


.learning-outcomes {
  border: 1px solid #000;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 15px;
}

.learning-outcomes ul {
  list-style-type: none;
  color: black;
  font-family: 'Outfit', sans-serif;
  font-size: 17px;
}


ul {
  list-style-type: disc;
  padding-left: 20px;
}

.learning-outcomes p {
  margin-top: 10px;
}

p {
  color: #000000c5;
}

.course-description p, .training-aim p, .learning-outcomes p {
  text-align: left;
  font-family: 'Outfit', sans-serif;
  font-size: 17px;
}  

.banner {
  position: sticky;
  top: 70px;
  left: 0;
  width: 100%;
  z-index: 1000; 
}

.banner {
  transition: transform 0.3s ease;
}

.course-image {
  width: 100%;
  max-width: 800px; 
  display: block; 
  margin: 0 auto; 
  border-radius: 15px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
}

</style>