import { Injectable } from '@angular/core';

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: 'admin-panel/Country',
    name: 'الدول',
    type: 'link',
    icon: 'poll'
  }, {
    state: 'admin-panel/City',
    name: 'المدن',
    type: 'link',
    icon: 'poll'
  },
  {
    state: 'admin-panel/Category',
    name: 'تصنيفات',
    type: 'link',
    icon: 'poll'
  },
  {
    state: 'admin-panel/Advertisement',
    name: 'الاعلانات',
    type: 'link',
    icon: 'recent_actors'
  },
  {
    state: 'admin-panel/Market',
    name: 'المحلات',
    type: 'link',
    icon: 'recent_actors'
  },
  //Admin
  {
    state: 'admin-panel/Admin',
    name: 'المستخدمين',
    type: 'link',
    icon: 'recent_actors'
  },

  // {
  //   state: 'admin-panel',
  //   name: 'Products',
  //   type: 'sub',
  //   icon: 'shopping_cart',
  //   children: [
  //     {state: 'products', name: 'Products',type : 'link'},
  //     {state: 'product-add', name: 'Product Add',type : 'link'}
  //   ]
  // },
  // {
  //   state: 'admin-panel/account/profile',
  //   name: 'Profile',
  //   type: 'link',
  //   icon: 'account_circle'
  // },
  
];

@Injectable()
export class AdminMenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
