function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  
  function getFileAsImage() {
      console.log('Selected')
      var file = document.querySelector('#files > input[type="file"]').files[0];
      getBase64(file).then(
      data => {
          document.querySelector('img').src = data;
      });
  }
  