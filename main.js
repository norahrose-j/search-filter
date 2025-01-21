// SHOW / HIDE STATBLOCK
const pluses = document.getElementsByClassName('fa-plus');
const statblocks = document.getElementsByClassName('block');

for (let i = 0; i < pluses.length; i++) {
    const element = pluses[i];
    const cList = element.classList;

    // rotate plus into x on click
    element.addEventListener('click', function () {
        cList.toggle('intox');

        // show stablock ?? please
        const statList = statblocks[i].classList;
        statList.toggle('showstats');
    });
};

// FILTER BY TYPE
const npc = document.getElementById('npcfilter');
const monster = document.getElementById('monsterfilter');
const equip = document.getElementById('equipfilter');
const magic = document.getElementById('magicfilter');

const entries = document.getElementsByClassName('entry');

npc.addEventListener('mouseover', function () {
    const npcIcon = document.getElementById('person');
    npcIcon.style.color = '#fff'
})

npc.addEventListener('mouseleave', function () {
    const npcIcon = document.getElementById('person');
    npcIcon.style.color = '#1c1c11'
})

npc.addEventListener('click', function () {
    npc.classList.toggle('togglebgcolor');
    const npcIcon = document.getElementById('person');
    npcIcon.classList.toggle('togglecolor')

    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        const eList = entry.classList;

        if ((!eList.contains('npc')) && (!eList.contains('hideentry'))) {
            eList.add('hideentry');
        } else if ((!eList.contains('npc') && eList.contains('hideentry'))) {
            eList.remove('hideentry');
        }
    }
});

monster.addEventListener('mouseover', function () {
    const icon = document.getElementById('dragon');
    icon.style.color = '#fff'
})

monster.addEventListener('mouseleave', function () {
    const icon = document.getElementById('dragon');
    icon.style.color = '#1c1c11'
})

monster.addEventListener('click', function () {
    monster.classList.toggle('togglebgcolor');
    const monsterIcon = document.getElementById('dragon');
    monsterIcon.classList.toggle('togglecolor')

    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        const eList = entry.classList;

        if ((!eList.contains('monster')) && (!eList.contains('hideentry'))) {
            eList.add('hideentry');
        } else if ((!eList.contains('monster') && eList.contains('hideentry'))) {
            eList.remove('hideentry');
        }
    }
});

equip.addEventListener('mouseover', function () {
    const icon = document.getElementById('shield');
    icon.style.color = '#fff'
})

equip.addEventListener('mouseleave', function () {
    const icon = document.getElementById('shield');
    icon.style.color = '#1c1c11'
})

equip.addEventListener('click', function () {
    equip.classList.toggle('togglebgcolor');
    const equipIcon = document.getElementById('shield');
    equipIcon.classList.toggle('togglecolor')

    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        const eList = entry.classList;

        if ((!eList.contains('equip')) && (!eList.contains('hideentry'))) {
            eList.add('hideentry');
        } else if ((!eList.contains('equip') && eList.contains('hideentry'))) {
            eList.remove('hideentry');
        }
    }
});

magic.addEventListener('mouseover', function () {
    const icon = document.getElementById('magic');
    icon.style.color = '#fff'
})

magic.addEventListener('mouseleave', function () {
    const icon = document.getElementById('magic');
    icon.style.color = '#1c1c11'
})

magic.addEventListener('click', function () {
    magic.classList.toggle('togglebgcolor');
    const magicIcon = document.getElementById('magic');
    magicIcon.classList.toggle('togglecolor')

    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        const eList = entry.classList;

        if ((!eList.contains('magic')) && (!eList.contains('hideentry'))) {
            eList.add('hideentry');
        } else if ((!eList.contains('magic') && eList.contains('hideentry'))) {
            eList.remove('hideentry');
        }
    }
});


// FILTER BY SEARCHING
const search = document.getElementById('search');
const titles = document.getElementsByTagName('h2');

search.addEventListener("keyup", function () {
    var input = search.value;
    var filter = input.toUpperCase();

    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        const entList = entry.classList;

        var curr = titles[i].innerText.toUpperCase();   
        
        if (!curr.includes(filter)) {
            entList.add('hidefromsearch');
        } else if (curr.includes(filter) && (!curr.includes('hideentry'))) {
            entList.remove('hidefromsearch');
        }
    } 
});

// RESET SEARCH BAR INPUT
window.addEventListener('load', function () {
    search.value = ""
});