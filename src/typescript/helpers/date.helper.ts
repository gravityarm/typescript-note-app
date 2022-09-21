class DateHelper {
    public getDate(date: string): string {
        return new Date(date).toLocaleDateString('en-us', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    }

    public searchDates(text: string) {
        const pattern = /\d{1,2}\/\d{1,2}\/\d{4}/gm;

        return text.match(pattern);
    }
    public formatForUI(date: string): string {
        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }
}

export const dateHelper = new DateHelper();
