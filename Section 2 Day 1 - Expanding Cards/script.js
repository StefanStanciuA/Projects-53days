const panels = document.querySelectorAll('.panel')

// panels.forEach(panel => {
//     panel.addEventListener('click', () => {
//       removeActiveClasses()
//       panel.classList.add ('active')
//     })
// })

function removeActiveClasses () {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

for(let i=0; i < panels.length; i++) {
        console.log(panels[i]);
         panels[i].addEventListener('click', () => addActivClass(panels[i]));

    }

   

function addActivClass (panel) {
    console.log('click');
    removeActiveClasses ();
    panel.classList.add ('active')
}
