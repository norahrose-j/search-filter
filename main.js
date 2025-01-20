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

npc.addEventListener('click', function () {
    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        const eList = entry.classList;

        if (eList.contains("npc") && !eList.contains("hideentry")) {
            eList.add("showfilter")
            eList.remove("hidefilter")
        } else {
            eList.add("hidefilter")
            eList.remove("showfilter")
            eList.add("hideentry")
            eList.remove("showentry")
        }
    }
});

monster.addEventListener('click', function () {
    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        const eList = entry.classList;

        if (eList.contains("monster") && !eList.contains("hideentry")) {
            eList.add("showfilter")
            eList.remove("hidefilter")
        } else {
            eList.add("hidefilter")
            eList.remove("showfilter")
            eList.add("hideentry")
            eList.remove("showentry")
        }
    }
});

equip.addEventListener('click', function () {
    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        const eList = entry.classList;

        if (eList.contains("equip") && !eList.contains("hideentry")) {
            eList.add("showfilter")
            eList.remove("hidefilter")
        } else {
            eList.add("hidefilter")
            eList.remove("showfilter")
            eList.add("hideentry")
            eList.remove("showentry")
        }
    }
});

magic.addEventListener('click', function () {
    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        const eList = entry.classList;

        if (eList.contains("magic") && !eList.contains("hideentry")) {
            eList.add("showfilter")
            eList.remove("hidefilter")
        } else {
            eList.add("hidefilter")
            eList.remove("showfilter")
            eList.add("hideentry")
            eList.remove("showentry")
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

        var target = titles[i].innerText.toUpperCase();   
        if (target.includes(filter) && !entList.contains("hidefilter")) {
            entList.add("showentry")
            entList.remove("hideentry")
        } else {
            entList.add("hideentry")
            entList.remove("showentry")
            entList.add("hidefilter")
            entList.remove("showfilter")
        }
    } 
});

// RESET SEARCH BAR INPUT
window.addEventListener('load', function () {
    search.value = ""
});