// timeline-data.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TimelineItemDto } from '../models/timeline-item';


@Injectable({ providedIn: 'root' })
export class TimelineDataService {
  constructor(private http: HttpClient) {}

  getExperience(): Observable<TimelineItemDto[]> {
    return this.http.get<TimelineItemDto[]>('assets/data/experience.json');
  }

  getEducation(): Observable<TimelineItemDto[]> {
    return this.http.get<TimelineItemDto[]>('assets/data/education.json');
  }
}
