import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  // {
  //   path: '',
  //   loadChildren: () =>
  //   import('../app/pages/home/home.module').then(m => m.HomePageModule)
  //   // import('./pages/login/login.module').then( m => m.LoginPageModule)
  // },
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
  },
  {
    path: 'homework-details',
    loadChildren: () => import('./pages/homework-details/homework-details.module').then( m => m.HomeworkDetailsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'performance',
    loadChildren: () => import('./pages/performance/performance.module').then( m => m.PerformancePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
