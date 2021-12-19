window.addEventListener('DOMContentLoaded', (event)=>{

	let menu1 = document.getElementById('menu1');
	let arrow  = document.getElementById('icon1');
	let c = console.log;
	let closed = false;
	let time = document.getElementById('timeblock');

	let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

	let plus = document.getElementsByClassName('left');

	for(let i = 0; i<=2; i++){

		plus[i].addEventListener('touchstart', function(){

			this.style.opacity = 1;

		})

	}

	

	let dateDay = new Date().getDay();

		if(dateDay == 1){
			time.innerHTML = days[0];
		}
		if(dateDay == 2){
			time.innerHTML = days[1];
		}
		if(dateDay == 3){
			time.innerHTML = days[2];
		}
		if(dateDay == 4){
			time.innerHTML = days[3];
		}
		if(dateDay == 5){
			time.innerHTML = days[4];
		}
		if(dateDay == 6){
			time.innerHTML = days[5];
		}
		if(dateDay == 7){
			time.innerHTML = days[6];
		}

		window.addEventListener('touchstart', (event)=>{

			let posX = this.event.touches[0].clientX;
			let posY = this.event.touches[0].clientY;

	})


	class obj {

		constructor(){
			this.styles = document.getElementById('menu1').style;
			this.styles2 = document.getElementById('icon1').style;
		}

		func(){

			let time1 = setTimeout(()=>{

				this.styles.height = '1337px';
				this.styles.opacity = 0.9;
				this.styles2.backgroundImage = 'url(4.png)'

			}, 300)

			arrow.onclick = ()=>{

				if(!closed){
					this.styles.height = '150px';
					this.styles2.backgroundImage = 'url(3.png)'
					closed = true;
				}
			}


		}

	}

	let pers = new obj().func();
	

})