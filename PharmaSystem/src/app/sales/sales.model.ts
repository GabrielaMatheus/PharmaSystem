import { Client } from "../client/client.modal";
import { Employee } from "../employee/employee.modal";
import { MedicineType } from "../medicines/medicine.model";

export interface Sales{
    id:String;
    nameEmployee?: Employee;
    medicine: MedicineType;
    qtdMedicine: Number;
    precoMedicine: Number;
    nameClient?: Client;
    grupo?:MedicineType;
    
}