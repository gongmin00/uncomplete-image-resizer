$.ajax ({
    url:'./index.html',
    type:'POST',
    succee: function(){
        alert('load successfully')
    }
}).done(function(){
    var finalWidth = $('#input').val()
})
