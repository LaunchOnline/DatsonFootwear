// Animate elements when they come into view
document.addEventListener('DOMContentLoaded', () => {
    // Add animation to list items
    const listItems = document.querySelectorAll('.list-unstyled li');
    listItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 200 * (index + 1));
    });

    // Add animation to the about image
    const aboutImage = document.querySelector('.img-fluid');
    if (aboutImage) {
        aboutImage.style.opacity = '0';
        aboutImage.style.transform = 'scale(0.95)';
        aboutImage.style.transition = 'all 0.8s ease';
        
        setTimeout(() => {
            aboutImage.style.opacity = '1';
            aboutImage.style.transform = 'scale(1)';
        }, 500);
    }
}); 