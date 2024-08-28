document.getElementById('news-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const imageUrl = document.getElementById('image-url').value;
    const content = document.getElementById('content').value;

    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');

    newsItem.innerHTML = `
        <h3>${title}</h3>
        <img src="${imageUrl}" alt="${title}">
        <p>${content}</p>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    `;

    document.querySelector('.news-items').appendChild(newsItem);

    // Save to sessionStorage or localStorage if needed
    // Clear form fields
    document.getElementById('news-form').reset();
});
