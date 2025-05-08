import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/devotion-list/devotion-list.component').then(
        (m) => m.DevotionListComponent
      ),
  },
  {
    path: 'add',
    loadComponent: () =>
      import('./components/devotion-form/devotion-form.component').then(
        (m) => m.DevotionFormComponent
      ),
  },
  {
    path: 'edit/:id',
    loadComponent: () =>
      import('./components/devotion-form/devotion-form.component').then(
        (m) => m.DevotionFormComponent
      ),
  },
];
