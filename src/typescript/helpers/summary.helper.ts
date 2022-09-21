import { INote } from '../interfaces/inote.interface';
import { NoteType } from '../types/note.type';
import { SummaryType } from '../types/summary.type';
import { categories } from './categories.helper';

class SummaryHelper {
    public calcOfSummaryData(notes: INote[]): SummaryType {
        const summary: SummaryType = {};
        notes.forEach((note) => {
            categories.forEach((category) => {
                if (category.type === note.getCategory().type) {
                    summary[category.type] = summary[category.type] ? ++summary[category.type] : 1;
                }
            });
        });

        return summary;
    }
}

export const summaryHelper = new SummaryHelper();
