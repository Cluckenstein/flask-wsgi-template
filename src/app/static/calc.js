function postWorkout(){
    
    $.ajax({
        type : 'POST',
        cache : false,
        url: "/ploter/",  
        data : {'ftp' : 1},
        dataType: 'json',
        success : function(response)
        {   
            console.log(typeof response)
            if (typeof response == 'object') {
                console.log(response)
                
            }
        }
    });
}

function postWorkoutGenerate(){
    $.ajax({
        type : 'POST',
        cache : false,
        url: "/generator/",  
        data : {'ftp' : 2},
        dataType: 'json',
        success : function(response)
        {   
            console.log(typeof response)
            console.log(response)
            if (typeof response == 'object') {
                console.log(response)
            }
           
        }
    });
}

function postWorkoutExample(){
    $.ajax({
        type : 'POST',
        cache : false,
        url: "/ploter/",  
        data : {'ftp' : 3},
        dataType: 'json',
        success : function(response)
        {   
            console.log(typeof response)
            if (typeof response == 'object') {
                console.log(response)
                
            }
        }
    });
}

function postWorkoutGenerateExample(){
    
    $.ajax({
        type : 'POST',
        cache : false,
        url: "/generator/",  
        data : {'ftp' : 4},
        dataType: 'json',
        success : function(response)
        {   
            console.log(typeof response)
            console.log(response)
            if (typeof response == 'object') {
                console.log(response)
            }
           
        }
    });
}

window.onload = function() {
	document.getElementById("button_1").onclick = function() {
        console.log('posting box')
		postWorkout()
    };
    
    document.getElementById("button_2").onclick = function() {
        console.log('posting box and generating file')

        var url = 'www.google.de'
        window.open(url);

		postWorkoutGenerate();
    };

    document.getElementById("button_3").onclick = function() {
        console.log('posting box')
		postWorkoutExample()
    };
    
    document.getElementById("button_4").onclick = function() {
        console.log('posting box and generating file')
        
		postWorkoutGenerateExample();
    };
}


