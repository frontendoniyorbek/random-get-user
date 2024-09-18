let elDetails = document.querySelector('.details');
let elImgContainer = document.querySelector('.img-container');
let elGetUserBtn = document.getElementById('get-user-btn');

let getUser = () => {
	fetch('https://random-data-api.com/api/v2/users?response_type=json')
		.then(response => response.json())
		.then(data => {
			elImgContainer.innerHTML = `<img src=${data.avatar} alt="">`;
			elDetails.innerHTML = `<h2>${data.first_name}</h2> <h3>${data.last_name}</h3> <h4><i class="fa-solid fa-location-dot"></i> ${data.address.city}</h4>`;
			let randomColor = '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');
			document.documentElement.style.setProperty('--theme-color', randomColor);
		})
		.catch(error => console.error('Xato yuz berdi:', error));
};

window.addEventListener('load', getUser);
elGetUserBtn.addEventListener('click', getUser);
