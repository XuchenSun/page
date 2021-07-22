
	/**
	 * obj: 
	 * imgArr the array of images
	 * aniTIme  the time of animation
	 * intervalTime  the time of image displaying
	 * autoplay set if autoplay
	 */
	function Swiper(obj) {
		this.imgArr = obj.imgArr || [];
		this.retImgArr = [this.imgArr[this.imgArr.length-1], ...this.imgArr, this.imgArr[0]];
		this.aniTIme = obj.aniTIme || 1500;
		this.intervalTime = obj.intervalTime + this.aniTIme || 2500;
		this.nowIndex = 0;

		this.swiperListDom = document.getElementsByClassName('swiper-list')[0];

		this.swiperSpotDom;
		this.leftBtn;
		this.rightBtn;
		this.mainDom;

		this.moveWidth = this.swiperListDom.offsetWidth;
		this.timer = null;

		this.prev = Date.now();

		this.autoplay = obj.autoplay;

	}
	Swiper.prototype = {
		init: function() {
			this.initDom();

			// display single image li
			let li = '';
			for (let i = 0; i < this.retImgArr.length; i++) {
				li += `<li style="left: ${i * this.moveWidth}px;width: ${this.moveWidth}px" class="swiper-item"><a href="${this.retImgArr[i].url}"><img src="${this.retImgArr[i].imgPath}" alt=""></a></li>`;
			}
			this.mainDom.innerHTML = li;

			// small pont li
			let spotLi = '';
			for (let i = 0; i < this.imgArr.length; i++) {
				if (i === 0) {
					spotLi += `<li class="spot-item" style="background-color: #ff5c1f;" index=${i}></li>`;
				} else {
					spotLi += `<li class="spot-item" index=${i}></li>`;
				}
			}
			this.swiperSpotDom.innerHTML = spotLi;




			this.eventBind()

		},
		initDom() {
			// dom
			this.mainDom = document.createElement('ul');
			this.mainDom.className = 'swiper-main';
			this.mainDom.style.width = `${this.moveWidth * (imgArr.length + 2)}px`;
			this.mainDom.style.left = `${-this.moveWidth}px`;
			this.swiperListDom.appendChild(this.mainDom)

			// little point ul
			this.swiperSpotDom = document.createElement('ul');
			this.swiperSpotDom.className = 'swiper-spot';
			this.swiperListDom.appendChild(this.swiperSpotDom)

			// left button
			this.leftBtn = document.createElement('img');
			this.leftBtn.className = 'leftBtn';
			this.leftBtn.src = 'left11.png';
			this.swiperListDom.appendChild(this.leftBtn)

			// right button
			this.rightBtn = document.createElement('img');
			this.rightBtn.className = 'rightBtn';
			this.rightBtn.src = 'right11.png';
			if (this.imgArr.length===1) {
				this.leftBtn.style.display = 'none';
				this.rightBtn.style.display = 'none';
			}
			this.swiperListDom.appendChild(this.rightBtn)

		},
		prevSlider(aniTIme) {
			let that = this;
			if (this.imgArr.length===1) return;
			this.mainDom.style.transition = `left ${aniTIme / 1000}s`
			this.mainDom.style.left = `${parseInt(this.mainDom.style.left) + this.moveWidth}px`;
			if (this.nowIndex === 0) {
				that.nowIndex = (that.imgArr.length-1);
				that.setActiveSpot();
				setTimeout(function() {					
					that.mainDom.style.transitionProperty = 'none';
					that.mainDom.style.left = `${-that.imgArr.length * that.moveWidth}px`;
				}, aniTIme)
			} else {
				this.nowIndex--;
				this.setActiveSpot();
			}
		},
		nextSlider(aniTIme) {
			let that = this;
			if (this.imgArr.length===1) return;
			this.nowIndex++;
			this.mainDom.style.transition = `left ${aniTIme / 1000}s`
			this.mainDom.style.left = `${parseInt(this.mainDom.style.left) - this.moveWidth}px`;
			if (this.nowIndex === (this.imgArr.length)) {
				that.nowIndex = 0;
				that.setActiveSpot();
				setTimeout(function() {
					that.mainDom.style.transitionProperty = 'none';
					that.mainDom.style.left = `${-that.moveWidth}px`;
				}, aniTIme)
			} else {
				this.setActiveSpot();
			}
		},
		setActiveSpot: function() {
			for (let i = 0; i < this.swiperSpotDom.childElementCount; i++) {				
				if (i === Math.abs(this.nowIndex)) {
					document.getElementsByClassName('spot-item')[i].style.backgroundColor = '#ff5c1f'
				} else {
					document.getElementsByClassName('spot-item')[i].style.backgroundColor = '#ccc'
				}
			}
		},
		eventBind() {
			let that = this;

			this.leftBtn.addEventListener('mouseover', function() {
				clearInterval(that.timer);
			})
			this.leftBtn.addEventListener('mouseout', function() {
				that.timer = setInterval(that.nextSlider.bind(that, that.aniTIme), that.intervalTime);
			})
			this.leftBtn.addEventListener('click', function() {
				that.throttle(that.prevSlider, 300, 300);
			})


			// right button event listener
			this.rightBtn.addEventListener('mouseover', function() {
				clearInterval(that.timer);
			})
			this.rightBtn.addEventListener('mouseout', function() {
				that.timer = setInterval(that.nextSlider.bind(that, that.aniTIme), that.intervalTime);
			})
			this.rightBtn.addEventListener('click', function() {
				that.throttle(that.nextSlider, 300, 300);
			})


			// little point event
			this.swiperSpotDom.addEventListener('mouseover', function() {
				clearInterval(that.timer);
			})
			this.swiperSpotDom.addEventListener('mouseout', function() {
				that.timer = setInterval(that.nextSlider.bind(that, that.aniTIme), that.intervalTime);
			})
			this.swiperSpotDom.addEventListener('click', function(e) {
				e = e || window.event; //IE8
			　　var target = e.target || e.srcElement;
			　　if (target.tagName.toLowerCase() === "li") {
			　　　　 var ret = this.querySelectorAll("li");
			　　　　 let index = Array.prototype.indexOf.call(ret, target);
					that.nowIndex = index;
					that.setActiveSpot();
					that.mainDom.style.transition = `left .8s`
					that.mainDom.style.left = `${-(that.nowIndex+1) * that.moveWidth}px`;
			　　}
			})

			this.mainDom.addEventListener('touchstart', function(e) {
				clearInterval(that.timer);
				that.startX = e.changedTouches[0].clientX;
				that.startY = e.changedTouches[0].clientY;
			})
			this.mainDom.addEventListener('touchmove', function(e) {
				clearInterval(that.timer);
				that.endX = e.changedTouches[0].clientX;
				that.endY = e.changedTouches[0].clientY;
			})
			this.mainDom.addEventListener('touchend', function(e) {
				if (!that.mainDom.style.transition) {
					that.mainDom.style.transition = `left ${that.aniTIme / 1000}s`
				}
				let angle = that.angle({ X: that.startX, Y: that.startY }, { X: that.endX, Y: that.endY });
				if (Math.abs(angle) > 30) return;
			    if (that.endX > that.startX){ // right
			    	that.prevSlider();
			    } else { // left
			    	that.nextSlider();
			    }
				that.timer = setInterval(that.nextSlider.bind(that, that.aniTIme), that.intervalTime);
				
			})
		},
		// time
		throttle(handle, delay, val) {
            var now = Date.now();
            if (now - this.prev >= delay) {
                handle.call(this, val);
                this.prev = Date.now();
            }
		},
		/**
		* calculate the angle
		* @param {Object} start start point
		* @param {Object} end end point
		*/
		angle: function (start, end) {
		    var _X = end.X - start.X,
		      _Y = end.Y - start.Y
		    //return angle /Math.atan()return the value
		    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
		}
	}


