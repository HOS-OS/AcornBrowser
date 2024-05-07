// Fetch releases from GitHub API
fetch(`https://api.github.com/repos/HOS-OS/Acorn/releases`)
  .then(response => response.json())
  .then(data => {
    const releaseList = document.getElementById('release-list');
    data.forEach(release => {
      const releaseElement = document.createElement('li');
      releaseElement.className = 'release';
      releaseElement.innerHTML = `
        <h2>${release.name}</h2>
        <div class="release-details">
          <p><strong>Published:</strong> ${new Date(release.published_at).toDateString()}</p>
          <p><strong>Download :</strong> <a href="${release.html_url}" target="_blank">${release.html_url}</a></p>
          <p><strong>Changes Published:</strong> ${release.body}</p>
        </div>
      `;
      releaseList.appendChild(releaseElement);
    });
  })
  .catch(error => {
    console.error('Error fetching GitHub releases:', error);
  });
