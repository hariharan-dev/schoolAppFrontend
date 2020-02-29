import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'attendence',
    loadChildren: () => import('./pages/attendence/attendence.module').then( m => m.AttendencePageModule)
  },
  {
    path: 'home',
    loadChildren: () =>
      import('../app/pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'homework',
    loadChildren: () =>
      import('../app/pages/homework/homework.module').then(m => m.HomeworkPageModule)
  },
  {
    path: 'timetable',
    loadChildren: () =>
      import('../app/pages/timetable/timetable.module').then(m => m.TimetablePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
