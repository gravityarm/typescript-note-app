

// export type MenuType = 'Task' | 'Random Thought' | 'Idea' | 'Quote';


// export type SummaryType<K extends MenuType> = {
//     [key in K]: number
// }


export type SummaryType = {
    [key: string]: number
}
