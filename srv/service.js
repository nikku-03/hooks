const cds = require('@sap/cds')
// const { useInsertionEffect } = require('react')

// const cds = require('@sap/cds')

//module.exports = cds.service.impl(function(){
// const{Orders} =  this.entities
//module.exports = cds.service.impl(function(){
// const {entity} =  this.entities.
//
//
//
//})

//})

module.exports = cds.service.impl(function(){
    const{ Orders } = this.entities

    //BEFORE: VALIDATE QTY
    this.before(['CREATE','UPDATE'], Orders,req =>{
        if(req.data.qty <=0){
            req.error(400, 'Quantity must be greater than zero')
        }
    })

    
    //ON: LOG AND CREATE RECORD
    this.on('CREATE', Orders,async req => {
        console.log("ON Handler: Creating Order", req.data)

        return INSERT.into(Orders).entries(req.data)
    })

    //AFTER: ADD COMPUTED INTO FIELDS
    this.after('READ', Orders,each => {
        if(!each) return
        each.info = each.qty > 5? "BULK ORDER" : "NORMAL ORDER"
    })



})

