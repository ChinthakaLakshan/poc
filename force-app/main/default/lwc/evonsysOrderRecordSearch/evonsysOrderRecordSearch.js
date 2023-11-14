import { LightningElement, track } from 'lwc';
import getEvonsysOrderRecords from '@salesforce/apex/EvonsysOrderRecordSearchController.getEvonsysOrderRecords';
export default class EvonsysOrderRecordSearch extends LightningElement {
    @track orderNo = '';
    @track evonsysOrderRecords = [];
    @track columns = [
        { label: 'Id', fieldName: 'Id' },
        { label: 'Name', fieldName: 'Name' },
        { label: 'Order Date', fieldName: 'Order_Date__c' },
        { label: 'Status', fieldName: 'Status__c' },
        { label: 'Total Price', fieldName: 'Total_cost__c' }
    ];

    handleSearch() {
        getEvonsysOrderRecords({ orderNo: this.orderNo })
            .then(result => {
                this.evonsysOrderRecords = result;
            })
            .catch(error => {
                console.error('Error in getting the records', error);
            });
    }

    handleOrderNoChange(event) {
        this.orderNo = event.target.value;
    }
}