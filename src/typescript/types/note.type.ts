import { CategoryType } from './category.type';

export type NoteType = {
    id: number;
    title: string;
    created: string;
    category: CategoryType;
    content: string;
    archive: boolean;
    editNote: boolean;
};
