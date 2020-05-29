// Function for content Encode
function encodeMe() {
	
	var obj = document.getElementById('content-holder');
	var unencoded = obj.value;
	obj.value = encodeURIComponent(unencoded); 
}

// Function for content Decode			
function decodeMe() {
	
	var obj = document.getElementById('content-holder');
	var encoded = obj.value;
	obj.value = decodeURIComponent(encoded.replace(/\+/g,  " "));
}

// Function for Select all content
function selectMe(){
	var obj = document.getElementById('content-holder');
	obj.focus();
	obj.select();
}