import { dateHelper } from '../helpers/date.helper';
import { INote } from '../interfaces/inote.interface';
import { CategoryType } from '../types/category.type';
import { NoteType } from '../types/note.type';

export class NoteModel implements INote {
    private id: number;
    private title: string;
    private created: string;
    private category: CategoryType;
    private content: string;
    private archive: boolean;
    private editNote: boolean;

    private LENGTH_OF_CONTENT = 30;
    constructor({ id, title, created, category, content, archive = false, editNote = false }: NoteType) {
        this.id = id;
        this.title = title;
        this.created = created;
        this.category = category;
        this.content = content;
        this.archive = archive;
        this.editNote = editNote;
    }

    private truncate(str: string, n: number): string {
        return str.length > n ? str.substr(0, n - 1) + '&hellip;' : str;
    }

    private validateDates(text: string): string {
        let dates = dateHelper.searchDates(text);

        if (!dates) return '';

        return dates.join(', ');
    }

    public getDates(): string {
        const dates = this.validateDates(this.content);
        return dates;
    }

    public getId(): number {
        return this.id;
    }
    public getTitle(): string {
        return this.title;
    }
    public getDate(): string {
        return dateHelper.getDate(this.created);
    }

    public getCategory(): CategoryType {
        return this.category;
    }
    public getContent(): string {
        return this.truncate(this.content, this.LENGTH_OF_CONTENT);
    }
    public getArchive(): boolean {
        return this.archive;
    }
    public getEditNote(): boolean {
        return this.editNote;
    }

    public setArchive(archive: boolean): void {
        this.archive = archive;
    }

    public setEdit(edit: boolean): void {
        this.editNote = edit;
    }
}
