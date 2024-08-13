document.addEventListener("DOMContentLoaded", function() {
    const posts = document.querySelectorAll(".post-item");
    let currentVisiblePosts = 6; // Number of posts initially visible
    const increment = 2; // Number of posts to show with each click
  
    // Initially display the first 6 posts
    for (let i = 0; i < currentVisiblePosts; i++) {
      if (posts[i]) {
        posts[i].style.display = "block";
      }
    }
  
    // Load More button functionality
    document.getElementById("load-more").addEventListener("click", function() {
      const totalPosts = posts.length;
      const nextVisiblePosts = currentVisiblePosts + increment;
  
      // Show 2 more posts
      for (let i = currentVisiblePosts; i < nextVisiblePosts; i++) {
        if (posts[i]) {
          posts[i].style.display = "block";
        }
      }
  
      currentVisiblePosts = nextVisiblePosts;
  
      // Hide Load More button if all posts are shown
      if (currentVisiblePosts >= totalPosts) {
        this.style.display = "none";
      }
    });
  });
  