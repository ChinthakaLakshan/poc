public with sharing class EvonsysOrderRecordSearchController {
    public EvonsysOrderRecordSearchController() {

    }
    
        @AuraEnabled 
        public static List<order__c> getEvonsysOrderRecords(String orderNo) {
            String searchOrder = '%' + orderNo + '%';
            List<order__c> EvonsysOrderRecords = [SELECT Id, Name, Order_Date__c, Status__c, Total_cost__c FROM order__c WHERE Name LIKE :searchOrder];
            return EvonsysOrderRecords;
        }
    }
