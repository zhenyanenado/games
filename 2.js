window.addEventListener('DOMContentLoaded', ()=>{

	const c = console.log;
	let itemsMassive = [];


		let set1 = setTimeout(()=>{

			let items = document.getElementsByClassName('menu');

				items[0].style.opacity = 1;


		}, 1000)



		for(let i = 1; i<=8; i++){

			let itemsMassive = document.getElementsByClassName('item');

				itemsMassive[1].style.backgroundImage = 'url(https://images.pushsquare.com/b5a1546cf48b2/god-of-war-ps4-playstation-4-black-friday-2018-deals.original.jpg)';
				itemsMassive[2].style.backgroundImage = 'url(https://shop.buka.ru/data/img_files/1825/screenshot/gDAazmXTit.png)';
				itemsMassive[3].style.backgroundImage = 'url(https://cdn-prod.scalefast.com/public/assets/img/resized/squareenix-store-v3/bf7cd2fc368435ac1bf71bbe5be6991a_KR_1350.jpg)';
				itemsMassive[4].style.backgroundImage = 'url(https://images4.alphacoders.com/109/1097463.jpg)';
				itemsMassive[5].style.backgroundImage = 'url(https://www.digiseller.ru/preview/205254/p1_2863344_61a94943.jpeg)';
				itemsMassive[6].style.backgroundImage = 'url(https://portagame.ru/katalog/game/xbox-game/xboxone-witcher3-wild-hunt-game-of-year_5.jpg)';
				itemsMassive[7].style.backgroundImage = 'url(https://i.ytimg.com/vi/RKJe2YBUSoM/maxresdefault.jpg)';


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