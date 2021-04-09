function resetMenuLinks() {
    const linksForReset = document.querySelectorAll(`.tab-menu__link`)
    linksForReset.forEach((link) => {
        link.classList.remove(`tab-menu__link_clicked`)
    })
}

function resetHidenBlockVisible() {
    const hidenBlocksForReset = document.querySelectorAll(`.tab-menu__hidden-block`)
    if (hidenBlocksForReset) {
        hidenBlocksForReset.forEach((hidenBlock) => {
            hidenBlock.classList.remove(`tab-menu__hidden-block_visible`)
        })
    }
}


function showHiddenBlock(hiddeBlockShowAttr) {
    const hiddenBlocks = document.querySelectorAll(`.tab-menu__hidden-block`)
    if (hiddenBlocks) {
        hiddenBlocks.forEach((hiddenBlock) => {
        	if (hiddenBlock.dataset.show === hiddeBlockShowAttr) {
        		hiddenBlock.classList.toggle(`tab-menu__hidden-block_visible`)
            }
        })
    }
}

function onLinkClick(e) {
    resetMenuLinks()
    resetHidenBlockVisible()
    e.target.classList.toggle(`tab-menu__link_clicked`)
    showHiddenBlock(e.target.dataset.show)
}

function setDefaultMenuLink(defaultLink) {
    defaultLink.classList.toggle(`tab-menu__link_clicked`)
    showHiddenBlock(defaultLink.dataset.show)
}

export default function initTabMenu() {
    const tabMenu = document.querySelectorAll(`.tab-menu`)
    if (tabMenu.length) {
        const links = document.querySelectorAll(`.tab-menu__link`)
        setDefaultMenuLink(links[0])
        links.forEach((link) => link.addEventListener(`click`, onLinkClick))
    }
}
