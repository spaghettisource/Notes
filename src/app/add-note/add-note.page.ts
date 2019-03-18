import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note.model';
import { FormGroup, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { NoteService } from './add-note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.page.html',
  styleUrls: ['./add-note.page.scss'],
})
export class AddNotePage implements OnInit {
  formGroup: FormGroup;
  title: string;
  content: string;
  date : Date;
  note: Note;


  constructor(private NoteService : NoteService, private navCtrl: NavController) {
    this.formGroup = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
      date: new FormControl()
    })
   }

  ngOnInit() {
  }

  addNote(note: Note) {
    this.NoteService.addNote(note);
    this.navCtrl.pop();
  }

}
