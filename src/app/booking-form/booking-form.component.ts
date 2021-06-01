import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';



interface ParcelT {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  
  parcelForm!: FormGroup;
  addressForm!: FormGroup;
  deliveryForm!: FormGroup;
 



  parcelTypes: ParcelT[] = [
    {value: 'Large Letter', viewValue: 'Large Letter'},
    {value: 'Small Parcel', viewValue: 'Small Parcel'},
    {value: 'Medium Parcel', viewValue: 'Medium Parcel'},
    {value: 'Large Parcel', viewValue: 'Large Parcel'},
  ];

  isLinear = false;
  minDate: Date;
  maxDate: Date;

  counter(i: number) {
    return new Array(i);
  }

  constructor(private fb: FormBuilder) { 

  	const currentYear = new Date().getFullYear();
    this.minDate = new Date();
    this.maxDate = new Date(currentYear + 1, 11, 31);


  }




  ngOnInit() {
  	

  	this.parcelForm = this.fb.group({

  		numOfParcels: ['', [Validators.required,Validators.min(5),Validators.max(50)]],
  		parcels: this.fb.array([])
  		//count: this.parcelForm.length();

  	})

  	this.parcelForm.valueChanges.subscribe() 

  	this.addressForm = this.fb.group({

  	// email: ['', Validators.required]
  	})


  	this.deliveryForm = this.fb.group({

  		firstName: '',
  		lastName:'',
  		email:'',
  		number:'',
  		address1:'',
  		address2:'',
  		city:'',
  		state:'',
  		country:'',
  		postcode:''
  	})
  }





  	get numOfParcels(){
  		return this.parcelForm.get('numOfParcels');
  	}

	get parcelForms(){
		return this.parcelForm.get('parcels') as FormArray
	}

	get count(){
		return this.parcelForms.length;
	}




	 onChangeTickets(e:any) {
        const parcelNumber = e.target.value || 0;
        if (this.parcelForms.length < parcelNumber) {
            for (let i = this.parcelForms.length; i < parcelNumber; i++) {

                this.parcelForms.push(this.fb.group({
                    parcelType:[],
	  				parcelContents:[],
                }));
            }
        } else {
            for (let i = this.parcelForms.length; i >= parcelNumber; i--) {
                this.parcelForms.removeAt(i);
            }
        }
    }

	addParcel(){


		const parcel = this.fb.group({
	  		parcelType:[],
	  		parcelContents:[],



	  	})

		this.parcelForms.push(parcel)
		// this.parcelForm.numOfParcels++


	}


	deleteParcel(i: any){

		this.parcelForms.removeAt(i)

	}



}
