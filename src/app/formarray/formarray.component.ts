import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { ResServicesService } from '../services/res-services.service';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrl: './formarray.component.css'
})
export class FormarrayComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  menudata: any;
  getdata: any;
  restaurantForm!: FormGroup;
  xyz: any;
  fetchData: boolean = false;
  isEditMode: boolean = false;
  editedMenuIndex: number = -1;

  constructor(private fb: FormBuilder, private ResServicesService : ResServicesService) {
    this.createForm();
  }
  ngOnInit() {
    this.addMenu(), this.addDish(0), this.addOffer(0, 0), this.getRestList();
  }
  createForm() {
    this.restaurantForm = this.fb.group({
      resname: ['', [Validators.required]],
      menu: this.fb.array([]),
    });
  }

  menuArray(): FormArray {
    return this.restaurantForm.get('menu') as FormArray;
  }

  addMenu() {
    const newMenu = this.fb.group({
      restypes: ['',[Validators.required]],
      count: ['',[Validators.required]],
      dish: this.fb.array([]),
    });
    this.menuArray().push(newMenu);
  }

  getDishArray(menuIndex: number): FormArray {
    return this.menuArray().at(menuIndex).get('dish') as FormArray;
  }

  addDish(menuIndex: number) {
    const newDish = this.fb.group({
      dishName: ['',[Validators.required]],
      price: ['',[Validators.required]],
      offer: this.fb.array([]),
    });
    this.getDishArray(menuIndex).push(newDish);
  }

  getOfferArray(menuIndex: number, dishIndex: number): FormArray {
    return this.getDishArray(menuIndex).at(dishIndex).get('offer') as FormArray;
  }

  addOffer(menuIndex: number, dishIndex: number) {
    const newOffer = this.fb.group({
      offerName: ['',[Validators.required]],
      discount: ['',[Validators.required]],
      // timestmp : this.fb.array([])
    });
    this.getOfferArray(menuIndex, dishIndex).push(newOffer);
  }

  // getTimestmpArray(menuIndex: number, dishIndex: number , offerIndex:number): FormArray{
  //       return this.getOfferArray(menuIndex, dishIndex).at(offerIndex).get('timestmp') as FormArray;
  // }
  // addTimestmp(menuIndex: number, dishIndex: number, offerIndex:number){
  //   const newTimestmp = this.fb.group({
  //     timestmp: ['']
  //   });
  //   this.getTimestmpArray(menuIndex, dishIndex, offerIndex).push(newTimestmp);
  // }
  getRestList() {
    //get restaurant
    this.fetchData = true;

    this.ResServicesService.getData().subscribe(async (res) => {
      console.log(res);

      this.getdata = await res.restaurantsList;
      // this.getdata.map((data: any)=>{
      //     this.menudata = data.menu;;
      //     // console.log(this.menudata);

      // })

      this.xyz = await this.getdata.length;
    });
  }
  
  deleteList(id: any) {
    this.ResServicesService.deleteData(id).subscribe((res) => {
      console.log('delete successfully');
      // location.reload();
    });
  }
  deleteMenu(id: any) {
    console.log(id);

    this.ResServicesService.deleteMenu(id).subscribe((res: any) => {
      console.log(res);
      // location.reload();
    });
  }
  
  onSubmit() {
    // console.log( JSON.stringify(this.restaurantForm.value));
    console.log(this.restaurantForm.value);
    // post restaurant
    if (this.restaurantForm.valid) {
      this.ResServicesService.postData(this.restaurantForm.value).subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.log('form not valid');
    }
  }
}
