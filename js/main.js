window.addEventListener('resize', ()=> {
    var windowWidth = window.innerWidth

    if (windowWidth < 900) {
        let shareIcon = document.getElementById('shareButton')
        let shareIcon2 = document.getElementById('shareButton2')
        let userProfile = document.getElementById('userProfile')
        let socmed = document.getElementById('socmed')
        let socmedII = document.getElementById('socmedII')

        socmedII.classList.remove('showSection')
        socmedII.classList.add('hideSection')


        shareIcon.addEventListener('click', switchIt)
        shareIcon2.addEventListener('click', switchIt)

        function switchIt() {
            console.log(window.innerWidth)
            userProfile.classList.toggle('showSection')
            userProfile.classList.toggle('hideSection')
            
            socmed.classList.toggle('showSection')
            socmed.classList.toggle('hideSection')
        }
    } else {

        let shareIcon = document.getElementById('shareButton')
        let shareIcon2 = document.getElementById('shareButton2')
        let userProfile = document.getElementById('userProfile')
        let socmed = document.getElementById('socmed')

        if (userProfile.classList.contains('showSection')) {
            return
        } else {
            userProfile.classList.add('showSection')
            userProfile.classList.remove('hideSection')
        }

        socmed.classList.remove('showSection')
        socmed.classList.add('hideSection')

        shareIcon.removeEventListener('click', switchIt)
        shareIcon2.removeEventListener('click', switchIt)
        
    } 
})


if (window.innerWidth < 900) {
    let shareIcon = document.getElementById('shareButton')
    let shareIcon2 = document.getElementById('shareButton2')
    let userProfile = document.getElementById('userProfile')
    let socmed = document.getElementById('socmed')
    let socmedII = document.getElementById('socmedII')

    socmedII.classList.remove('showSection')
    socmedII.classList.add('hideSection')


    shareIcon.addEventListener('click', switchIt)
    shareIcon2.addEventListener('click', switchIt)

    function switchIt() {
        console.log(window.innerWidth)
        userProfile.classList.toggle('showSection')
        userProfile.classList.toggle('hideSection')
        
        socmed.classList.toggle('showSection')
        socmed.classList.toggle('hideSection')
    }
} else {

    let shareIcon = document.getElementById('shareButton')
    let shareIcon2 = document.getElementById('shareButton2')

    socmed.classList.remove('showSection')
    socmed.classList.add('hideSection')
    shareIcon.removeEventListener('click', switchIt)
    shareIcon2.removeEventListener('click', switchIt)
}

if (window.innerWidth > 900) {
    let shareIcon = document.getElementById('shareButton')
    let socmedII = document.getElementById('socmedII')

    shareIcon.addEventListener('click', switchIt)

    function switchIt() {
        socmedII.classList.toggle('showSection')
        socmedII.classList.toggle('hideSection')

    }
}
