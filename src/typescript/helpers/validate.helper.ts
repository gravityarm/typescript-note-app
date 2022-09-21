export const validateInputFields = (
    title: string,
    date: string,
    content: string
) => {
    if (!title || !date || !content) {
        return true;
    }

    return false;
};
