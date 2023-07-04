import {Stripe} from "stripe";
import {Product} from 'src/interfaces/app.interface'

export interface  SubscriptionPlanProps{
    products:Product[]
}