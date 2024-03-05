import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { NewComponent } from "./new/new.component";
import { UpdateComponent } from "./update/update.component";
const routes: Routes = [
  {
    path: "",
    redirectTo: "list",
    pathMatch: "full",
  },
  {
    path: "list",
    component: ListComponent,
  },
  {
    path: "new",
    component: NewComponent,
  },
  {
    path: "update/{id}",
    component: UpdateComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpresasRoutingModule {}
