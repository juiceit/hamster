export interface Resource {
  name: string;
  hamster: number;
}

export interface Food extends Resource {
  unit: string;
  size: number;
}

export interface AcquiredResource {
  type: Resource;
  quantitiy: number;
  place: string;
}

export interface AcquiredFood extends AcquiredResource {  
  startDate: Date;
  bestBefore: Date;
}

export interface ShoppingListItem {
  type: Resource;
  quantity: number;
}
