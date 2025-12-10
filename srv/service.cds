using demo from '../db/schema.cds';

service catlogservice{

    entity Orders as projection on demo.Orders;
}

