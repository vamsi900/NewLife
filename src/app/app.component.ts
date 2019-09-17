import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Bulletin',
      url: '/bulletin',
      icon: 'log-in'
    },
    {
      title: 'Video Archives',
      url: '/video-archives',
      icon: 'archive'
    },
    {
      title: 'Events',
      url: '/events',
      icon: 'list'
    },
    {
      title: 'Reading plan',
      url: '/reading-plan',
      icon: 'log-in'
    },
    {
      title: 'Lets Go Church',
      url: '/lets-go-church',
      // url: 'http://onelink.to/ez7k5e',
      icon: 'log-in'
    },
    {
      title: 'Feedback Form',
      url: '/feedback-form',
      icon: 'list'
    },
    {
      title: 'Carecell List',
      url: '/carecells',
      icon: 'list'
    },
    {
      title: 'Carecell Reports',
      url: '/carecell-reports',
      icon: 'list'
    },
    {
      title: 'Member Services',
      url: '/member-services',
      icon: 'paper'
    },
    {
      title: 'Amin Card',
      url: '/amin-card',
      icon: 'card'
    },
    {
      title: 'Live Stream',
      url: '/live-stream',
      icon: 'videocam'
    },
    {
      title: 'Membership Form',
      url: '/membership-form',
      icon: 'paper'
    },
    {
      title: 'SMS',
      url: '/sms',
      icon: 'text'
    },
    {
      title: 'Subscribe',
      url: '/subscribe',
      icon: 'text'
    },
    {
      title: 'Visitor Enquiry',
      url: '/visitor-enquiry',
      icon: 'list'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'log-in'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
