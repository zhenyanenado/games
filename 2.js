window.addEventListener('DOMContentLoaded', ()=>{

	const c = console.log;
	let itemsMassive = [];



		let set1 = setTimeout(()=>{

			let items = document.getElementsByClassName('menu');
			let hello = document.getElementById('hello');

				hello.style.opacity = 1;
				items[0].style.opacity = 1;

		}, 1000)

		for(let i = 1; i<=4; i++){

			itemsMassive.push(document.getElementById('item'+i));
			itemsMassive[i-1].addEventListener('click', function(){

				this.style.height = '400px';
				this.style.width = '400px';
				this.style.opacity = 1;

				hello.style.opacity = 0;

				let others = itemsMassive.filter((currentValue)=>{

					return currentValue != this;

				})

				for(let i = 0; i<=2; i++){

					others[i].style.opacity = 0.3;
					others[i].style.width = null;
					others[i].style.height = null;

				}



			})


		}

})