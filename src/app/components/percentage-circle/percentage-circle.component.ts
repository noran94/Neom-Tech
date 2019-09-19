import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-percentage-circle',
  templateUrl: './percentage-circle.component.html',
  styleUrls: ['./percentage-circle.component.scss']
})
export class PercentageCircleComponent implements OnInit {
  @Input() total;
  @Input() pending;
  @Input() done;
  @Input() type;
  @Input() doneMessage;
  @Input() percentage;
  constructor() { }

  ngOnInit() {
  }

}
