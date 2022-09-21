import { dateHelper } from '../helpers/date.helper';
import { listContainer, createBtn, makeDisabled, noteForm, insertToDOM, titleNode, dateNode, selectNode, contentNode, getInputValues } from '../helpers/dom.helper';
import { validateInputFields } from '../helpers/validate.helper';
import { INote } from '../interfaces/inote.interface';

export class NoteView {
    public renderDefaultNotes(notes: Array<INote>) {
        let html = ``;
        notes.forEach((note) => {
            html += this.htmlNoteTemplate(note);
        });

        insertToDOM(html, 'afterbegin', listContainer);
    }

    private htmlNoteTemplate(note: INote): string {
        const id = note.getId();
        const { icon, type } = note.getCategory();
        const title = note.getTitle();
        const created = note.getDate();
        const content = note.getContent();
        const dates = note.getDates();
        return `<div class="notes-present todo-note" id=${id}>
        <div class="icon">
            ${icon}
        </div>
        <div class="title">${title}</div>
        <div class="created">${created}</div>
        <div class="category">${type}</div>
        <div class="content">${content}</div>
        <div class="dates">${dates}</div>
        <div class="icons">
            <i class="edit-note fa fa-pencil" aria-hidden="true"></i>
            <i class="archive-note fa fa-arrow-circle-down" aria-hidden="true"></i>
            <i class="delete-note fa fa-trash" aria-hidden="true"></i>
        </div>
      </div>`;
    }

    public renderOneNote(note: INote): void {
        const html = this.htmlNoteTemplate(note);
        insertToDOM(html, 'afterbegin', listContainer);
    }

    public deleteFromDOM(entry: any): void {
        entry.remove();
    }

    public toggleForm(): void {
        createBtn?.addEventListener('click', () => {
            makeDisabled('.note-btn-edit', true);
            makeDisabled('.create-btn', false);
            noteForm?.classList.toggle('note-form--flex');
        });
    }
    // Repeat code
    public showHideForm(): void {
        noteForm?.classList.toggle('note-form--flex');
        makeDisabled('.note-btn-edit', false);
        makeDisabled('.create-btn', true);
    }

    public editEntries(note: INote): void {
        titleNode.value = note.getTitle();
        dateNode.value = dateHelper.formatForUI(note.getDate());
        selectNode.value = String(note.getCategory().option);
        contentNode.value = note.getContent();
    }

    public updateNote(noteId: number): void {
        const { title, category, created, content } = getInputValues();
        if (validateInputFields(title, created, content)) return;

        const newEntries = document.getElementById(String(noteId)) as HTMLElement;

        newEntries.children[0].innerHTML = category.icon;
        newEntries.children[1].innerHTML = title;
        newEntries.children[2].innerHTML = dateHelper.getDate(created);
        newEntries.children[3].innerHTML = category.type;
        newEntries.children[4].innerHTML = content;
    }

    public hideElement(node: any) {
        node.style.display = 'none';
    }
}

export const noteView = new NoteView();
