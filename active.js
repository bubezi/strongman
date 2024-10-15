let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
	let slides = document.getElementsByClassName("slide");

	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	if (n > slides.length) {
		slideIndex = 1;
	}

	if (n < 1) {
		slideIndex = slides.length;
	}

	slides[slideIndex - 1].style.display = "block";
	console.log(slideIndex);
}

function changeSlide(n) {
	showSlides(slideIndex += n);
}

setInterval(function() {
	changeSlide(1);
}, 5000);

document.querySelectorAll('.faq-question').forEach(question => {
	question.addEventListener('click', () => {
		const answer = question.nextElementSibling;

		if (answer.style.display == 'block') {
			answer.style.display = "none";
		} else {
			answer.style.display = "block";
		}
	});
});

document.addEventListener("DOMContentLoaded", function() {
	let purchaseCount = 1455;
	let duration = 500;
	let interval = 10;
	let increment = purchaseCount / (duration / interval);
	let count = 0;

	function countUp() {
		let displayCounter = document.querySelector("#twelveth-div h2");
		displayCounter.textContent = Math.floor(count);

		if (count < purchaseCount) {
			count += increment;
			setTimeout(countUp, interval);
		} else {
			displayCounter.textContent = purchaseCount;
		}
	}

	countUp();
});
