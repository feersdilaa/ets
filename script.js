var url = "http://159.223.51.203/api/bio";
function load_ajax(){
 	const ajax = new XMLHttpRequest();
 	ajax.open('GET', url, true);
 	ajax.onreadystatechange = function(){
 		if(this.readyState ===4 && this.status ===200){
 			let data = JSON.parse(this.responseText)
			   document.getElementById('namaOrang').innerHTML += data[0].name;
               document.getElementById('id').innerHTML += data[0].id;
               document.getElementById('namaOrang1').innerHTML += data[1].name;
               document.getElementById('id1').innerHTML += data[1].id;
               document.getElementById('namaOrang2').innerHTML += data[2].name;
               document.getElementById('id2').innerHTML += data[2].id;
               document.getElementById('namaOrang3').innerHTML += data[3].name;
               document.getElementById('id3').innerHTML += data[3].id;
               document.getElementById('namaOrang4').innerHTML += data[4].name;
               document.getElementById('id4').innerHTML += data[4].id;
               document.getElementById('namaOrang5').innerHTML += data[5].name;
               document.getElementById('id5').innerHTML += data[5].id;
               document.getElementById('namaOrang6').innerHTML += data[6].name;
               document.getElementById('id6').innerHTML += data[6].id;
               document.getElementById('namaOrang7').innerHTML += data[7].name;
               document.getElementById('id7').innerHTML += data[7].id;
               document.getElementById('namaOrang8').innerHTML += data[8].name;
               document.getElementById('id8').innerHTML += data[8].id;
               document.getElementById('namaOrang9').innerHTML += data[9].name;
               document.getElementById('id9').innerHTML += data[9].id;
               document.getElementById('namaOrang10').innerHTML += data[10].name;
               document.getElementById('id10').innerHTML += data[10].id;
			}
 		}
         ajax.send();
 	}   
 	
load_ajax();
