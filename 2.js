window.addEventListener('touchstart', (event)=>{

	let c = console.log;

	let posX = this.event.touches[0].clientX;
	let posY = this.event.touches[0].clientY;

	let menu1 = document.getElementById('menu1');
	let arrow  = document.getElementById('icon1');


	class obj {

		constructor(){
			this.styles = document.getElementById('menu1').style;
			this.styles2 = document.getElementById('icon1').style;
		}

		func(){

			menu1.onclick = ()=>{

				this.styles.height = '1337px';
				this.styles.opacity = 0.9;
				this.styles2.backgroundImage = 'url(4.png)'



			}

			arrow.onclick = ()=>{

				this.styles.height = '150px';
				this.styles2.backgroundImage = 'url(3.png)'

			}

		}



	}

	let pers = new obj().func();
		




})