<template>
  <div class="home">
    <h1 class="display-1">My Learning Zone</h1>
    <BannerC />
    <div class="course-description">
      <h2>Course Description:</h2>
      <p>
        This is a self-improvement course focused on helping individuals identify and harness their unique abilities to achieve 
        personal and professional success. Participants will learn how to uncover their strengths, explore the benefits of this self-awareness,
        and gain practical insights on leveraging their strengths to enhance performance, confidence, and engagement. 
        The course empowers individuals to embrace their strengths and use them effectively in various aspects of life.
      </p>
      <p>
        This course is intended for employees as well as contractors. The estimated duration of the course is 3 hours.
      </p>
    </div>

    <div class="training-aim">
      <h2>Aim of the training:</h2>
      <p>
        The aim of the training is to help individuals gain a deeper understanding of their strengths and talents, 
        and then learn how to leverage these strengths effectively to enhance their personal and professional lives.
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
        The learning outcomes will aim to equip individuals with the knowledge and skills to understand, appreciate, and leverage their strengths,
         leading to greater personal fulfillment, career success, and positive impact on their surroundings.
      </p>
    </div>
    <CourseDetails />
  </div>
</template>

<script>
import BannerC from '@/components/BannerC.vue';
import CourseDetails from '@/components/CourseDetails.vue';
export default {
  name: 'HomeView',
  components: {
    BannerC,
    CourseDetails
  }
}
</script>

<style scoped>
/* Global styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

/* Styles for the home container */
.home {
  max-width: 800px;
  margin: 0 auto; 
  padding: 20px;
}

/* Styles for the h1 heading */
h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #2CAAE1;
}

/* Styles for the h2 headings */
h2 {
  margin-bottom: 10px;
  color: #82BB26;
}

/* Styles for the course description */
.course-description {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
}

/* Styles for the training aim */
.training-aim {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
}

/* Styles for the learning outcomes */
.learning-outcomes {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
}

.learning-outcomes ul {
  list-style-type: none;
  color: black;
}

/* Styles for the unordered list */
ul {
  list-style-type: disc;
  padding-left: 20px;
}

/* Styles for the paragraphs inside the learning outcomes */
.learning-outcomes p {
  margin-top: 10px;
}

p {
  color: #E6262A;
}
</style>