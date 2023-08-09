const jpgInput = document.getElementById('jpgInput');
const chooseButton = document.getElementById('chooseButton');
const removeButton = document.getElementById('removeButton');
const convertButton = document.getElementById('convertButton');
const downloadLink = document.getElementById('downloadLink');
const selectedFileName = document.getElementById('selectedFileName');

jpgInput.addEventListener('change', () => {
    const file = jpgInput.files[0];
    if (file) {
        selectedFileName.textContent = file.name;
        removeButton.style.display = 'inline-block';
    } else {
        selectedFileName.textContent = '';
        removeButton.style.display = 'none';
    }
});

chooseButton.addEventListener('click', () => {
    jpgInput.click();
});

removeButton.addEventListener('click', () => {
    jpgInput.value = null; // Clear the selected file
    selectedFileName.textContent = '';
    removeButton.style.display = 'none';
});


convertButton.addEventListener('click', () => {w
    const jpgFile = jpgInput.files[0];
    if (jpgFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // ... (rest of your conversion code)
        };
        reader.readAsDataURL(jpgFile);
    }
});

convertButton.addEventListener('click', () => {
    const jpgFile = jpgInput.files[0];
    if (jpgFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.src = e.target.result;

            img.onload = function() {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;

                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);

                canvas.toBlob((blob) => {
                    const url = URL.createObjectURL(blob);
                    downloadLink.href = url;
                    downloadLink.style.display = 'block';
                }, 'image/png');
            };
        };
        reader.readAsDataURL(jpgFile);
    }
});
