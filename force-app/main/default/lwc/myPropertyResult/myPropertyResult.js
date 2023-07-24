import { LightningElement,wire,track,api } from 'lwc';
import getLatestProperty from '@salesforce/apex/PropertyDetails.getLatestProperty';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
export default class MyPropertyResult extends NavigationMixin(LightningElement){
properties;
propertiesFound;
@track propOwnerId;
feedbackpropId;
@api OpenPropertyEnquiry=false;
@track openOwnerDetails=false;
@wire(getLatestProperty)

wiredProperties({data,error}){
    if(data){
        this.properties=data;
        this.propertiesFound=true;

         // Access and display field names and values
         for (let i = 0; i < this.properties.length; i++) {
            const property = this.properties[i];
            console.log('property-->'+data.map(property => property.Id ));
            const fieldNames = Object.keys(property);
            console.log('fieldNames-->'+fieldNames);
            //console.log('property--->'+property);
            for (let j = 0; j < fieldNames.length; j++) {
                const fieldName = fieldNames[j];
                console.log(`${fieldName}: ${property[fieldName]}`);
            }
        }
    }
    else if(error){
       
        const toast3= new ShowToastEvent({
            title: 'Get Help',
            message:'Normal message',
            variant:"Error"
        });
        this.dispatchEvent(toast3);
        this.propertiesFound=false;

    }

}


handleClickPropertydetails(event){
    const recordId = event.target.dataset.recordid;
    const recordPageUrl = 'https://site-platform-6039-dev-ed.scratch.lightning.force.com/'+recordId ;
    console.log('recordId-->'+recordId);
    console.log('recordPageUrl-->'+recordPageUrl);
    this[NavigationMixin.Navigate]({
        type:'standard__webPage',
        attributes: {
            url: recordPageUrl
        }
    },
    true // Replaces the current page in your browser history with the URL
    );
    
    

}


HandleClickOwnerDetails(event){

    this.propOwnerId=event.target.value;
    console.log('this.PropOwnerId-->'+this.propOwnerId);
    this.openOwnerDetails=true;
    console.log('this.openOwnerDetails-->'+this.openOwnerDetails);

}


closeModal(){
    this.openOwnerDetails=false;
}

closeEnquiryModal(){
    this.OpenPropertyEnquiry=false;
    
}




HanldeClickEnquiryDetails(event){
    this.OpenPropertyEnquiry=true;
    console.log('this.OpenPropertyEnquiry-->'+this.OpenPropertyEnquiry);
    this.feedbackpropId=event.target.value;
    console.log('this.propEnquiryID-->'+this.feedbackpropId);
    
}

}