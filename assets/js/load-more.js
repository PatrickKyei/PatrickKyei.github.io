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
                      <div class="card has-background-black">
                          <div class="card-image">
                              <figure class="image is-4by3">
                                  <img src="${posts[i].image.path}" alt="${posts[i].image.alt}">
                              </figure>
                          </div>
                          <div class="card-content has-text-white">
                              <div class="media">
                                  <div class="media-content">
                                      <p class="title is-4 has-text-white">${posts[i].title}</p>
                                      <p class="subtitle is-6 has-text-grey">by ${posts[i].author | default: site.author}</p>
                                  </div>
                              </div>
                              <div class="content is-size-7 has-text-white">
                                  ${posts[i].excerpt}
                                  <br>
                                  <a href="${posts[i].url}" class="has-text-warning">Read Full Post</a>
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
