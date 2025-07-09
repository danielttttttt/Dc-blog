// Handle Comment Form
document.getElementById('commentForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const commentText = document.getElementById('comment').value;

  const comment = `
    <div class="comment">
      <div class="comment-author">
        <h4>${name}</h4>
        <p>${email}</p>
      </div>
      <p>${commentText}</p>
    </div>
  `;

  document.querySelector('.comments-list').insertAdjacentHTML('beforeend', comment);

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('comment').value = '';
});

// Fetch Blog Posts
async function fetchPosts() {
  const container = document.getElementById('posts-container');

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts ');
    const posts = await response.json();

    // Display first 5 posts
    posts.slice(0, 5).forEach(post => {
      const postHTML = `
        <div class="post">
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        </div>
      `;
      container.insertAdjacentHTML('beforeend', postHTML);
    });
  } catch (error) {
    container.innerHTML = `<p class="error">Failed to load posts. Please try again later.</p>`;
    console.error('Error fetching posts:', error);
  }
}

// Run on Page Load
fetchPosts();