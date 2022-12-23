const mongoose = require('mongoose');


const data=new mongoose.Schema({
   
    job_latitude:{type:String,required: true},
    fleet_email:{type:String,},
    is_routed:{type:String,},
    job_type:{type:String,},
    team_id:{type:String,},
    auto_assignment:{type:String,},
    job_description:{type:String,},
    timezone:{type:String,},
    fleet_rating:{type:String,},
    user_id:{ type:String,},
    job_id:{ type:String,},
    job_state:{ type:String,},
    job_latitude:{ type:String,},
    has_delivery:{ type:String,},
    pickup_delivery_relationship:{ type:String,},
    job_hash:{ type:String,},
    job_address:{ type:String,},
    job_latitude:{ type:String,},
    job_pickup_latitude:{ type:String,},
    job_status:{ type:String,},
    sign_image:{ type:String,},
    customer_username:{ type:String,},
    customer_email:{ type:String,},
    order_id:{ type:String,},
    customer_comment:{ type:String,},
    customer_phone:{ type:String,},
    is_active:{ type:String,},
    job_longitude:{ type:String,},
    dispatcher_id:{ type:String,},
    job_pickup_latitude:{ type:String,},
    is_customer_rated:{ type:String,},
    completed_by_admin:{ type:String},
    customer_id:{ type:String,},
    tookan_shared_secrete:{ type:String,},
    total_distance_travelled:{ type:String,},
    total_time_spent_at_task_till_completion:{ type:String,},
    session_id:{ type:String,},
    has_pickup:{ type:Boolean,},
    job_token:{ type:String,},
    job_pickup_address:{ type:String,},
    job_pickup_phone:{ type:String,},
    fleet_id:{ type:String,},
    fleet_name:{ type:String,},
    job_pickup_email:{ type:String,},
    custom_fields:[{
       label:String,
value:{type:Number,default:0},
required:{type:Number,default:1},
data_type:{type:String},
app_side: {type:Number,default:1},
data:{type:String},
template_id:{type:String},
item_id:{type:Number,default:0},
fleet_data:{type:String},
    },
    {
        label:String,
 value:{type:Number,default:1},
 required:{type:Number,default:1},
 data_type:{type:String},
 app_side: {type:Number,default:1},
 data:{type:String},
 template_id:{type:String},
 item_id:{type:Number,default:0},
 fleet_data:{type:String},
     },
     {
        label:String,
 value:{type:Number,default:1},
 required:{type:Number,default:1},
 data_type:{type:String},
 app_side:{type:Number,default:1} ,
 data:{type:String},
 template_id:{type:String},
 item_id:{type:Number,default:0},
 dropdown:[
    {
        id:0,value:"Bike"
    },
    {
        id:1,value:"Van"
    },
    {
        id:2,value:"Truck"
    },
 ]
     },
     {
        label:String,
 value:{type:Number,default:1},
 required:{type:Number,default:1},
 data_type:{type:Date},
 app_side: {type:Number,default:1},
 data:{type:String},
 template_id:{type:String},
 item_id:{type:Number,default:0},
 
     },
     {
        label:String,
 value:{type:Number,default:1},
 required:{type:Number,default:1},
 data_type:{type:Number},
 app_side: {type:Number,default:1},
 data:{type:String},
 template_id:{type:String},
 item_id:{type:Number,default:0},
 
     },
     {
        label:String,
 value:{type:Number,default:1},
 required:{type:Number,default:1},
 data_type:{type:String},
 app_side: {type:Number,default:0},
 data:{type:String},
 template_id:{type:String},
 item_id:{type:Number,default:0},
 dropdown:[
    {
        id:0,value:"Male"
    },
    {
        id:1,value:"Female"
    },
    
 ]
     },
     {
        label:String,
 value:{type:Number,default:1},
 required:{type:Number,default:1},
 data_type:{type:String},
 app_side: {type:Number,default:1},
 data:{type:String},
 template_id:{type:String},
 item_id:{type:Number,default:0},
 fleet_data:{type:String},
     },
     {
        label:String,
 value:{type:Number,default:1},
 required:{type:Number,default:1},
 data_type:{type:String},
 app_side: {type:Number,default:1},
 data:{type:String},
 template_id:{type:String},
 item_id:{type:Number,default:0},
 fleet_data:{type:String},

     },
     

],

task_history:[
    {
    id:{type:Number},
    job_id:{type:Number},
    fleet_id:{type:Number},
latitude:{type:String},
longitude:{type:String},
type:{type:String},
description:{type:String},
creation_datetime:{type:Date},
    
 }
]
})
module.exports = mongoose.model('data',data);