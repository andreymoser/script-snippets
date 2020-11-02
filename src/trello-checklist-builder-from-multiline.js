//Trello checklist add from items script

const items = `
Item 1
Item 2
Item 3
Item 4
Item 5
`;

const values = items.split("\n").filter(i => i.trim());

async function addChecklistItems() {
	for (value of values) {
		await new Promise((resolve) => {
			const textarea = document.getElementsByClassName('edit field checklist-new-item-text js-new-checklist-item-input')[0];
			textarea.value = value;
			const addBtn = document.getElementsByClassName('primary confirm mod-submit-edit js-add-checklist-item')[0];
			console.log("Adding checklist item", value);
			addBtn.click();
			setTimeout(() => {
				resolve();	
			}, 1000);
		});
	}
}

addChecklistItems();
