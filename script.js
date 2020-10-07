const projects = [
  'cookie-banners-design',
  'footer-design',
  'linkedin-redesign',
  'pricing-design',
  'pricing-design-2',
  'search-filter-components',
  'share-post-ui-design',
  'support-page-ui-component',
];

const list = document.getElementById('list');

projects.forEach((project, i) => {
  const listItem = document.createElement('li');
  const link = document.createElement('a');
  link.href = `/${project}/index.html`;
  link.innerText = `${i + 1}. ${formatProjectName(project)}`;

  const img = document.createElement('img');
  img.src = `/${project}/design/desktop-design.png`;

  link.prepend(img);
  listItem.appendChild(link);
  list.appendChild(listItem);
});

function formatProjectName(name) {
  return name
    .split('-')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}
