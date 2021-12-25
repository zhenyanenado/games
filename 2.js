window.addEventListener('DOMContentLoaded', (event)=>{

	let menu1 = document.getElementById('menu1');
	let menu2 = document.getElementById('menu2');
	let menu3 = document.getElementById('menu3');

	let arrow  = document.getElementById('icon1');
	let c = console.log;
	let closed = false;

	let item = document.getElementsByClassName('item');

	for(let i = 3; i<=8; i++){

		item[i].style.left = '30%';
		item[i].style.marginTop = '-40%';

	}


	for(let i = 6; i<=8; i++){

		item[i].addEventListener('click', (e)=>{

			menu1.style.height = '0px';
			menu2.style.height = '0px';

			menu1.style.opacity = 0;
			menu2.style.opacity = 0;

			menu3.style.height = '700px';

			let target = e.currentTarget;


			if(target == item[6]){
				document.body.style.backgroundImage = 'url(https://images.wallpapersden.com/image/download/horizon-2-forbidden-west_bGZna2eUmZqaraWkpJRma2ttrWdobW0.jpg)'
			}
			
			else if(target == item[7]){
				document.body.style.backgroundImage = 'url(https://i.imgur.com/9ZbWwWt.jpg)'
			}

			else if(target == item[8]){
				document.body.style.backgroundImage = 'url(https://img1.akspic.ru/originals/9/2/2/5/2/125229-illustracia-god_of_war-dejstvie_priklyuchencheskaya_igra-art-kratos-1080x1920.jpg)'
			}


		})
	}






})