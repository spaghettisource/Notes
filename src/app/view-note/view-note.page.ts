import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note.model';
import { NoteService } from '../add-note/add-note.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.page.html',
  styleUrls: ['./view-note.page.scss'],
})
export class ViewNotePage implements OnInit {
  public note: Note;
  private activatedRoute: ActivatedRoute;
  private router: Router;
  private alertCtrl: AlertController;

  constructor(
    private noteService: NoteService,
    arouter: ActivatedRoute,
    router: Router,
    alertCtrl: AlertController
  ) {
    this.activatedRoute = arouter;
    this.router = router;
    this.alertCtrl = alertCtrl;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      console.log(data);
      this.noteService.getNote(data.id).then(
        (n) => {
          this.note = n;
        }
      )
    })
  }

  async deleteNote(createDate: number) {


    let alert = await this.alertCtrl.create({
      message: 'Do you want to delete this note?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {

          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.noteService.deleteNote(createDate);
            this.router.navigate(['/home']);
          }
        }
      ]
    });
    alert.present();
  }

}
