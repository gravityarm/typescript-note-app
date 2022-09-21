import { INote } from '../interfaces/inote.interface';
import { noteService } from '../services/note.service';
import { noteView } from '../view/note.view';

class NoteController {
    public populateData() {
        const notes: Array<INote> = noteService.getDummyData();
        noteView.renderDefaultNotes(notes);
    }

    public executeToggleForm() {
        noteService.showForm();
    }

    public executeDelete() {
        noteService.deleteNote();
    }

    public executeCreate() {
        noteService.addNote();
    }

    public executeEdit() {
        noteService.editNote();
    }

    public executeUpdate() {
        noteService.updateNote();
    }

    public executeArchive() {
        noteService.archiveNote();
    }
}

export const noteController = new NoteController();
