import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './theme/shared/shared.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';
import { NavigationComponent } from './theme/layout/admin/navigation/navigation.component';
import { NavLogoComponent } from './theme/layout/admin/navigation/nav-logo/nav-logo.component';
import { NavContentComponent } from './theme/layout/admin/navigation/nav-content/nav-content.component';
import {NavigationItem} from './theme/layout/admin/navigation/navigation';
import { NavGroupComponent } from './theme/layout/admin/navigation/nav-content/nav-group/nav-group.component';
import { NavCollapseComponent } from './theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavItemComponent } from './theme/layout/admin/navigation/nav-content/nav-item/nav-item.component';
import { NavBarComponent } from './theme/layout/admin/nav-bar/nav-bar.component';
import {ToggleFullScreenDirective} from './theme/shared/full-screen/toggle-full-screen';
import {NgbButtonsModule, NgbDropdownModule, NgbTabsetModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import { NavLeftComponent } from './theme/layout/admin/nav-bar/nav-left/nav-left.component';
import { NavSearchComponent } from './theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component';
import { NavRightComponent } from './theme/layout/admin/nav-bar/nav-right/nav-right.component';
import {ChatUserListComponent} from './theme/layout/admin/nav-bar/nav-right/chat-user-list/chat-user-list.component';
import { FriendComponent } from './theme/layout/admin/nav-bar/nav-right/chat-user-list/friend/friend.component';
import {ChatMsgComponent} from './theme/layout/admin/nav-bar/nav-right/chat-msg/chat-msg.component';
import { ConfigurationComponent } from './theme/layout/admin/configuration/configuration.component';
import { FinanceComponent } from './demo/pages/finance/finance.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DataTablesModule } from 'angular-datatables';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import {NgxPrintModule} from 'ngx-print';
import { CashinComponent } from './demo/pages/cash-in/cashin/cashin.component';
import { NotesComponent } from './demo/pages/notes/notes.component';
// import { NoteFileComponent } from './demo/pages/notes/note-file/note-file.component';
import { FilesComponent } from './demo/pages/files/files.component';
import { ReportComponent } from './demo/report/report/report.component';
import { ToastrModule } from 'ngx-toastr';
import {  ReceivFormComponent} from "./demo/extra/sample-page/receving-pc/receiv-form/receiv-form.component";
// import { SecurityComponent } from './demo/pages/security/security.component';
// import { SecurityService } from "./demo/pages/security/security.service";
// import { FileUploadComponent } from './demo/pages/files/file-upload/file-upload.component';
import { StorageService } from "../app/demo/pages/storage/storage.service";

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    NavigationComponent,
    NavLogoComponent,
    NavContentComponent,
    NavGroupComponent,
    NavCollapseComponent,
    NavItemComponent,
    NavBarComponent,
    ToggleFullScreenDirective,
    NavLeftComponent,
    NavSearchComponent,
    NavRightComponent,
    ChatUserListComponent,
    FriendComponent,
    ChatMsgComponent,
    ConfigurationComponent,
    FinanceComponent,
    CashinComponent,
    NotesComponent,
    // NoteFileComponent,
    FilesComponent,
    ReportComponent,
    // ReceivFormComponent
    // SecurityComponent,
    // FileUploadComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbButtonsModule,
    NgbTabsetModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    DataTablesModule,
    DateRangePickerModule,
    NgxPrintModule,
    ToastrModule.forRoot(),
   
  ],
  providers: [NavigationItem,StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
