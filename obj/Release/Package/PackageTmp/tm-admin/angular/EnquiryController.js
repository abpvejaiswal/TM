﻿
var app = angular.module('EnquiryApp', ['ngRoute', 'ngTagsInput', 'ngProgress']);

// Order Master
app.controller('EnquiryController', function ($scope, $http, $window, ngProgressFactory) {

    $scope.progressbar = ngProgressFactory.createInstance();
    
    //$scope.exporting = true;
    debugger;
    $scope.VariantList = [];
    $scope.VariantList1 = [];
    $scope.stocklist = [{ "module": "GOLDI003PM(3WP)", "stockgoldi": "1600", "stockkanpur": "1400", "stockchakan": "1000", "stockkalamboli": "1000", "total": "5000", "reservedstock": "100", "customername": "ABC", "netstock": "2100", "incoming": "100", "final": "2200", "KW": "11.76", "mounting": "Test" },
{ "module": "GOLDI005PM_18S(5WP)", "stockgoldi": "1600", "stockkanpur": "1400", "stockchakan": "1000", "stockkalamboli": "1000", "total": "5000", "reservedstock": "100", "customername": "ABC", "netstock": "2100", "incoming": "100", "final": "2200", "KW": "11.76", "mounting": "Test" },
{ "module": "GOLDI012PM(10WP)", "stockgoldi": "1600", "stockkanpur": "1400", "stockchakan": "1000", "stockkalamboli": "1000", "total": "5000", "reservedstock": "100", "customername": "ABC", "netstock": "2100", "incoming": "100", "final": "2200", "KW": "11.76", "mounting": "Test" },
{ "module": "GOLDI012PM_18S(10WP)", "stockgoldi": "1600", "stockkanpur": "1400", "stockchakan": "1000", "stockkalamboli": "1000", "total": "5000", "reservedstock": "100", "customername": "ABC", "netstock": "2100", "incoming": "100", "final": "2200", "KW": "11.76", "mounting": "Test" },
{ "module": "GOLDI012PM(12WP)", "stockgoldi": "1600", "stockkanpur": "1400", "stockchakan": "1000", "stockkalamboli": "1000", "total": "5000", "reservedstock": "100", "customername": "ABC", "netstock": "2100", "incoming": "100", "final": "2200", "KW": "11.76", "mounting": "Test" },
{ "module": "GOLDI015PM(15WP)", "stockgoldi": "1600", "stockkanpur": "1400", "stockchakan": "1000", "stockkalamboli": "1000", "total": "5000", "reservedstock": "100", "customername": "ABC", "netstock": "2100", "incoming": "100", "final": "2200", "KW": "11.76", "mounting": "Test" },
{ "module": "GOLDI020PM(20WP)", "stockgoldi": "1600", "stockkanpur": "1400", "stockchakan": "1000", "stockkalamboli": "1000", "total": "5000", "reservedstock": "100", "customername": "ABC", "netstock": "2100", "incoming": "100", "final": "2200", "KW": "11.76", "mounting": "Test" },
{ "module": "GOLDI030PM(25WP)", "stockgoldi": "1600", "stockkanpur": "1400", "stockchakan": "1000", "stockkalamboli": "1000", "total": "5000", "reservedstock": "100", "customername": "ABC", "netstock": "2100", "incoming": "100", "final": "2200", "KW": "11.76", "mounting": "Test" },
{ "module": "GOLDI030PM(30WP)", "stockgoldi": "1600", "stockkanpur": "1400", "stockchakan": "1000", "stockkalamboli": "1000", "total": "5000", "reservedstock": "100", "customername": "ABC", "netstock": "2100", "incoming": "100", "final": "2200", "KW": "11.76", "mounting": "Test" },
{ "module": "GOLDI045PM(37WP)", "stockgoldi": "1600", "stockkanpur": "1400", "stockchakan": "1000", "stockkalamboli": "1000", "total": "5000", "reservedstock": "100", "customername": "ABC", "netstock": "2100", "incoming": "100", "final": "2200", "KW": "11.76", "mounting": "Test" },
{ "module": "GOLDI045PM(40WP)", "stockgoldi": "1600", "stockkanpur": "1400", "stockchakan": "1000", "stockkalamboli": "1000", "total": "5000", "reservedstock": "100", "customername": "ABC", "netstock": "2100", "incoming": "100", "final": "2200", "KW": "11.76", "mounting": "Test" }];

    $scope.Changetotalstock = function (Variant) {


        $scope.stocklist[Variant].total = (parseFloat($scope.stocklist[Variant].stockgoldi) + parseFloat($scope.stocklist[Variant].stockkanpur) + parseFloat($scope.stocklist[Variant].stockchakan) + parseFloat($scope.stocklist[Variant].stockkalamboli));
    }

    console.log($scope.stocklist);
    $scope.tags_product = [];
    //var countries = [{ "id": "1", "Name": "GOLDI003PM(3WP)", "Description": "Desc 1", "Unit": "nos", "Mrp": "1000", "Tax": "5", "SellingPrice": "899", "image": "Resources/product/cctv1.png" }, { "id": "2", "Name": "GOLDI005PM_18S(5WP)", "Description": "Desc 2", "Unit": "nos", "Mrp": "1000", "Tax": "5", "SellingPrice": "899", "image": "Resources/product/cctv2.jpg" }, { "id": "3", "Name": "GOLDI012PM(10WP)", "Description": "Desc 3", "Unit": "nos", "Mrp": "1000", "Tax": "5", "SellingPrice": "899", "image": "Resources/product/cctv3.jpg" }, { "id": "6", "Name": "GOLDI012PM_18S(10WP)", "Description": "Desc 4", "Unit": "nos", "Mrp": "1000", "Tax": "5", "SellingPrice": "999", "image": "Resources/product/cctv1.png" }, { "id": "7", "Name": "GOLDI012PM(12WP)", "Description": "Desc 5", "Unit": "nos", "Mrp": "1200", "Tax": "5", "SellingPrice": "1000", "image": "Resources/product/02.jpg" }, { "id": "10", "Name": "GOLDI015PM(15WP)", "Description": "testing", "Unit": "nos", "Mrp": "200", "Tax": "5", "SellingPrice": "100", "image": "Resources/product/applogo (1).png" }, { "id": "9", "Name": "GOLDI020PM(20WP)", "Description": "Desc 7", "Unit": "nos", "Mrp": "2000", "Tax": "5", "SellingPrice": "1599", "image": "Resources/product/cctv1.png" }];
    var countries = [];
    $scope.GetAppProduct = function () {
        debugger;
        var detail = $.param({
            ACTION: "getallitemdata"
        });
        $http({

            method: 'POST',
            url: '/ControllerServices.asmx/GetAllItemData',
            data: detail,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }).then(function (success) {
            debugger;
            console.log(success.data.getallproduct);
            countries = success.data.getallproduct;
            // alert(JSON.stringify(success.data.getallproduct));

            //console.log('ordermasterlist ');
        }, function (error) {
            console.log(error);
            debugger;
            window.alert('Failed To Load');
        });
    }
    $scope.GetAppProduct();
    $scope.TotalAmount = 0;
    $scope.Tax = 0;
    $scope.TaxTotal = 0;
    $scope.fredght = 0;
    $scope.subamount = 0;
    $scope.loadCountries = function ($query) {
        return countries.filter(function (country) {
            return country.Name.toLowerCase().indexOf($query.toLowerCase()) != -1;
        });
    };
    $scope.totalamt = '';
    $scope.ChangedTagInput = function (VariantList) {
        debugger;
        $scope.exporting = false;
        var _atm = {
            OptionName: $scope.OptionName,
            text: VariantList[VariantList.length - 1].Name,
            pid: VariantList[VariantList.length - 1].id,
            Unit: 'nos',
            Qty: '1',
            Rate: '0',
            Tax: '0',
            Amount: '0'

        };
        $scope.TotalAmount = 0;
        //$scope.TotalAmount = parseFloat(VariantList[VariantList.length - 1].Mrp) + parseFloat($scope.TotalAmount);
        $scope.TaxTotal = 0;

        if ($scope.Tax != 0) {
            $scope.TaxTotal = ($scope.TotalAmount * $scope.Tax / 100).toFixed(2);
            $scope.TotalAmount = (parseFloat($scope.TotalAmount) + parseFloat($scope.TaxTotal)).toFixed(2);
            
        }

        if ($scope.fredght != 0) {

            $scope.TotalAmount = (parseFloat($scope.TotalAmount) + parseFloat($scope.fredght)).toFixed(2);
        }
        $scope.VariantList.push(_atm);
        console.log('changesdtagput');
        console.log($scope.VariantList);
        console.log(VariantList);
    }
    //$scope.Total = $scope.VariantList[0].Amount;
   
    $scope.ChangeRate = function (Variant) {
        debugger;
        $scope.VariantList[Variant].Amount = ($scope.VariantList[Variant].Rate * $scope.VariantList[Variant].Qty).toFixed(2);
        $scope.TotalAmount = 0;
        for ($scope.k = 0; $scope.k <= $scope.VariantList.length - 1; $scope.k++) {
            $scope.TotalAmount = (parseFloat($scope.VariantList[$scope.k].Amount) + parseFloat($scope.TotalAmount)).toFixed(2);
            $scope.subamount = $scope.TotalAmount;
        }
        $scope.TaxTotal = 0;
        if ($scope.Tax != 0) {
            $scope.TaxTotal = ($scope.TotalAmount * $scope.Tax / 100).toFixed(2);
            $scope.TotalAmount = (parseFloat($scope.TotalAmount) + parseFloat($scope.TaxTotal)).toFixed(2);
        }
        if ($scope.fredght.text != "") {
            $scope.TotalAmount = (parseFloat($scope.TotalAmount) + parseFloat($scope.fredght)).toFixed(2);
        }
        //if ($scope.VariantList[Variant].Qty != "" && $scope.VariantList[Variant].Qty != "0") {
        //    $scope.VariantList[Variant].Amount = $scope.VariantList[Variant].Qty * $scope.VariantList[Variant].Amount;
        //    $scope.exporting = false;
        //} else {
        //    $scope.exporting = true;
        //}

        //console.log(tag.text);
        //var Rate = $scope.VariantList.map(function (img) { return img.text; }).indexOf(tag.Rate);
        //var Amount = $scope.VariantList.map(function (img) { return img.text; }).indexOf(tag.Amount);
        //console.log(index);
        //$scope.VariantList.ChangeRate(Rate * tag, 1);
        //$scope.VariantList.ChangeRate(Amount * tag, 1);

    }

    $scope.ChangeRatetwo = function (Variant) {
        $scope.TotalAmount = 0;
        for ($scope.k = 0; $scope.k <= $scope.VariantList.length - 1; $scope.k++) {
            $scope.TotalAmount = (parseFloat($scope.VariantList[$scope.k].Amount) + parseFloat($scope.TotalAmount)).toFixed(2);
            $scope.subamount = $scope.TotalAmount;
        }
        $scope.TaxTotal = 0;
        if ($scope.Tax != 0) {
            $scope.TaxTotal = ($scope.TotalAmount * $scope.Tax / 100).toFixed(2);
            $scope.TotalAmount = (parseFloat($scope.TotalAmount) + parseFloat($scope.TaxTotal)).toFixed(2);
        }
        if ($scope.fredght.text != "") {
            $scope.TotalAmount = (parseFloat($scope.TotalAmount) + parseFloat($scope.fredght)).toFixed(2);
        }
    }




    $scope.RemovedTag = function (tag) {
        debugger;
        console.log(tag.text);
        var index = $scope.VariantList.map(function (img) { return img.text; }).indexOf(tag.Name);
        console.log(index);
        $scope.VariantList.splice(index, 1);
        if ($scope.VariantList == "") {
            $scope.exporting = true;
        }
        $scope.TotalAmount = 0;
        for ($scope.k = 0; $scope.k <= $scope.VariantList.length - 1; $scope.k++) {
            $scope.TotalAmount = (parseFloat($scope.VariantList[$scope.k].Amount) + parseFloat($scope.TotalAmount)).toFixed(2);
            $scope.subamount = $scope.TotalAmount;
        }
        $scope.TaxTotal = 0;
        if ($scope.Tax != 0) {
            $scope.TaxTotal = ($scope.TotalAmount * $scope.Tax / 100).toFixed(2);
            $scope.TotalAmount = (parseFloat($scope.TotalAmount) + parseFloat($scope.TaxTotal)).toFixed(2);
        }
        if ($scope.fredght.text != "") {
            $scope.TotalAmount = (parseFloat($scope.TotalAmount) + parseFloat($scope.fredght)).toFixed(2);
        }
    }

    $scope.QuotationId = "";
    $scope.ENQUIRY = { CLIENT_ID: '0', CLIENTNAME: '', MOBILE: '', ZONE: '0', C_PERSON: '', EMAIL: '', ADDRESS: '', LEAD: '', REF: '', REFMOB: '', CITY: '0', STATE: '0', SOURCE: '0', BANK: '0', EMP: '0' };
    $scope.CityList = [];
    $scope.GetCityDataByID = function () {
        debugger;
        //if ($(".CLIENT_ID").val() == "0") {
        //    $scope.disdata = false;
        //} else {
        //    $scope.disdata = true;
        //}
        var detail = $.param({
            ACTION: "getcity",
            StateID: $(".STATE").val()
        });
        $http({

            method: 'POST',
            url: '/ControllerServices.asmx/GetCityData',
            data: detail,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }).then(function (success) {
            debugger;
            
            $scope.CityList = success.data.GetCityData;
            console.log("CityData");
            console.log($scope.CityList);
            //console.log(success.data.getallproduct);
            //countries = success.data.getallproduct;
            //alert(JSON.stringify(success.data.getclient[0].source));

            //console.log('ordermasterlist ');
        }, function (error) {
            console.log(error);
            debugger;
            window.alert('Failed To Load');
        });
    }

    $scope.ChangeData = function () {
        debugger;
        //if ($(".CLIENT_ID").val() == "0") {
        //    $scope.disdata = false;
        //} else {
        //    $scope.disdata = true;
        //}
        var detail = $.param({
            ACTION: "getclient",
            ClientID: $(".CLIENT_ID").val()
        });
        $http({

            method: 'POST',
            url: '/ControllerServices.asmx/GetClientDataData',
            data: detail,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }).then(function (success) {
            debugger;
            if (success.data.getclient != null) {
                debugger;
                $scope.disdata = true;
                //$('.Sourcelead option[value="News"]').attr("selected", true);
                $scope.ENQUIRY.CLIENTNAME = '';
                $scope.ENQUIRY.MOBILE = '';
                $scope.ENQUIRY.EMAIL = '';
                $scope.ENQUIRY.ADDRESS = '';
                $scope.ENQUIRY.LEAD = '';
                $scope.ENQUIRY.REF = '';
                $scope.ENQUIRY.SOURCE = 0;
                $scope.ENQUIRY.EMP = 0;
                
              //  $(".ddlSourcelead").val(success.data.getclient[0].source);
                //$(".myfg").addClass("fg-toggled");
                //$scope.ENQUIRY.MOBILE = success.data.getclient[0].mobile;
                //$scope.ENQUIRY.MOBILE = parseFloat($scope.ENQUIRY.MOBILE);
                //$scope.ENQUIRY.EMAIL = success.data.getclient[0].email;
                //$scope.ENQUIRY.ADDRESS = success.data.getclient[0].address;
                //$scope.ENQUIRY.LEAD = success.data.getclient[0].valueoflead;
                //$scope.ENQUIRY.REF = success.data.getclient[0].refe;
                //$scope.ENQUIRY.SOURCE = success.data.getclient[0].source;
            } else {
                $scope.ENQUIRY.CLIENTNAME = '';
                $scope.ENQUIRY.MOBILE = '';
                $scope.ENQUIRY.EMAIL = '';
                $scope.ENQUIRY.ADDRESS = '';
                $scope.ENQUIRY.LEAD = '';
                $scope.ENQUIRY.REF = '';
                $scope.ENQUIRY.SOURCE = 0;
                $scope.ENQUIRY.EMP = 0;
                $scope.disdata = false;
            }
            //console.log(success.data.getallproduct);
            //countries = success.data.getallproduct;
            //alert(JSON.stringify(success.data.getclient[0].source));

            //console.log('ordermasterlist ');
        }, function (error) {
            console.log(error);
            debugger;
            window.alert('Failed To Load');
        });
    }
    $scope.SEARCH_USER = { MESSAGE: '' };
    $scope.SaveEnquiry = function (enquiry) {
        debugger;
        if ($(".CLIENT_ID").val() == "0") {
            if (enquiry.CLIENTNAME == '' || enquiry.MOBILE == '' || enquiry.EMAIL == '' || enquiry.ADDRESS == '' || enquiry.LEAD == '' || $(".SOURCE").val() == '0' || $(".BANK").val() == '0' || $(".EMP").val() == '0') {
                alert("All Field Requied");
                $scope.SEARCH_USER.MESSAGE = "*";
                return;
            }
        }
        if ($scope.TotalAmount == "0") {
            alert("Select Item And Fill Amount");
            return;
        }
        
        //$scope.HTMLPDF = document.getElementById("dvTable").innerHTML;
        $scope.exporting = true;
        $(".gifloader").html('<img src="/gg-admin/img/Rolling.gif" />');
        //$(".gifloader").text('<img src="/gg-admin/img/Rolling.gif" />');
        var detail = $.param({
            type: "insertenquiry",
            tax: $scope.Tax,
            subtotal: $scope.subamount,
            total:$scope.TotalAmount,
            Data: JSON.stringify($scope.VariantList),
            ENQUIRY_DATA: JSON.stringify(enquiry),
            CLIENT_ID: $(".CLIENT_ID").val(),
            SOURCE: $(".SOURCE").val(),
            STATE: $(".STATE").val(),
            CITY: $(".CITY").val(),
            ZONE: $(".ZONE").val(),
            //BANK: $(".BANK").val(),
            EMP: $(".EMP").val()
            
        });
        $http({

            method: 'POST',
            url: '/ControllerServices.asmx/InsertEnquiryData',
            data: detail,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }).then(function (success) {
            debugger;
            console.log(success.data);
            //countries = success.data.getallproduct;
            alert(JSON.stringify(success.data.ORIGINAL_ERROR));
            $window.location.reload();
            $scope.exporting = false;
            //console.log('ordermasterlist ');
        }, function (error) {
            console.log(error);
            debugger;
            window.alert('Failed To Load');
            $scope.exporting = false;
            $(".gifloader").text("Submit");
        });
    }

    $scope.enquirylist = [];
    // Get ORder Master
    var GetOrderMaster = function () {
        debugger;
        $scope.progressbar.start();
        
        var data = $.param({
            ACTION: "getenquirydata"
        });
        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                //   'Cross'
            }
        }
        $http({
            method: 'POST',
            url: '/ControllerServices.asmx/GetEnquiryData',
            data: data,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }).then(function (success) {
            $scope.enquirylist = success.data.GetEnquiryData;
            console.log('ordermasterlist');
            console.log($scope.enquirylist);
            $scope.progressbar.complete();

        }, function (error) {
            console.log(error);
            window.alert('Failed To Load');
            $scope.progressbar.complete();
        });
    };
    GetOrderMaster();

    $scope.allenquirylist = [];
    // Get ORder Master
    var GetAllOrderMaster = function () {
        debugger;
        $scope.progressbar.start();

        var data = $.param({
            ACTION: "getallenquirydata"
        });
        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                //   'Cross'
            }
        }
        $http({
            method: 'POST',
            url: '/ControllerServices.asmx/GetEnquiryData',
            data: data,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }).then(function (success) {
            $scope.allenquirylist = success.data.GetEnquiryData;
            console.log('allordermasterlist');
            console.log($scope.allenquirylist);
            $scope.progressbar.complete();

        }, function (error) {
            console.log(error);
            window.alert('Failed To Load');
            $scope.progressbar.complete();
        });
    };
    GetAllOrderMaster();
    $scope.singleenquirylist = [];
    $scope.enquiryproductlist = [];
    $scope.enquiryproducttotal = "";
    $scope.enquiryproducttax = "";
    $scope.enquiryproductsubtotal = "";
    // Get ORder Master
    $scope.GetEmployeeMaster = function (all, x, y, z, p) {
        $scope.singleenquirylist = all;
        $scope.enquiryproductlist = x;
        $scope.enquiryproducttotal = y;
        $scope.enquiryproducttax = z;
        $scope.enquiryproductsubtotal = p;
    };

    $scope.DeleteEnquiry = function (id) {
        debugger;
        

        //$scope.HTMLPDF = document.getElementById("dvTable").innerHTML;
       
        var detail = $.param({
            type: "deleteenquiry",
            cid: id

        });
        $http({

            method: 'POST',
            url: '/ControllerServices.asmx/DeleteEnquiryData',
            data: detail,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }).then(function (success) {
            debugger;
            console.log(success.data);
            
            alert(JSON.stringify(success.data.ORIGINAL_ERROR));
            $window.location.reload();
            
            
        }, function (error) {
            console.log(error);
            debugger;
            window.alert('Failed To Load');
            
        });
    }
});
