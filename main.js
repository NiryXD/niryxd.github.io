/* ============================================
   Accordion Toggle for Team Member Bios
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(function (header) {
        header.addEventListener('click', function () {
            const body = this.nextElementSibling;

            // Close other open accordions (optional — remove this block for multi-open)
            headers.forEach(function (otherHeader) {
                if (otherHeader !== header) {
                    otherHeader.classList.remove('open');
                    otherHeader.nextElementSibling.classList.remove('open');
                }
            });

            // Toggle current
            this.classList.toggle('open');
            body.classList.toggle('open');
        });
    });
});
