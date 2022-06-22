import { Employee } from './../employee/employee.modal';
import { Client } from './../client/client.modal';
import { MedicineType } from './../medicines/medicine.model';

export interface Sales{
    id:String;
    medicine: MedicineType;
    totalValue:Number;    
    employee: Employee;
    costumer: Client; 
}