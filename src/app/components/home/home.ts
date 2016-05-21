import {Component} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: 'app/components/home/home.html',
  styleUrls: ['app/components/home/home.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class Home {

 // commonDb: PouchDB ;

  //------ database references -----------------------------------------------------
  private remoteDbUrlPrefix : string = "https://siteadmin55:Skicolorado@siteadmin55.cloudant.com/" ;
  private remoteDbUserDbPrefix : string = "ca_user_" ;
  userDbUrl : string ;
  commonDbUrl = "https://siteadmin55:Skicolorado@siteadmin55.cloudant.com/ca_common_dev"  ;
  //--------------------------------------------------------------------------------

  constructor() {}

  ngOnInit() {

  }
  
  callDbTest() {
   // this.commonDb = new PouchDB(this.commonDbUrl) ;
    console.log("callDbTest") ;
  }
}
