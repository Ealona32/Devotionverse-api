import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router'; // ✅ Needed for routing
import { DevotionService } from '../../services/devotion.service';
import { Devotion } from '../../services/devotion.model';

@Component({
  selector: 'app-devotion-list',
  standalone: true,
  templateUrl: './devotion-list.component.html',
  styleUrls: ['./devotion-list.component.css'],
  imports: [CommonModule, RouterModule] // ✅ Include RouterModule to support routerLink
})
export class DevotionListComponent implements OnInit {
  devotions: Devotion[] = [];

  constructor(
    private svc: DevotionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): void {
    this.svc.getAll().subscribe({
      next: (data) => this.devotions = data,
      error: (err) => console.error('Failed to load devotions', err)
    });
  }

  delete(id: number): void {
    if (confirm('Are you sure you want to delete this devotion?')) {
      this.svc.delete(id).subscribe(() => this.loadAll());
    }
  }

  edit(id: number): void {
    this.router.navigate(['/edit', id]);
  }
}
