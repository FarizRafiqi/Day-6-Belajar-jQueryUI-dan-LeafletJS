$(document).ready(function () {
    // ----------Dari Tutorial Video----------
    $("#buttonPertama").click(function () {
        alert('Berhasil diklik!');
    });

    $(".buttonKedua").click(function () {
        alert('Ini dari button kedua');
    });

    $("#inputPertama").change(function () {
        console.log('test');
        console.log($(this).val());
        $('#inputKedua').val($(this).val());
    });

    // Nyoba-nyoba sendiri
    const draggable = $(".draggable");
    draggable.draggable();

    draggable.on('dragstart', function () {
        const randomColor = '#' + ('000000' + Math.floor(Math.random() * 16777215).toString(16)).slice(-6);

        $(this).css({
            'background-color': randomColor,
        });
    });


    // ----------Dari Tutorial Modul----------
    $("#startDate").datepicker();

    const availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];

    $("#autocomplete").autocomplete({
        source: availableTags
    });

    let spinner = $("#spinner").spinner();
    $("#disable").on("click", function () {
        if (spinner.spinner("option", "disabled")) {
            spinner.spinner("enable");
        } else {
            spinner.spinner("disable");
        }
    });

    $("#getvalue").on("click", function () {
        alert(spinner.spinner("value"));
    });

    $("#setvalue").on("click", function () {
        spinner.spinner("value", 5);
    });

    $("button").button();

    $('button').on('click', function(event) {
        event.preventDefault();
    })
})