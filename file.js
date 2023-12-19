let profilePic = document.getElementById('profile');
let inputfile = document.getElementById('myfile');
let filename = document.getElementById('file-name');

inputfile.addEventListener('change', function() {
    profilePic.src = URL.createObjectURL(inputfile.files[0]);
    filename.textContent = inputfile.files[0].size;
    filename.textContent = inputfile.files[0].name;

})