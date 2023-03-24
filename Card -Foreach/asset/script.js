
var cl=console.log;

let users = [
    {
      userId: 1,
      id: 1,
      title: "are or do repels provide blacked out except option criticizes",
      body: "because he also accepts\nundertakes the consequences of refusal and when\nhe criticizes the troubles so that the whole\nof our things are but they are the matter will happen to the architect"
    }];
	cl(users);
	
	const User1=document.getElementById("card-1");
	let result="";
	
	users.forEach(function(card1){
		
		result+=`<div class="card-header h3 bg-warning text-white">${card1.title}</div>
		<div class="card-body pl-5 bg-warning text-white "style="font-size:18px;">${card1.body}</div>
		<div class="card-footer h3 text-white  bg-primary">user Id : ${card1.userId}, id : ${card1.id}</div>`;
		
	});
		
	User1.innerHTML=result;
	
//-----------------------------------------------------------------------------------------------------------------------------------------------------
	
	
  let users1= [
  {
      userId: 1,
      id: 2,
      title: "who is being",
      body: "it is in the time of life that things should be followed; no pain will blame the blessed ones; nor will they flee from the flattery of the pleasure; nor will there be any trouble to reject them; we shall not be open to them; we shall not be able to do so, but there is nothing."
    }
	];
	const User2=document.getElementById("card-2");
	let result1="";
	
	users1.forEach(function(card2){
	
		result1+=`<div class="card-header h3 bg-warning text-white">${card2.title}</div>
		<div class="card-body pl-5 bg-warning text-white "style="font-size:18px;">${card2.body}</div>
		<div class="card-footer h3 text-white  bg-primary ">user Id : ${card2.userId}, id : ${card2.id}</div>`;
		
		
	});
	
	User2.innerHTML=result1;
	
//----------------------------------------------------------------------------------------------------------------------------------------------------
	

  let users3 =[
  {
      userId: 1,
      id: 3,
      title: "she repels troubles as if she were training, whoever she is",
      body: "and just but by what right\nthe lust of every one who chooses to be blinded, or to the\nlust of pains or accusers, who is spared"
    }
	]
	
	
	const User3=document.getElementById("card-3");
	let result2="";
	
	users3.forEach(function(card3){
	
		result2+=`<div class="card-header h3 bg-warning text-white">${card3.title}</div>
		<div class="card-body pl-5 bg-warning text-white " style="font-size:18px;">${card3.body}</div>
		<div class="card-footer h3 text-white  bg-primary ">user Id : ${card3.userId}, id : ${card3.id}</div>`;
		
		
	});
	
	User3.innerHTML=result2;
	
//-----------------------------------------------------------------------------------------------------------------------------------------------
	
	
    let users4=[
	{
      userId: 1,
      id: 4,
      title: "and he is blinded",
      body: "by rejecting any and often to gain pleasure\nbut it is easy to assume the fault of things\nwhoever does not know the benefits here is bound by the thing and the pain itself by right\nwhosoever wants the pleasure of things"
    }
	];
	
	
	const User4=document.getElementById("card-4");
	let result3="";
	
	users4.forEach(function(card4){
	
		result3+=`<div class="card-header h3 bg-warning text-white">${card4.title}</div>
		<div class="card-body pl-5 bg-warning text-white "style="font-size:18px;">${card4.body}</div>
		<div class="card-footer h3 text-white  bg-primary ">user Id : ${card4.userId}, id : ${card4.id}</div>`;
		
		
	});
	
	User4.innerHTML=result3;
	
//------------------------------------------------------------------------------------------------------------------------------------------------
	
	let users5=[
	{
      userId: 1,
      id: 5,
      title: "they don't know what they hate",
      body: "Let him seek forgiveness for repudiation, but there are other things, or let him flee, but it is, but there is pleasure, we can all be pleasures; there is no pain, nor is it held"
    }
	];
	const User5=document.getElementById("card-5");
	let result4="";
	
	users5.forEach(function(card5){
	
		result4+=`<div class="card-header h3 bg-warning text-white">${card5.title}</div>
		<div class="card-body pl-5 bg-warning text-white "style="font-size:18px;">${card5.body}</div>
		<div class="card-footer h3 text-white  bg-primary ">user Id : ${card5.userId}, id : ${card5.id}</div>`;
		
		
	});
	
	User5.innerHTML=result4;
	

 
  
 