// Get NASA's Picture of the Day by date

//Event listener on click
document.querySelector('button').addEventListener('click', getDate);

//Data retrieval
function getDate() {
  let userDate = document.getElementById('customDate').value;
  console.log(userDate);

  const url = `https://api.nasa.gov/planetary/apod?api_key=EYNzzaJQRLs9LCZkxomYTK4knCetnwwDdPw5h7aL&date=${userDate}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      document.querySelector('img').src = data.hdurl;
      document.querySelector('.event').innerText = data.title;
      document.querySelector('h3').innerText = `Deep Dive: ${data.explanation}`;
    })
    .catch(error => console.error('Error fetching data:', error));
}
