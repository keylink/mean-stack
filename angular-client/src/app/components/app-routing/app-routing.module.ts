import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';
import { HomeComponent } from '../home/home.component';
import { MovieComponent } from "../movie/movie.component";
import { MovieEditComponent } from "../movie-edit/movie-edit.component";
import { UserInfoComponent } from "../user-info/user-info.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'auth',
    loadChildren: 'src/app/components/auth/auth.module#AuthModule'
  },
  {
    path: 'admin',
    loadChildren: 'src/app/components/admin/admin.module#AdminModule'
  },
  {
    path: 'movie/:id',
    component: MovieComponent
  },
  {
    path: 'movie/edit/:id',
    component: MovieEditComponent
  },
  {
    path: 'user/:id',
    component: UserInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
  declarations: []
})

export class AppRoutingModule {}
