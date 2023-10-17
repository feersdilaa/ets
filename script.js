function getWeather() {
  var url = "http://159.223.51.203/api/bio";
    
    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'json',
      success: function(data) {    
          var bio = document.getElementById('bio');
          var id = document.getElementById('id');
          var language = document.getElementById('language');
          var version = document.getElementById('version');
          var namaOrang = document.getElementById('namaOrang');
          
            namaOrang.textContent = data.name;
            bio.textContent = data.bio;
            language.textContent = data.language;
            version.textContent = data.version;
            id.textContent = data.id; 
        },
      error: function(err) {
        console.log(err);
      }
    });
  }