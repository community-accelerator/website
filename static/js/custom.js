$("#contactForm").submit(function() {
    var addr = String.fromCharCode(99, 111, 109, 109, 117, 110, 105, 116, 121, 45, 97, 99, 99, 101, 108, 101, 114, 97, 116, 111, 114, 64, 107, 105, 116, 105, 99, 111, 119, 46, 99, 111, 109);
    if (!$(this).attr('action').endsWith(addr))
        $(this).attr('action', $(this).attr('action') + addr);
})

