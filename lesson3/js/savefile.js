

function writeTestFile(){

	 var documentsDir;
	 var dir = tizen.filesystem;
	 var testFile;
	 var testFilecr=0;
	 function onsuccess(files) {
	   for(var i = 0; i < files.length; i++) {
	     console.log("File Name is " + files[i].name); // displays file name
	     if(files[i].name=="file1.txt"){
	    	 testFilecr=1;
	    	 testFile=files[i];
	    	 alert(files[i].name+" in folder Documents");
	     }
	   }
	   if (testFilecr !=1 ){ 
		   var testFile=documentsDir.createFile("file1.txt");
		   alert("file1.txt is created");
		   testFilecr=1;
		   }
	   if (testFilecr ) {
	     testFile.openStream(
	    	"w",
	         function(fs){
	           fs.write($(".connection-status").html());
	           fs.close();
	         }, function(e){
	           console.log("Error " + e.message);
	         }, "UTF-8"
	     );
	     testFile.readAsText(
	             function(str) {
	               alert("file1 content " + str);
	             }, function(e) {
	               console.log("Error " + e.message);
	             }, "UTF-8"
	         );
	 }
	 }

	 
	 function onerror(error) {
	   console.log("The error " + error.message + " occurred when listing the files in the selected folder");
	 }
	 

	 tizen.filesystem.resolve(
	     'documents',
	     function(dir){
	       documentsDir = dir; 
	       dir.listFiles(onsuccess,onerror);
	     }, function(e) {
	       console.log("Error" + e.message);
	     }, "rw"
	 );
}
function writeName(){
	 var documentsDir;
	 var dir = tizen.filesystem;
	 var testFile;
	 var testFilecr=0;
	 var x = document.getElementById("fname");
	 function onsuccess(files) {
	   for(var i = 0; i < files.length; i++) {
	     console.log("File Name is " + files[i].name); // displays file name
	     if(files[i].name=="file2.txt"){
	    	 testFilecr=1;
	    	 testFile=files[i];
	    	 alert(files[i].name+" in folder Documents");
	     }
	   }
	   if (testFilecr !=1 ){ 
		   var testFile=documentsDir.createFile("file2.txt");
		   testFilecr=1;
		   alert("file2.txt is created");
		   }
	   if (testFilecr ) {
	     testFile.openStream(
	    	"a",
	         function(fs){
	           fs.write(x.value);
	           fs.close();
	          // alert("456");
	         }, function(e){
	           console.log("Error " + e.message);
	         }, "UTF-8"
	     );
	     testFile.readAsText(
	             function(str) {
	               alert("file2 content " + str);
	             }, function(e) {
	               console.log("Error " + e.message);
	             }, "UTF-8"
	         );
	 }
	 }

	 
	 function onerror(error) {
	   console.log("The error " + error.message + " occurred when listing the files in the selected folder");
	 }
	 

	 tizen.filesystem.resolve(
	     'documents',
	     function(dir){
	       documentsDir = dir; 
	       dir.listFiles(onsuccess,onerror);
	     }, function(e) {
	       console.log("Error" + e.message);
	     }, "rw"
	 );
	
	
}
				