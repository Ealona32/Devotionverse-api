import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { DevotionService } from '../../services/devotion.service';
import { Devotion } from '../../services/devotion.model';

@Component({
  selector: 'app-devotion-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './devotion-form.component.html',
  styleUrls: ['./devotion-form.component.css']
})
export class DevotionFormComponent implements OnInit {
  devotion: Devotion = {
    id: 0,
    title: '',
    text: '',
    date: '',
    category: ''
  };

  constructor(
    private svc: DevotionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.svc.getById(+id).subscribe({
        next: data => this.devotion = data,
        error: err => console.error('Error loading devotion', err)
      });
    }
  }

  onSubmit(): void {
    if (this.devotion.id) {
      this.svc.update(this.devotion.id, this.devotion).subscribe({
        next: () => this.router.navigate(['/']),
        error: err => console.error('Error updating devotion', err)
      });
    } else {
      this.svc.create(this.devotion).subscribe({
        next: () => this.router.navigate(['/']),
        error: err => console.error('Error creating devotion', err)
      });
    }
  }
}
