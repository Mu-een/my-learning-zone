<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-item">
                <p>Support Contact: mueenslam@gmail.com</p>
            </div>
            <div class="footer-item">
                <p>&copy; 2023 My Learning Zone</p>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "FooterC"
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@700&family=Raleway:wght@600&display=swap');

.footer {
    background-color: #f0f0f0;
    padding: 20px;
    text-align: center;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    font-family: 'Raleway', sans-serif;
    display: flex; 
    justify-content: space-between; 
    flex-wrap: wrap; 
}

.footer-item {
    flex: 1; 
    margin: 0 10px; ;
}
</style>
