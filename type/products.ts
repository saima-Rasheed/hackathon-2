
export interface Product {
    _id: string;
    productName: string;
    category: string;
    price: number;
    inventory: number;
    colors: string[];
    status: string;
    image: {
      asset: {
        _ref: string;
        _type: "reference";
      };
      };
      slug : {
        _type: "slug";
        current : "slug";
      };

  
    description: string;
  }
  