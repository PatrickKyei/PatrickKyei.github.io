document.addEventListener("DOMContentLoaded", function() {
    const loadMoreButton = document.getElementById("load-more");
    let currentLimit = 6; // Initial posts limit
    const postsPerBatch = 6; // Number of posts to load on each click
    const postsPerRow = 3; // Number of posts per row
  
    if (loadMoreButton) {
      loadMoreButton.addEventListener("click", function() {
        const postsContainer = document.getElementById("posts-container");
        const posts = {{ site.posts | jsonify }};
        let newPosts = '';
  
        for (let i = currentLimit; i < currentLimit + postsPerBatch && i < posts.length; i++) {
          if ((i - currentLimit) % postsPerRow === 0) {
            newPosts += `<div class="columns is-multiline">`;
          }
  
          newPosts += `
            <div class="column is-one-third-desktop is-half-tablet is-full-mobile">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="${posts[i].image}" alt="${posts[i].title}">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">${posts[i].title}</p>
                      <p class="subtitle is-6">by ${posts[i].author}</p>
                    </div>
                  </div>
                  <div class="content">
                    ${posts[i].excerpt}
                    <br>
                    <a href="${posts[i].url}">Read Full Post</a>
                    <br>
                    <time datetime="${posts[i].date}">${new Date(posts[i].date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                  </div>
                </div>
              </div>
            </div>
          `;
  
          if ((i - currentLimit) % postsPerRow === postsPerRow - 1 || i === currentLimit + postsPerBatch - 1 || i === posts.length - 1) {
            newPosts += `</div>`;
          }
        }
  
        postsContainer.insertAdjacentHTML('beforeend', newPosts);
        currentLimit += postsPerBatch;
  
        if (currentLimit >= posts.length) {
          loadMoreButton.style.display = 'none';
        }
      });
    }
  });
  