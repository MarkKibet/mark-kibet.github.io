function uploadPhotos() {
    const fileInput = document.getElementById('fileInput');
    const photoGrid = document.getElementById('photoGrid');
    
    if (fileInput.files.length === 0) {
        alert('No files selected!');
        return;
    }

    Array.from(fileInput.files).forEach(file => {
        const reader = new FileReader();
        reader.onload = function(e) {
            const photoItem = document.createElement('div');
            photoItem.className = 'photo-item';
            
            const img = document.createElement('img');
            img.src = e.target.result;
            
            const downloadBtn = document.createElement('a');
            downloadBtn.href = e.target.result;
            downloadBtn.download = file.name;
            downloadBtn.className = 'download-btn';
            downloadBtn.innerHTML = '<i class="fas fa-download"></i>';
            
            photoItem.appendChild(img);
            photoItem.appendChild(downloadBtn);
            photoGrid.appendChild(photoItem);
        }
        reader.readAsDataURL(file);
    });

    // Clear input after uploading
    fileInput.value = '';
}
