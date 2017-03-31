import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ModalDirective } from 'ng2-bootstrap/components/modal/modal.component';

import {ProjectDAL, FileDAL} from "../../shared/index";
import {DatePipe} from "@angular/common";

@Component({
  moduleId: module.id,
  selector: 'form-cmp',
  templateUrl: './project-detail.component.html'
})

export class ProjectDetailComponent implements OnInit, OnDestroy {
  @ViewChild('ConfirmDeleteModal') public deleteModal:ModalDirective;

  public id: any;
  private sub: any;
  public project: any;
  public extension: any = ["doc", "docx", "xls", "xlsx", "pdf", "jpg", "png", "jpeg"];
  public currentProject: any;
  public datePipe = new DatePipe();
  public files: any;
  public currentFileName: any = "";

  constructor(private route: ActivatedRoute, private projectDAL: ProjectDAL, private fileDAL: FileDAL) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params: any) => {
      this.id = params.id; // (+) converts string 'id' to a number
      this.projectDAL.getProject(this.id).then((projects: any)=> {
        if (projects.length > 0) {
          this.currentProject = projects[0];
          this.files = projects[0].get("files");
          var project = projects[0];
          project["cusMultiMerge"] = this.mergeName(project.get("customer"));
          project["pmMultiMerge"] = this.mergeName(project.get("pm"));
          project["baEstMultiMerge"] = this.mergeName(project.get("baEst"));
          project["baBAMultiMerge"] = this.mergeName(project.get("baBA"));
          project["devEstMultiMerge"] = this.mergeName(project.get("devEst"));
          project["devDevMultiMerge"] = this.mergeName(project.get("devDev"));
          project["qcMultiMerge"] = this.mergeName(project.get("qc"));
          project["techMultiMerge"] = this.mergeName(project.get("tech"));
          project["platformMultiMerge"] = this.mergeName(project.get("platform"));
          project["startAt"] = this.datePipe.transform(project.get("startAt"), 'dd-MMM-yyyy');
          project["endAt"] = this.datePipe.transform(project.get("endAt"), 'dd-MMM-yyyy');
          this.project = project;
        }
      });
    });
  }

  mergeName(listObejct: any) {
    //merge name
    var nameMerge = "";
    for (let i = 0; i < listObejct.length; i++) {
      nameMerge += listObejct[i].get("name");
      if (i < listObejct.length - 1) {
        nameMerge += ", ";
      }
    }
    return nameMerge;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  chooseFile() {
    $("#chooseFile").click();
  }

  onFilesChange(fileInput: any) {
    if(fileInput.target.files.length > 0){
      var _file = fileInput.target.files[0];
      var extens = this.getFileExtension(_file.name);
      if(this.isValidFileType(extens)){
        var file = {};
        file["name"] = _file.name;
        file["extension"] = extens;
        file["size"] = _file.size;
        file["uploadDate"] = this.datePipe.transform(new Date(), 'dd-MMM-yyyy');
        file["lastModified"] = this.datePipe.transform(_file.lastModified, 'dd-MMM-yyyy');
        file["file"] = this.fileDAL.newfile(fileInput.target.files[0].name.replace(/[^\w\s][^\w.]/gi, ''), fileInput.target.files[0]);
        if(this.files == null) this.files = [];
        this.files.splice(0, 0, file);
        this.currentProject.set("files", this.files);
        this.projectDAL.update(this.currentProject);
      }else{
        alert("File type not support.");
      }
    }
    console.log(fileInput.target.files);
    console.log(this.getFileExtension(fileInput.target.files[0].name));
  }

  getFileExtension(filename: any) {
    var ext = /^.+\.([^.]+)$/.exec(filename);
    return ext == null ? "" : ext[1];
  }

  isValidFileType(fileType: any){
    var valid = false;
    this.extension.forEach((type: any) => {
      if(type.toUpperCase() == fileType.toUpperCase()){
        valid = true;
      }
    });
    return valid;
  }

  showDeleteModal(filename: String){
    this.currentFileName = filename;
    this.deleteModal.show();
  }

  deleteFile(){
    var index = 0;
    this.files.forEach((file: any)=>{
      if(file.file._name == this.currentFileName){
        this.files.splice(index, 1);
      }
      index++;
    });
    this.projectDAL.update(this.currentProject);
    this.deleteModal.hide();
  }

}
