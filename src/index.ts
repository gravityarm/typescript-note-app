import { noteController } from './typescript/controller/note.controller';

export function render() {
    noteController.populateData();
    noteController.executeToggleForm();
    noteController.executeDelete();
    noteController.executeCreate();
    noteController.executeEdit();
    noteController.executeUpdate();
    noteController.executeArchive();
}