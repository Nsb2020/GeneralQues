var btns = document.querySelectorAll(".question-btn");

btns.forEach(function(btn) {
	btn.addEventListener("click", function(r){
		var un = r.currentTarget.parentElement.parentElement;
		console.log(un);
		un.classList.toggle('show-text');
	});
});

/*var qtn = document.querySelectorAll(".question")

qtn.forEach(function(ups){
//console.log(ups);
var btn = ups.querySelector('.question-btn');
console.log(btn);
});*/