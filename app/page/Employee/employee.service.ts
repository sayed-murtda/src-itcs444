import { Injectable } from '@angular/core';
export interface Emp {
  name: string;
  id: number;
  cpr: string;
  job: string;
  shift: string;
  certificate: string;
  switchShift: number[];
}
@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor() { }

  public Employee:Emp[] = 
  [{name: 'Ali Yusuf Ahmed', 
    id:0,
    cpr:'001101234',
    job:'Cashier',
    shift: '6am-2pm',
    certificate:'MSc',
    switchShift:[]
  },
  {name: 'Salman Ali', 
    id:1,
    cpr:'980104561',
    job:'Cashier',
    shift: '6am-2pm',
    certificate:'BSc',
    switchShift:[]
  },
  {name: 'Mohammed Isa', 
    id:2,
    cpr:'041103456',
    job:'Cashier',
    shift: '6am-2pm',
    certificate:'BSc',
    switchShift:[]
  },
  {name: 'Hussain Ali', 
    id:3,
    cpr:'031201234',
    job:'Cashier',
    shift: '2pm-10pm',
    certificate:'Diploma',
    switchShift:[]
  },
  {name: 'Sayed Hasan Abdulla', 
    id:4,
    cpr:'001201212',
    job:'Cashier',
    shift: '2pm-10pm',
    certificate:'Secondary',
    switchShift:[]
  },
  ];
  
}
