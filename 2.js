window.addEventListener('DOMContentLoaded', ()=>{

	const c = console.log;
	let itemsMassive = [];


		let set1 = setTimeout(()=>{

			let items = document.getElementsByClassName('menu');

				items[0].style.opacity = 1;


		}, 1000)

		for(let i = 1; i<=4; i++){

			let itemsMassive = document.getElementsByClassName('item');

				itemsMassive[1].style.backgroundImage = 'url(https://images.pushsquare.com/b5a1546cf48b2/god-of-war-ps4-playstation-4-black-friday-2018-deals.original.jpg)';
				itemsMassive[2].style.backgroundImage = 'url(https://shop.buka.ru/data/img_files/1825/screenshot/gDAazmXTit.png)';
				itemsMassive[3].style.backgroundImage = 'url(https://cdn-prod.scalefast.com/public/assets/img/resized/squareenix-store-v3/bf7cd2fc368435ac1bf71bbe5be6991a_KR_1350.jpg)';

				itemsMassive[i-1].addEventListener('click', function(){

					document.getElementById('login').style.opacity = 0;

							this.style.height = '400px';
							this.style.width = '400px';
							this.style.opacity = 1;
							this.style.borderRadius = '20px';

							
							if(itemsMassive[i-1] != this){
								this.style.width = '200px';
							}


				})


		}

})