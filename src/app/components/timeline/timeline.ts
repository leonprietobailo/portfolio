import { Component, Input, OnInit } from '@angular/core';
import { TimelineItem } from './timeline-item/timeline-item';
import { TimelineItemDto } from '../../models/timeline-item';
import { TimelineDataService } from '../../service/main.service';

@Component({
  selector: 'app-timeline',
  imports: [TimelineItem],
  templateUrl: './timeline.html',
  styleUrl: './timeline.css',
})
export class Timeline {
  @Input() title!: string;
  @Input() description!: string;
  @Input() timelineItems!: TimelineItemDto[];
  @Input() id!: string;
}
