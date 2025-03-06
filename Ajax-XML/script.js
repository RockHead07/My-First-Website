document.getElementById('loadData').addEventListener('click', function () {
  fetch('data.xml')
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data, "application/xml");

      const moviesTbody = document.getElementById('movies');
      moviesTbody.innerHTML = ''; 

      const filmList = xmlDoc.getElementsByTagName('film');
      for (let i = 0; i < filmList.length; i++) {
        const film = filmList[i];

        const name = film.getElementsByTagName('name')[0]?.textContent || 'N/A';
        const duration = film.getElementsByTagName('duration')[0]?.textContent || 'N/A';
        const genre = film.getElementsByTagName('genre')[0]?.textContent || 'N/A';
        const director = film.getElementsByTagName('director')[0]?.textContent || 'N/A';
        const year = film.getElementsByTagName('year')[0]?.textContent || 'N/A';
        const classification = film.getElementsByTagName('classification')[0]?.textContent || 'N/A';

        const row = `
          <tr>
            <td>${i + 1}</td>
            <td>${name}</td>
            <td>${duration}</td>
            <td>${genre}</td>
            <td>${director}</td>
            <td>${year}</td>
            <td>${classification}</td>
          </tr>
        `;
        

        moviesTbody.innerHTML += row;
      }


      document.getElementById('movieTable').style.display = 'block';
    })
    .catch(error => console.error('Error:', error));
});
