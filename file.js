let profilePic = document.getElementById('profile');
let inputfile = document.getElementById('myfile');
let filename = document.getElementById('file-name');


inputfile.addEventListener('change', function() {
    // code below used to upload and displayed image
    profilePic.src = URL.createObjectURL(inputfile.files[0]);
    //console.log(this.files)

         // code below used to displayed file name and size
    filename.textContent =  inputfile.files[0].name + " " + "/ " + inputfile.files[0].size;

    let reader = new FileReader();         //convert the file into data URL
    reader.readAsDataURL(this.files[0]);

    reader.addEventListener('load', function(){
            localStorage.setItem('recent-image', reader.result); //function used to store data in local storage after loading
    });

});
       
    // these last 3 lines below are used to keep image(data) displayed after reloading a page.
    // and need to stay outside the function above in order to run.
let recentImageDataUrl = localStorage.getItem("recent-image");

if (recentImageDataUrl){
    profilePic.setAttribute("src", recentImageDataUrl);
}