public with sharing class InstallationItemDetails {
    public InstallationItemDetails() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Installation_Item__c> getInstallationItemDetails(String recordId){
        Evonsys_Item__c evonOrderRecord = [SELECT Product_Item__c FROM Evonsys_Item__c WHERE Id = :recordId];
        String productItemId = evonOrderRecord.Product_Item__c;
        List<Installation_Item__c> installationItems = [SELECT Id, Name, Version__c, Region__c, per_unit_cost__c, Warranty_period__c FROM Installation_Item__c WHERE Id = :productItemId];   
        return installationItems;
    }
}