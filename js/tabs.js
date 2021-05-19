const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
const tabsFieldElems = document.querySelectorAll('[data-tabs-field]');
const titleSectionElems = document.querySelectorAll('.section__title');

for (const tab of tabsHandlerElems) {
    tab.addEventListener('click', () => {
        tabsHandlerElems.forEach(item => {
            if (tab === item) {
                item.classList.add('design-list__item_active');
            } else {
                item.classList.remove('design-list__item_active');
            }
        })
        titleSectionElems.forEach(elem => {
            elem.classList.toggle('hidden');
        });
        tabsFieldElems.forEach(item => {
            if (item.dataset.tabsField === tab.dataset.tabsHandler) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        })
    });
}