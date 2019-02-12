import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { AboutComponent }      from './components/about/about.component';
import { SearchComponent }      from './components/search/search.component';
import { MovieComponent }      from './components/movie/movie.component';
import { ListComponent }      from './components/list/list.component';

const appRoutes: Routes = [
    {
        path: '',
        component: SearchComponent
      },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'movie/:id',
    component: MovieComponent
  },
  {
  path: 'list',
  component: ListComponent
  },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);