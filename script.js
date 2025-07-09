// Handle Comment Form
document.getElementById('commentForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const commentText = document.getElementById('comment').value;

  // Create comment object
  const newComment = {
    name,
    email,
    text: commentText,
    timestamp: new Date().toLocaleString()
  };

  // Get existing comments from localStorage or initialize empty array
  let comments = JSON.parse(localStorage.getItem('comments')) || [];

  // Add new comment to the array
  comments.push(newComment);

  // Save updated comments to localStorage
  localStorage.setItem('comments', JSON.stringify(comments));

  // Display comment
  displayComment(newComment);

  // Clear form fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('comment').value = '';
});

// Load and display saved comments on page load
window.addEventListener('load', function() {
  const savedComments = JSON.parse(localStorage.getItem('comments'));
  if (savedComments) {
    savedComments.forEach(comment => {
      displayComment(comment);
    });
  }
});

// Helper function to create and append comment HTML
function displayComment(comment) {
  const commentHTML = `
    <div class="comment">
      <div class="comment-author">
        <h4>${comment.name}</h4>
        <p>${comment.email}</p>
      </div>
      <p>${comment.text}</p>
      <small>${comment.timestamp}</small>
    </div>
  `;
  document.querySelector('.comments-list').insertAdjacentHTML('beforeend', commentHTML);
}