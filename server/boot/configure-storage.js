module.exports = function(app) {
  //Function for checking the file type..
  app.dataSources.storage.connector.getFilename = function(file, req, res) {

    //First checking the file type..
    var pattern = /^image\/.+$/;
    var value = pattern.test(file.type);
    if(value ){
      var fileExtension = file.name.split('.').pop();

      //Now preparing the file name..
      //customerId_time_orderId.extension
      var NewFileName = 'fff'+Math.floor(Math.random() * (50000000000 - 1) + 1)+'.' + fileExtension;

      //And the file name will be saved as defined..
      return NewFileName;
    }
    else{
      throw "FileTypeError: Only File of Image type is accepted.";
    }
  };
};
