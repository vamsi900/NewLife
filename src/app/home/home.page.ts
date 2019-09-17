import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { VideoPlayerPage } from '../video-player/video-player.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, public dialog: MatDialog) {}
  playVideo(): void {
    const dialogRef = this.dialog.open(VideoPlayerPage, {
      width: '400px',
      height: '150px',
      panelClass: 'myapp-no-padding-dialog',
    });
  };

  slideOpts = {
    zoom: false
  };

  @ViewChild("mySlider") slides: IonSlides;

  slidesDidLoad() {
    this.slides.startAutoplay();
  }

  images:any[] = [
    {logo: "/assets/1.jpeg"},
    {logo: "/assets/2.jpeg"},
    {logo: "/assets/3.jpeg"},
    {logo: "/assets/4.jpeg"},
    {logo: "/assets/5.jpeg"},
    {logo: "/assets/6.jpeg"},
    {logo: "/assets/7.jpeg"},
  ]

}
