import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Note } from '../models/note.model';

import { Router } from '@angular/router'
import { NoteService } from '../add-note/add-note.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  notes: Note[] = [];
  note: Note;
  constructor(public navCtrl: NavController,
    private noteService: NoteService,
    private router: Router) { }

  ionViewWillEnter() {
    this.getAllNotes().then((notes) => {
      this.notes = notes;
    })
  }

  getAllNotes() {
    return this.noteService.getAllNotes();
  }

  getNote() {
    this.router.navigate(['/view-note']);
  }
}
