import { CategoryType } from '../types/category.type';

export interface INote {
    getId(): number,
    getTitle(): string,
    getDate(): string,
    getCategory(): CategoryType,
    getContent(): string,
    getArchive(): boolean,
    getEditNote(): boolean,
    getDates(): string,
    setArchive(archive: boolean): void
    setEdit(edit: boolean): void
    // truncate(s: string, n: number): string;
}
