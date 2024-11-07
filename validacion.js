$(document).ready(function() {
    $("#miFormulario").validate({
        rules: {
            nombre: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 6
            }
        },
        messages: {
            nombre: {
                required: "Por favor, ingresa tu nombre",
                minlength: "El nombre debe tener al menos 3 caracteres"
            },
            email: {
                required: "Por favor, ingresa tu email",
                email: "Por favor, ingresa un email válido"
            },
            password: {
                required: "Por favor, ingresa una contraseña",
                minlength: "La contraseña debe tener al menos 6 caracteres"
            }
        },
        submitHandler: function(form) {
            alert("Formulario enviado correctamente!");
            form.submit();
        }
    });
});
