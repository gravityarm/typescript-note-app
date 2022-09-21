import { getInputValues } from '../helpers/dom.helper';
import { validateInputFields } from '../helpers/validate.helper';
import { INote } from '../interfaces/inote.interface';
import { NoteModel } from '../model/note.model';

class NoteRepository {
    private notes: Array<INote> = [];
    private NUMBER_OF_NOTES: number = 5;

    private generateData(notes: number) {
        for (let i: number = 0; i < notes; i++) {
            const note = new NoteModel({
                id: i,
                title: 'Shopping list',
                created: 'December 17, 1995 03:24:00',
                category: {
                    icon: `<i class="fa fa-shopping-cart" aria-hidden="true"></i>`,
                    type: 'Task',
                    option: 0,
                },
                content: "I'm gonna have a dentist appointment on the 3/5/2022, I moved it from 5/5/2022",
                archive: false,
                editNote: false,
            });
            this.notes.push(note);
        }
    }

    public getData(): Array<INote> | [] {
        this.generateData(this.NUMBER_OF_NOTES);

        if (this.notes.length) {
            return this.notes;
        }

        return [];
    }

    public delete(noteId: number) {
        this.notes = this.notes.filter((note) => note.getId() !== noteId);
    }

    public create() {
        const { title, category, created, content } = getInputValues();
        if (validateInputFields(title, created, content)) return;

        const note = new NoteModel({
            id: this.notes.length,
            title,
            created,
            category,
            content,
            archive: false,
            editNote: false,
        });

        this.notes.push(note);
    }

    public getLastNote(): INote {
        return this.notes[this.notes.length - 1];
    }

    public getNoteById(noteId: number): INote | undefined {
        const note = this.notes.find((note) => note.getId() === noteId);
        return note;
    }

    public updateOneNote(note: INote) {
        console.log(note);
    }

    public getAllStatusArchiveNotes(status: boolean): INote[] {
        return this.notes.filter((note) => note.getArchive() === status);
    }

    public getNoteForEdit(): INote | undefined {
        return this.notes.find((note) => note.getEditNote() === true);
    }
}

export const noteRepository = new NoteRepository();
