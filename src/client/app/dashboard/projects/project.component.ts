import {Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/components/modal/modal.component';
import {Router} from '@angular/router';
import {ProjectDAL, CustomerDAL, UserDAL, PlatformDAL, TechnologyDAL} from "../../shared/index"

@Component({
	moduleId: module.id,
	selector: 'tables-cmp',
	templateUrl: 'project.component.html'
})



export class ProjectComponent {
  @ViewChild('ProjectModal') public ProjectModal:ModalDirective;

  // Button
  public singleModel:string = '1';
  public radioModel:string = 'Middle';
  public checkModel:any = {left: false, middle: true, right: false};

  public projects: any;
  public userList: any;
  public baList: any;
  public pmList: any;
  public devList: any;
  public cusList: any;
  public techList: any;

  //form data
  modalTitle = "Project information";
  projectName = "";
  projectCustomer = "";
  projectManager = "";
  projectBAEst = "";
  projectBABA = "";
  projectDevEst = "";
  projectDevDev = "";
  projectQC = "";
  projectStatus = "New";
  projectPlatform = "";
  projectTech = "";
  projectStartDate = "";
  projectEndDate = "";

  constructor(private projectDAL: ProjectDAL, private userDAL: UserDAL, private router: Router) {
    this.projectDAL.getProjects().then((data: any) => {
      this.projects = data;
    });
    this.userDAL.getUsers().then((data: any) => {
      this.userList = data;
    });
  }

  saveProject(){
    this.projectDAL.createProject(
      this.projectName, this.projectCustomer, this.projectManager, this.projectBAEst, this.projectBABA,
      this.projectDevEst, this.projectDevDev, this.projectQC, this.projectStatus, this.projectPlatform,
      this.projectTech, this.projectStartDate, this.projectEndDate
    ).then((data: any) => {
      console.log(data);
      this.ProjectModal.hide();
    });
  }

  public items:Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
    'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
    'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin', 'Düsseldorf',
    'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg', 'Hamburg', 'Hannover',
    'Helsinki', 'Leeds', 'Leipzig', 'Lisbon', 'Łódź', 'London', 'Kraków', 'Madrid',
    'Málaga', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Naples', 'Palermo',
    'Paris', 'Poznań', 'Prague', 'Riga', 'Rome', 'Rotterdam', 'Seville', 'Sheffield',
    'Sofia', 'Stockholm', 'Stuttgart', 'The Hague', 'Turin', 'Valencia', 'Vienna',
    'Vilnius', 'Warsaw', 'Wrocław', 'Zagreb', 'Zaragoza'];

  private value:any = [];
  private _disabledV:string = '0';
  private disabled:boolean = false;

  private get disabledV():string {
    return this._disabledV;
  }

  private set disabledV(value:string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }

  public selected(value:any):void {
    console.log('Selected value is: ', value);
  }

  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }

  public refreshValue(value:any):void {
    this.value = value;
  }

  public itemsToString(value:Array<any> = []):string {
    return value
      .map((item:any) => {
        return item.text;
      }).join(',');
  }
}
