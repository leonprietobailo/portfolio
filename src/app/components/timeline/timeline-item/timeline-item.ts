import { Component, Input } from '@angular/core';
import { TimelineItemDto } from '../../../models/timeline-item';

@Component({
  selector: 'app-timeline-item',
  imports: [],
  templateUrl: './timeline-item.html',
  styleUrl: './timeline-item.css',
})
export class TimelineItem {
  @Input() item!: TimelineItemDto;
}
