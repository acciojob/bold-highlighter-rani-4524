function highlight() {
    //Write your code here
	const highlightedFunction = document.querySelectorAll('strong');
	highlightedFunction.forEach(item=>{
		item.style.color="rgb(0, 128, 0)";
});
}


function return_normal() {
    //Write your code here
	const normalFunction=document.querySelectorAll("strong");
	normalFunction.forEach(item=>{
		item.style.color="rgb(0, 0, 0)";
}); 
}
