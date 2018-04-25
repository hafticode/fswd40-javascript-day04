document.write("<h1> Basic 1 | Reading Status </h1>")



var library = [
	{ title: 'When Breath Becomes Air', 
	   author: 'Paul Kalanithi', 
	   readingStatus: true }, 

	{ title: 'The Girls', 
	author: 'Emma Cline ', 
	readingStatus: true }, 

	{ title: 'The Nest', 
	author: 'Cynthia', 
	readingStatus: false }, 

	{ title: 'The Crown', 
	author: 'Kiera Cass', 
	readingStatus: true }, 

	{ title: 'Behind Closed Doors', 
	author: 'B.A. Paris', 
	readingStatus: false }, 

	{ title: 'It Ends with Us ', 
	author: 'Colleen Hoover', 
	readingStatus: true }];


	for (var i=0; i<library.length; i++) {
		if (library[i].readingStatus == true){
			document.write("Already read " + library[i].title + "<br><br>");
		}else{
			document.write(" <b>"+" You still need to read " + library[i].title + "<br><br>" + "</b>");
		}
	}

document.write("<hr>")


document.write("<h1> Basic 2 | Truncate</h1>")


var truncate = "I am a hero from World of Warcraft";
document.write(truncate.substring(0,12));

document.write("<hr>")

document.write("<h1> Basic 3 | Table Creation</h1>")



function tableCreate(){
    var body = document.body,
        tbl  = document.createElement('table');
    tbl.style.width  = '100%';
    tbl.style.border = '1px 1px 1px 1px solid black';

    var a = (parseInt(document.getElementById("rows").value,10));

    var b = (parseInt(document.getElementById("cols").value,10));

    for(var i = 0; i < a; i++){
        var tr = document.getElementById("table").insertRow();
        tr.style.border= "1px solid black";
        for(var j = 0; j < b; j++){
           		var td = tr.insertCell();
                	td.appendChild(document.createTextNode("Row " + i + " " + "Column- " + j));
                	td.style.border = '1px solid black'; 
                }
           }
    body.appendChild(tbl);
}
tableCreate();




