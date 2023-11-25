// dark & light mood جزء ال
function myFunction() {
var element = document.body;
element.dataset.bsTheme =
element.dataset.bsTheme == "dark" ? "light" : "dark";
}

//  و إرسال البيانات من غير باك اند contact us جزء ال 
function sendMail() {
	var params = {
	    name: document.getElementById("text").value,
		number: document.getElementById("number").value,
	    email: document.getElementById("email").value,
	    message: document.getElementById("message").value,
	};
    
	const serviceID = "service_kvlxa0b";
	const templateID = "template_3ay5tam";
    
	    emailjs.send(serviceID, templateID, params)
	    .then(res=>{
			    document.getElementById("number").value = "";
		        document.getElementById("text").value = "";
		        document.getElementById("email").value = "";
		        document.getElementById("message").value = "";
		        console.log(res);
		        alert("Your message sent successfully!!")
                
	    })
	    .catch(err=>console.log(err));
    }






