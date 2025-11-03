import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { About } from "./components/about/about";
import { TechStack } from "./components/tech-stack/tech-stack";
import { Timeline } from "./components/timeline/timeline";
import { Featured } from "./components/featured/featured";
import { Footer } from "./components/footer/footer";
import { TimelineDataService } from './service/main.service';
import { TimelineItemDto } from './models/timeline-item';
import { Contact } from "./components/contact/contact";

@Component({
  selector: 'app-root',
  imports: [Header, About, TechStack, Timeline, Featured, Footer, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  protected readonly title = signal('portfolio');

  experience: TimelineItemDto[] = [];
  education: TimelineItemDto[] = [];

  constructor(private timelineDataService: TimelineDataService) { }

  ngOnInit(): void {
    this.timelineDataService.getExperience().subscribe(data => {
      this.experience = data;
    });

    this.timelineDataService.getEducation().subscribe(data => {
      this.education = data;
    });

  }

}
