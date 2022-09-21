import { addNoteBtn, noteForm, updateBtn } from '../helpers/dom.helper';
import { summaryHelper } from '../helpers/summary.helper';
import { noteRepository } from '../repositories/note.repository';
import { noteView } from '../view/note.view';
import { summaryView } from '../view/summary.view';

class NoteService {
    public getDummyData() {
        return noteRepository.getData();
    }

    public deleteNote(): void {
        const deleteBtns = document.querySelectorAll('.delete-note');
        deleteBtns.forEach((entry) => {
            entry.addEventListener('click', () => {
                const noteElement = entry?.parentNode?.parentNode as HTMLElement;
                const noteId = Number(noteElement?.id);
                noteRepository.delete(noteId);
                noteView.deleteFromDOM(noteElement);
            });
        });
    }

    public showForm() {
        noteView.toggleForm();
    }

    public addNote() {
        addNoteBtn?.addEventListener('click', () => {
            noteRepository.create();
            const lastNote = noteRepository.getLastNote();
            noteView.renderOneNote(lastNote);
            this.updateEventListeners();
        });
    }

    public editNote() {
        const editBtn = document.querySelectorAll('.edit-note');

        editBtn.forEach((editItem) => {
            editItem.addEventListener('click', () => {
                noteView.showHideForm();
                const noteElement = editItem.parentNode?.parentNode as HTMLElement;
                const noteId = Number(noteElement?.id);
                const note = noteRepository.getNoteById(noteId);

                if (note) {
                    note.setEdit(true);
                    noteView.editEntries(note);
                }
            });
        });
    }

    public updateNote() {
        updateBtn.addEventListener('click', () => {
            try {
                const note = noteRepository.getNoteForEdit();
                if (!note) {
                    throw Error('Error notes not fournd');
                }
                const noteId = note.getId();
                noteView.updateNote(noteId);
                noteRepository.updateOneNote(note);
                note.setEdit(false);
            } catch (error) {
                console.log(error);
            }
        });
    }

    public archiveNote() {
        const archiveBtn = document.querySelectorAll('.archive-note');

        archiveBtn.forEach((archiveItem) => {
            archiveItem.addEventListener('click', () => {
                console.log('Click works');
                const noteElement = archiveItem.parentNode?.parentNode as HTMLElement;
                const noteId = Number(noteElement.id);
                const note = noteRepository.getNoteById(noteId);

                noteView.hideElement(noteElement);

                if (note) {
                    note.setArchive(true);
                }

                const archiveNotes = noteRepository.getAllStatusArchiveNotes(true);
                const unarchiveNotes = noteRepository.getAllStatusArchiveNotes(false);

                const archivesData = summaryHelper.calcOfSummaryData(archiveNotes);
                const unarchivesData = summaryHelper.calcOfSummaryData(unarchiveNotes);

                summaryView.displaySummaryTable(archivesData, unarchivesData);
            });
        });
    }

    private updateEventListeners() {
        this.deleteNote();
        this.editNote();
        this.archiveNote();
    }
}

export const noteService = new NoteService();
