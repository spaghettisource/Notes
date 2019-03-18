import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Note } from '../models/note.model';


@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(public storage: Storage) { }

  private notes: Note[] = [];
  private note: Note;

  addNote(note: Note) {
    note.createDate = Date.now();
    this.notes.push(note);
    this.storage.set('notes', this.notes);
  }

  getAllNotes() {
    return this.storage.get('notes').then(
      (notes) => {
        this.notes = notes ? notes : [];
        return this.notes.slice()
      }
    )
  }

  getNote(createDate: Number) {
    return this.storage.get('notes').then((notes) => {
      this.note = [...notes].find(n => n.createDate === Number(createDate));
      return this.note;
    }
    )
  }

  deleteNote(createDate: Number) {
    this.notes = this.notes.filter((note) => {
      return note.createDate != createDate
    });
    this.storage.set('notes', this.notes);
  }
}
