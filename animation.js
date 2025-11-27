document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.photoportfolio img');
    const modal = document.getElementById('imgModal');
    const modalImg = document.getElementById('modalImg');
    const modalCaption = document.getElementById('modalCaption');
    const modalClose = document.querySelector('.modal-close');

    images.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = "block";
            document.body.classList.add("modal-open");
            modalImg.src = img.src;
            modalCaption.innerHTML = img.nextElementSibling?.innerText || "";
        });
    });

    modalClose.addEventListener('click', () => {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.classList.remove("modal-open");
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            modal.style.display = "none";
            document.body.classList.remove("modal-open");
        }
    });
});
