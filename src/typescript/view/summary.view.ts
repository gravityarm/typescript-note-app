import { insertToDOM, summaryListContainer } from '../helpers/dom.helper';

class SummaryView {
    public displaySummaryTable(archives: any, unarchives: any): void {
        let html = ``;
        for (let key in archives) {
            let active = unarchives[key] ?? 0;
            html += this.summaryInfoTemplate(key, active, archives[key]);
        }

        this.render(html);
    }

    private summaryInfoTemplate(type: string, active: boolean, archive: string): string {
        return `<div class="notes-present todo-note todo-note--bg" id="${type}">
        <div class="icon">
        </div>
        <div class="category">${type}</div>
        <div class="category-active">${active}</div>
        <div class="category-archived">${archive}</div>
      </div>`;
    }

    private render(html: string): void {
        if (summaryListContainer?.childElementCount) {
            summaryListContainer.innerHTML = '';
        }
        insertToDOM(html, 'afterbegin', summaryListContainer);

    }
}

export const summaryView = new SummaryView();
