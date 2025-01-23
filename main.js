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

var npcClicked = false;
npc.addEventListener('mouseover', function () {
    const npcIcon = document.getElementById('person');
    npcIcon.style.color = '#fff'
})

npc.addEventListener('mouseleave', function () {
    console.log(npcClicked);
    const icon = document.getElementById('person');
    if (npcClicked == false) {
        icon.style.color = '#BC9116';
    } else {
        icon.style.color == '#fff'
    }
})

npc.addEventListener('click', function () {
    npc.classList.toggle('togglebgcolor');
    const npcIcon = document.getElementById('person');

    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        const eList = entry.classList;

        if ((!eList.contains('npc')) && (!eList.contains('hideNpcEntry'))) {
            eList.add('hideNpcEntry');
            npcClicked = true;
            npcIcon.classList.add('togglecolor');
        } else if ((!eList.contains('npc') && eList.contains('hideNpcEntry'))) {
            eList.remove('hideNpcEntry');
            npcClicked = false;
            npcIcon.classList.remove('togglecolor');
        }
    }
});

var monsterClicked = false;
monster.addEventListener('mouseover', function () {
    const icon = document.getElementById('dragon');
    icon.style.color = '#fff';
})

monster.addEventListener('mouseleave', function () {
    const icon = document.getElementById('dragon');
    if (monsterClicked == false) {
        icon.style.color = '#BC9116';
    } else {
        icon.style.color == '#fff'
    }
})

monster.addEventListener('click', function () {
    monster.classList.toggle('togglebgcolor');
    const monsterIcon = document.getElementById('dragon');

    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        const eList = entry.classList;

        if ((!eList.contains('monster')) && (!eList.contains('hideMonsterEntry'))) {
            eList.add('hideMonsterEntry');
            monsterClicked = true;
            monsterIcon.classList.add('togglecolor');
        } else if ((!eList.contains('monster') && eList.contains('hideMonsterEntry'))) {
            eList.remove('hideMonsterEntry');
            monsterClicked = false;
            monsterIcon.classList.remove('togglecolor');
        }
    }
});

var equipClicked = false;
equip.addEventListener('mouseover', function () {
    const icon = document.getElementById('shield');
    icon.style.color = '#fff'
})

equip.addEventListener('mouseleave', function () {
    const icon = document.getElementById('shield');
    if (equipClicked == false) {
        icon.style.color = '#BC9116';
    } else {
        icon.style.color == '#fff'
    }
})

equip.addEventListener('click', function () {
    equip.classList.toggle('togglebgcolor');
    const equipIcon = document.getElementById('shield');

    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        const eList = entry.classList;

        if ((!eList.contains('equip')) && (!eList.contains('hideEquipEntry'))) {
            eList.add('hideEquipEntry');
            equipClicked = true;
            equipIcon.classList.add('togglecolor');
        } else if ((!eList.contains('equip') && eList.contains('hideEquipEntry'))) {
            eList.remove('hideEquipEntry');
            equipClicked = false;
            equipIcon.classList.remove('togglecolor');
        }
    }
});

var magicClicked = false;
magic.addEventListener('mouseover', function () {
    const icon = document.getElementById('magic');
    icon.style.color = '#fff'
})

magic.addEventListener('mouseleave', function () {
    console.log(magicClicked);
    const icon = document.getElementById('magic');
    if (magicClicked == false) {
        icon.style.color = '#BC9116';
    } else {
        icon.style.color == '#fff'
    }
})

magic.addEventListener('click', function () {
    magic.classList.toggle('togglebgcolor');
    const magicIcon = document.getElementById('magic');

    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        const eList = entry.classList;

        if ((!eList.contains('magic')) && (!eList.contains('hideMagicEntry'))) {
            eList.add('hideMagicEntry');
            magicClicked = true;
            magic.classList.add('togglecolor');
        } else if ((!eList.contains('magic') && eList.contains('hideMagicEntry'))) {
            eList.remove('hideMagicEntry');
            magicClicked = false;
            magicIcon.classList.remove('togglecolor');
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