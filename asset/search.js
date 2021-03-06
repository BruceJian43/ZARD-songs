function editDistance(str1, str2) {
    let dp = Array(str1.length + 1).fill().map(() => Array(str2.length).fill(0));
    for (let i = 1; i <= str1.length; i++)
        dp[i][0] = i;
    for (let i = 1; i <= str2.length; i++)
        dp[0][i] = i;
    for (let i = 1; i <= str1.length; i++) {
        for (let j = 1; j <= str2.length; j++) {
            if (str1[i - 1] === str2[j - 1])
                dp[i][j] = dp[i - 1][j - 1];
            else {
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1,
                    dp[i][j - 1] + 1,
                    dp[i - 1][j - 1] + 1
                );
            }
        }
    }
    return dp[str1.length][str2.length]
}

function getScores(s, data) {
    let res = [];
    for (let d of data) {
        const dis = editDistance(s.toUpperCase(), d.toUpperCase());
        const score = (s.length + d.length - dis) >> 1;
        res.push([d, score]);
    }
    res.sort(function (a, b) {
        return a[1] > b[1] ? -1 : (a[1] < b[1] ? 1 : 0);
    });
    return res;
}


function setUpSearcher(inp, data) {
    let highlightedIndex;
    setUpInputListener(inp, data);
    setUpKeydownListener(inp);

    function createItemsContainer() {
        const container = document.createElement('DIV');
        container.setAttribute('class', setUpSearcher.Options['itemsContainerClass']);
        return container;
    }

    function removeItemsContainer(elem) {
        const container = document.querySelector('.' + setUpSearcher.Options['itemsContainerClass']);
        if (container != undefined && elem != container && elem != inp)
            container.parentNode.removeChild(container);
    }

    function createItem(inp, name) {
        const item = document.createElement("DIV");
        item.innerHTML = name;
        item.addEventListener('click', function (e) {
            inp.value = this.textContent;
            removeItemsContainer();
        });
        return item;
    }
    function setUpInputListener(inp, data) {
        inp.addEventListener('input', function (e) {
            const currentInput = this.value;
            removeItemsContainer();
            if (!currentInput) { return false };
            highlightedIndex = -1;
            const itemContainer = createItemsContainer();
            this.parentNode.appendChild(itemContainer);
            const scores = getScores(currentInput, data);
            for (let i = 0; i < Math.min(setUpSearcher.Options['numOfSuggestions'], data.length); i++) {
                if (scores[i][1] > setUpSearcher.Options['scoreThreshold']) {
                    const item = createItem(inp, scores[i][0]);
                    itemContainer.appendChild(item);
                }
            }
        });
    }

    function setUpKeydownListener(inp) {
        inp.addEventListener('keydown', function (e) {
            const itemsContainer = document.querySelector('.' + setUpSearcher.Options['itemsContainerClass']);
            if (itemsContainer != undefined) {
                const items = itemsContainer.querySelectorAll('div');
                if (e.keyCode == 40) {
                    highlightedIndex++;
                    addActive(items);
                } else if (e.keyCode == 38) {
                    highlightedIndex--;
                    addActive(items);
                } else if (e.keyCode == 13) {
                    e.preventDefault();
                    if (highlightedIndex == -1)
                        submitBtn.click();
                    if (highlightedIndex > -1) {
                        items[highlightedIndex].click();
                    }
                }
            } else {
                if (e.keyCode == 13)
                    submitBtn.click();
            }
        });
        function addActive(items) {
            if (!items) return false;
            removeActive(items);
            if (highlightedIndex >= items.length)
                highlightedIndex = 0;
            if (highlightedIndex < 0)
                highlightedIndex = items.length - 1;
            items[highlightedIndex].classList.add(setUpSearcher.Options['itemActiveClass']);
        }
        function removeActive(items) {
            for (let i = 0; i < items.length; i++)
                items[i].classList.remove(setUpSearcher.Options['itemActiveClass']);
        }
    }

    document.addEventListener("click", function (e) {
        removeItemsContainer(e.target);
    })
}

setUpSearcher.Options = {
    numOfSuggestions: 5,
    scoreThreshold: 0,
    itemsContainerClass: 'autocomplete-items',
    itemActiveClass: 'autocomplete-active'
}

const submitBox = document.querySelector('#input-box');
const submitBtn = document.querySelector('.autocomplete-submit');

function findItemsInTheCollection(songTypes, targetSong) {
    let items = [];
    for (const [songType, Collection] of Object.entries(songTypes)) {
        for (const song of Collection) {
            if (song.includes(targetSong)) {
                if (targetSong === 'Boy') {
                    if (song.includes("It's a Boy") || song.includes('Lonely Soldier Boy'))
                        continue;
                } else if (targetSong === 'Forever') {
                    if (song.includes('Forever you'))
                        continue;
                }
                items.push([song, songType]);
            }
        }
    }
    return items;
}

function createSearchResultTable(titles) {
    const tr = document.createElement('TR');
    const thead = document.createElement('THEAD');
    const table = document.createElement('TABLE');
    for (const title of titles) {
        const th = document.createElement('TH');
        th.innerHTML = title;
        th.setAttribute('scope', 'col');
        tr.appendChild(th);
    }
    thead.appendChild(tr);
    table.appendChild(thead);
    thead.classList.add('search-result-' + titles[0]);
    table.classList.add('search-result-table');
    return table;
}

function createSearchResultItem(item, title) {
    const tr = document.createElement("TR");
    for (const t of title.concat(item)) {
        const th = document.createElement('TD');
        th.innerHTML = t;
        tr.appendChild(th);
    }
    return tr;
}

function displaySearchResultItems(items, title, theadClass) {
    const thead = document.querySelector('.' + theadClass);
    for (const item of items) {
        thead.appendChild(
            createSearchResultItem(item, title)
        );
    }
}

function removeSearchResultTable() {
    const tables = document.querySelectorAll('.search-result-table');
    if (tables != undefined) {
        for (let i = 0; i < tables.length; i++) {
            tables[i].parentNode.removeChild(tables[i]);
        }
    }
}

submitBtn.addEventListener('click', function (e) {
    if (submitBox.value.length > 0) {
        const scores = getScores(submitBox.value, songs);
        const targetSong = scores[0][0];
        submitBox.value = targetSong;
        removeSearchResultTable();

        submitBtn.parentElement.appendChild(
            createSearchResultTable(['single', 'item', 'type'])
        );

        for (const [singleName, songTypes] of Object.entries(single)) {
            const items = findItemsInTheCollection(songTypes, targetSong);
            displaySearchResultItems(items, [singleName], 'search-result-single');
        }

        submitBtn.parentElement.appendChild(
            createSearchResultTable(['album', 'item', 'type'])
        );
        for (const [albumType, albumNames] of Object.entries(album)) {
            for (const [albumName, songTypes] of Object.entries(albumNames)) {
                const items = findItemsInTheCollection(songTypes, targetSong);
                displaySearchResultItems(items, [albumName], 'search-result-album');
            }
        }
    }
});

setUpSearcher(submitBox, songs);

// Reference
// https://www.w3schools.com/howto/howto_js_autocomplete.asp