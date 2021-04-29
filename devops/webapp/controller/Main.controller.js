sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,JSONModel) {
		"use strict";

		return Controller.extend("ux.devops.controller.Main", {
			onInit: function () {
				var that=this;
				var sServiceUrl = "/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/";
	
				   var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl);
				  // @ts-ignore
				  this.getView().setModel(oModel);




	// crm model
	var oCRMModel =  new JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products('AR-FB-1000')?$format=json");
	// @ts-ignore
	this.getView().byId("crmcontainer").setModel(oCRMModel,"CRM");

	// workday model
	var oWDModel =  new JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products('AR-FB-1009')?$format=json");
	// @ts-ignore
	this.getView().byId("wdcontainer").setModel(oWDModel,"WD");



			},
			onAfterRendering:function(){
				// ecc model
				var oECCModel =  new JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products('AR-FB-1005')?$format=json");
				// @ts-ignore
				this.getView().byId("ecccontainer").setModel(oECCModel,"ECC");

				// successfactors model
				var oSFCModel =  new JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products?$format=json");
				// @ts-ignore
				this.getView().byId("sapsfcontainer").setModel(oSFCModel,"SFC");
			},

			onBeforeRendering:function(){
			
				var oBWModel =  new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products?$format=json");
				// @ts-ignore
				this.getView().byId("bwcontainer").setModel(oBWModel,"oBWModel");

				var oPLMModel =  new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products?$format=json");
				// @ts-ignore
				this.getView().byId("plmcontainer").setModel(oPLMModel,"oPLMModel");
				   // java model
				var oAWSModel =  new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products?$format=json");
				// @ts-ignore
				this.getView().byId("awscontainer").setModel(oAWSModel,"AWS");
				   // Aws model
				var oSFModel =  new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products?$format=json");
				// @ts-ignore
				this.getView().byId("sfcontainer").setModel(oSFModel,"SF");
				  

			},
			onOpenAppDialog: function(oEvent){
				// @ts-ignore
				// @ts-ignore
				var   IvSystem ;
			//	var InpDate ="";
			//	var 	InpDate =this.getView().byId("CurrentDate").getValue();
			//	   var oModel =  new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/ZPI_DASHBOARD_SRV/PI_DSHBRDSet(IvSystem='ECC',IvDate='"+InpDate+"')?$expand=EtResultQueueSet,EtResultSystemSet,EtResultAppSet&$format=json");
				//   oModel.setSizeLimit(mSize);
				
				
					
				   // @ts-ignore
				   var oView = this.getView();
				   var oDialog = oView.byId("ADialog");
				 //  oDialog.setModel(oModelFetch, "tableModel");
				   // create dialog lazily
				   if (!oDialog) {
					   // create dialog via fragment factory
			           // @ts-ignore
			           oDialog = sap.ui.xmlfragment(oView.getId(), "ux.dashboardbas.view.AppDialog", this);
			           oView.addDependent(oDialog);
				   }
				  
                   oDialog.open();

				   var oModel = new JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Suppliers?$format=json");
				this.getView().byId("ADialog").setModel(oModel,"oModel");


			


                    // @ts-ignore
			//	var oModel=	this.getView().byId("crmcontainer").getModel("CRM");
				// @ts-ignore
			//	oModel.refresh();
				// @ts-ignore
		//		this.getView().setModel(oModel,"oModel");
               },
               

		});
	});
