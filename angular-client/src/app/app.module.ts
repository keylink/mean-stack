import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { AuthModule } from './components/auth/auth.module';

import { AppDataService } from './services/http-service.service';
import { SearchFilterPipe } from './components/home/filter.pipe';

import { AppComponent } from './app.component';
import { AdminModule } from './components/admin/admin.module';
import { AuthHeaderInterceptor } from './interceptors/header.interceptor';
import { CatchErrorInterceptor } from './interceptors/http-error.interceptor';
import { InfiniteScrollModule } from '@thisissoon/angular-infinite-scroll';
import { NgxInfiniteScrollerModule } from 'ngx-infinite-scroller';

import { AppRoutingModule } from './components/app-routing/app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { ConverToHoursPipe } from './components/movie/toHours.pipe';
import { MovieEditComponent } from './components/movie-edit/movie-edit.component';
import { UserInfoComponent } from "./components/user-info/user-info.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchFilterPipe,
    MovieComponent,
    MovieEditComponent,
    ConverToHoursPipe,
    UserInfoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    AuthModule,
    AdminModule,
    AppRoutingModule,
    InfiniteScrollModule,
    NgxInfiniteScrollerModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHeaderInterceptor,
    multi: true,
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: CatchErrorInterceptor,
    multi: true,
  },
    AppDataService],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
