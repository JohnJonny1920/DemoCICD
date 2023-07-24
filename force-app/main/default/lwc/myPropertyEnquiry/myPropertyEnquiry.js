import { LightningElement, api } from 'lwc';
import { refreshApex } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
export default class MyPropertyEnquiry extends NavigationMixin(LightningElement) {

    
    @api propertyId;
    @api objectApiName;
    @api recordId;
   
    handleSuccess(event){

        const evt = new ShowToastEvent({
            title: "Feedback Submitted",
            message: "Success",
            variant: "success"
        });
        
        
        this.dispatchEvent(evt);
       

        console.log('event dispatched');

        location.reload();
    }



    
}