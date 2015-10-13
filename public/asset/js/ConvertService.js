var ConvertService = {

	getIndex: function(item, callback) {
		$.ajax({
		  url: '/api/convert', //end-point to backend
		  data: {'item': item},
		  success: function(result) {
		  	callback(parseFloat(result));
		  },
		  error: function() {
		  	callback(null);
		  }
		});
	},
	
	getDescription: function (index) {
		//TODO to be implemented
		return "";
	}
	
};