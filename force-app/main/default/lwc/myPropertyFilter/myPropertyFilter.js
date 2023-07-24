import { LightningElement } from 'lwc';

export default class MyPropertyFilter extends LightningElement {
    location;
    noofBedroom;
    noofBathroom;
    maxBudget;

    get locationOptions(){
        return[
            { value: 'All', label: 'All' },
            { value: 'Mumbai', label: 'Mumbai'},
            { value: 'Pune', label: 'Pune'}

        ];
    }

    get noofBedroomOptions(){
        return[
            
                { value: 'All', label: 'All' },
                { value: '1', label: '1' },
                { value: '2', label: '2' },
                { value: '3', label: '3' },
                { value: '4', label: '4' },
                { value: '5', label: '5' }
        ];
    }

    get noofBathroomOptions()
    {
        return[
            { value: 'All', label: 'All' },
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
            { value: '4', label: '4' },
            { value: '5', label: '5' }
        ];

    }

    HandleChangeLocality(event){
        this.location=event.target.value;
        console.log('this.location-->'+this.location);
    }

    HandleChangenoOfBedRoom(event){
        this.noofBedroom=event.target.value;
        console.log('this.bedroom-->'+this.noofBedroom);
    }

    HandleChangenoOfBath(event){
        this.noofBathroom=event.target.value;
        console.log('this.bathroom-->'+this.noofBathroom);
    }

    HandleChangeBudget(event)
    {
        this.maxBudget=event.target.value;
        console.log('this.maxBudget-->'+this.maxBudget);

    }

}