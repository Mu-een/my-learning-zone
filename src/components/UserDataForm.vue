<template>
  <div class="heading">
    <h2>Data Capture Form: User Information</h2>
    <p>Please take a moment to fill in the form below. Your input is valuable to us!</p>
  </div>
  <div>
    <form class="user-form" action="https://formspree.io/f/mrgwbwag" method="post">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" required name="name">
      </div>

      <div class="form-group">
        <label for="surname">Surname:</label>
        <input type="text" id="surname" v-model="formData.surname" required name="surname">
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required name="email">
      </div>

      <div class="form-group">
        <label for="date">Date:</label>
        <input type="date" id="date" v-model="formData.date" required name="date">
      </div>

      <div class="form-group">
        <label for="time">Time:</label>
        <input type="time" id="time" v-model="formData.time" required name="time">
      </div>

      <div class="form-group">
        <label>Content Viewed:</label>
        <input type="checkbox" v-model="formData.viewed" id="status" name="status"> 
      </div>

      <button type="submit" class="submit-button">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserDataForm',
  data() {
    return {
      formData: {
        name: '',
        surname: '',
        email: '',
        date: '',
        time: '',
        viewed: false // Default status is false (not viewed)
      }
    };
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Outfit&display=swap');
/* Basic styles for the form */
.user-form {
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #000;
  border-radius: 15px;
  font-family: Arial, sans-serif;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  font-family: 'Zilla Slab', serif;
  font-size: 17px;

}

input {
  width: 100%;
  padding: 5px;
  border: 1px solid #000;
  border-radius: 3px;
  font-family: 'Outfit', sans-serif;

}

.submit-button {
  background-color: #fff;
  color: #000;
  border: black 1px solid;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-family: 'Outfit', sans-serif;
  font-size: 20px;

}

.submit-button:hover {
  background-color: #82BB26;
  color: #fff;
  scale: 1.1;
}

.heading {
  font-family: 'Zilla Slab', serif;
  margin-top: 40px;
  margin-bottom: 30px;
}

.heading p{
  font-family: 'Outfit', sans-serif;
  font-size: 18px;

}
</style>
