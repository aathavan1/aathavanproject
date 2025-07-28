import { FormControl, FormGroup } from '@angular/forms'

export const api = 'http://localhost:8080'

export class statVariable {


    static statFormGroup = new FormGroup({
        createdby: new FormControl(''),
        productgroupcode: new FormControl(''),
        qualitycode: new FormControl(''),
        stylecode: new FormControl(''),
        sizegroupcode: new FormControl(''),
        sizecode: new FormControl(''),
        barcode: new FormControl(''),
        productname: new FormControl(''),
        shortname: new FormControl(''),
        brandcode: new FormControl(''),
        orderlevel: new FormControl(''),
        pieceperpack: new FormControl(''),
        mrprate: new FormControl(''),
        sellingrate: new FormControl(''),
        purrate: new FormControl(''),
        taxable: new FormControl(''),
        allowdiscount: new FormControl(''),
        hsncode: new FormControl(''),
        narration: new FormControl(''),
        productcode:new FormControl('')
    })

    static getFormGruop(): FormGroup {
        return this.statFormGroup;

    }
}

