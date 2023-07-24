public with sharing class EmptyCheckPhonefield {
    public static void checkPhoneField(List<Account> lstobj) {
        List<Account> lstacc= new List<Account>();
        if(!lstobj.isEmpty()){
        for(Account ac: lstobj){

            if(ac.Phone == null)
            {
                ac.Phone.addError('The phone field cannot be empty');

                lstacc.add(ac);

            }
            
        }
    }


    }

    public static void fillShippingAddress(List<Account> lstobj) {
        List<Account> lstac= new List<Account>();
        if(!lstobj.isEmpty())
        {
            for(Account ac:lstobj)
            {
                if(ac.BillingCity!=null && ac.BillingCountry!=null && ac.BillingState!=null && ac.BillingStreet!=null && ac.BillingPostalCode!=null)
                {
                    ac.ShippingCity=ac.BillingCity;
                    ac.ShippingCountry=ac.BillingCountry;
                    ac.ShippingState=ac.BillingState;
                    ac.ShippingPostalCode=ac.BillingPostalCode;
                    ac.ShippingStreet=ac.BillingStreet;

                    lstac.add(ac);

                }
            }
        }
    }

}