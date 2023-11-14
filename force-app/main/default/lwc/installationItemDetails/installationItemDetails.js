import { LightningElement , api, wire} from 'lwc';
import getInstallationItemDetails from '@salesforce/apex/InstallationItemDetails.getInstallationItemDetails';

export default class InstallationItemDetails extends LightningElement {
    @api recordId;
    installationItems;

    @wire(getInstallationItemDetails, { recordId: '$recordId' })
    wiredInstallationItem({ error, data }) {
        if (data) {
            this.installationItems = data;
        } else if (error) {
            console.info(this.recordId)
            console.error('Error retrieving Installation Item details', error);
        }
    }
}