var details_btn = document.querySelector('.details_btn'),
    is_details_show = false,
    details = document.querySelector('.details');

details_btn.addEventListener('click', function () {
    is_details_show = !is_details_show;
    details.style.display = is_details_show ? 'block' : 'none';
    details.nodeValue = is_details_show ? 'hide details' : 'show details'
});