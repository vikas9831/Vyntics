import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
// import { ChatWidgetComponent } from './chat-widget/chat-widget.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { StrategicAdvisoryComponent } from './services/strategic-advisory/strategic-advisory.component';
import { DataAnalyticsComponent } from './services/data-analytics/data-analytics.component';
import { CloudSolutionsComponent } from './services/cloud-solutions/cloud-solutions.component';
import { ConsultingComponent } from './services/consulting/consulting.component';
import { DataEngineeringComponent } from './services/data-engineering/data-engineering.component';
import { AgenticAiComponent } from './services/agentic-ai/agentic-ai.component';
import { HomeComponent } from './home/home.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurClientsComponent } from './our-clients/our-clients.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    // ChatWidgetComponent,
    WhyChooseUsComponent,
    OurServicesComponent,
    ContactUsComponent,
    StrategicAdvisoryComponent,
    DataAnalyticsComponent,
    CloudSolutionsComponent,
    ConsultingComponent,
    DataEngineeringComponent,
    AgenticAiComponent,
    HomeComponent,
    TestimonialsComponent,
    CaseStudiesComponent,
    AboutUsComponent,
    OurClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
