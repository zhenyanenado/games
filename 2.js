window.addEventListener('DOMContentLoaded', (event)=>{

	let menu1 = document.getElementById('menu1');
	let arrow  = document.getElementById('icon1');
	let c = console.log;

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

				this.styles.height = '150px';
				this.styles2.backgroundImage = 'url(3.png)'

			}

		}



	}

	let pers = new obj().func();
		




})