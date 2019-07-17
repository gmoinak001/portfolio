console.log("It Works!")

$(document).ready(function () {
    $('.submit').click(function (event) {
        console.log('Clicked button')

        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var statusEln = $('.status')
        statusEln.empty()

        if (email.length > 5 && email.includes('@') && email.includes('.')) {
            statusEln.append('<div>Email is Valid</div>')
        } else {
            event.preventDefault()
            statusEln.append('<div>Email is not Valid</div>')
        }

        if (subject.length >= 10) {
            statusEln.append('<div>Number is Valid</div>')
        } else {
            event.preventDefault()
            statusEln.append('<div>Number must be of atleast 10 digits</div>')
        }

        if (message.length > 10) {
            statusEln.append('<div>Message is Valid</div>')
        } else {
            event.preventDefault()
            statusEln.append('<div>Message should contain atleast 10 characters</div>')
        }
    })
})