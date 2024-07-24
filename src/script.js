let currentImgIndex = 0;
    const screenshots = Array.from(document.querySelectorAll('.screenshot'));

    function openModal(img) {
        const modal = document.getElementById('myModal');
        const modalImg = document.getElementById('img01');
        currentImgIndex = screenshots.indexOf(img);
        modal.style.display = 'block';
        modalImg.src = img.src;
    }

    function closeModal() {
        const modal = document.getElementById('myModal');
        modal.style.display = 'none';
    }

    function changeSlide(n) {
        currentImgIndex += n;
        if (currentImgIndex >= screenshots.length) currentImgIndex = 0;
        if (currentImgIndex < 0) currentImgIndex = screenshots.length - 1;
        const modalImg = document.getElementById('img01');
        modalImg.src = screenshots[currentImgIndex].src;
    }

    function downloadFile() {
        const link = document.createElement('a');
        link.href = 'assets/app.apk';
        link.download = 'app.apk';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    function shareContent() {
        if (navigator.share) {
            navigator.share({
                title: 'Check this out!',
                text: 'Here is something interesting.',
                url: window.location.href
            }).then(() => {
                console.log('Successful share');
            }).catch((error) => {
                console.error('Error sharing:', error);
            });
        } else {
            alert('Share not supported on this browser.');
        }
    }
