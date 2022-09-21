import { categories } from './categories.helper';
import { dateHelper } from './date.helper';

export const listContainer = document.querySelector('.note-list');
export const noteForm = document.querySelector('.note-form');
export const createBtn = document.querySelector('.create-note');
export const addNoteBtn = document.getElementById('add-note-btn');
export const titleNode = document.getElementById('note-title-input') as HTMLInputElement;
export const dateNode = document.getElementById('note-date-input') as HTMLInputElement;
export const contentNode = document.getElementById('note-content') as HTMLTextAreaElement;
export const selectNode = document.getElementById('type-category') as HTMLSelectElement;
export const updateBtn = document.querySelector('.note-btn-edit') as HTMLButtonElement;
export const summaryListContainer = document.querySelector('.summary-notes-list');
export const deleteBtn = document.querySelectorAll('.delete-note');

export const makeDisabled = (element: string, flag: boolean) => {
    document.querySelector(element).disabled = flag;
};

export const insertToDOM = (html: string, methodInsert: string, element: any) => {
    element.insertAdjacentHTML(methodInsert, html);
};

export const getInputValues = () => {
    const title = titleNode?.value;
    const category = categories[selectNode?.selectedIndex];
    const created = dateHelper.getDate(dateNode?.value);
    const content = contentNode?.value;

    return { title, category, created, content };
};
