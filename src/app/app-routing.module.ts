import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { StrategicAdvisoryComponent } from './services/strategic-advisory/strategic-advisory.component';
import { DataAnalyticsComponent } from './services/data-analytics/data-analytics.component';
import { CloudSolutionsComponent } from './services/cloud-solutions/cloud-solutions.component';
import { ConsultingComponent } from './services/consulting/consulting.component';
import { DataEngineeringComponent } from './services/data-engineering/data-engineering.component';
import { AgenticAiComponent } from './services/agentic-ai/agentic-ai.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'services/strategic-advisory', component: StrategicAdvisoryComponent },
  { path: 'services/data-analytics', component: DataAnalyticsComponent },
  { path: 'services/cloud-solutions', component: CloudSolutionsComponent },
  { path: 'services/consulting', component: ConsultingComponent },
  { path: 'services/data-engineering', component: DataEngineeringComponent },
  { path: 'services/agentic-ai', component: AgenticAiComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
