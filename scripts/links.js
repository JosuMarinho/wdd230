const baseURL = "https://josumarinho.github.io/wdd230/";
const linksURL = "data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.weeks);
}

function displayLinks(weeks) {
  const navList = document.querySelector('.nav-list');

  weeks.forEach(week => {
    const weekItem = document.createElement('li');
    const weekTitle = document.createElement('span');
    weekTitle.textContent = week.week;
    weekItem.appendChild(weekTitle);

    const linksList = document.createElement('ul');
    week.links.forEach(link => {
      const listItem = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = baseURL + link.url;
      anchor.textContent = link.title;
      listItem.appendChild(anchor);
      linksList.appendChild(listItem);
    });

    weekItem.appendChild(linksList);
    navList.appendChild(weekItem);
  });
}

getLinks();
