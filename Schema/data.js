const mongoose=require("mongoose")
const data=new mongoose.Schema({
    job_id:{type:Number,},
    created_by:{type:Number,},
order_id:{type:String,},
recurring_id:{type:String,},
recurring_count:{type:Number},
partner_order_id:{type:String,},
team_id:{type:Number,},
vertical:{type:Number,},
merchant_id:{type:Number,},
geofence:{type:Number,},
tags:{type:String,},
auto_assignment:{type:Number,},

dispatcher_id:{type:String, default:null},
job_hash:{type:String,},
has_pickup:{type:Number,},
has_delivery:{type:Number,},
is_routed:{type:Number,},
pickup_delivery_relationship:{type:String,},
job_description:{type:String,},
job_pickup_datetime:{type:String,},
job_pickup_name:{type:String,},
job_pickup_phone:{type:String,},
job_delivery_datetime:{type:String,},
job_pickup_latitude:{type:String,},
job_pickup_longitude:{type:String,},
job_pickup_address:{type:String,},
job_pickup_email:{type:String,},
job_latitude:{type:String,},
job_longitude:{type:String,},
customer_username:{type:String,},
customer_email:{type:String,},
customer_phone:{type:String,},
job_address:{type:String,},
creation_datetime:{type:String,},
fleet_id:{type:Number,},
user_id:{type:Number,},
fleet_rating:{type:Number,},
customer_comment:{type:String,default:null},
is_customer_rated:{type:Number,},
customer_id:{type:Number,},
arrived_datetime:{type:String,},
started_datetime:{type:String,},
completed_datetime:{type:String,},
acknowledged_datetime:{type:String,},
job_status:{type:Number,},
is_active:{type:Number,},
job_type:{type:Number,},
completed_by_admin:{type:Number,},
open_tracking_link:{type:Number,},
timezone:{type:String,},
job_time:{type:String,},
job_date:{type:String,},
job_time_utc:{type:String,},
job_date_utc:{type:String,},
total_distance_travelled:{type:String,},
form_id:{type:Number,},
customer_rating:{type:Number,},
driver_comment:{type:String,default:null},
remarks:{type:String,default:null},
barcode:{type:String,default:null},
ride_type:{type:Number,},
matched_pickup_delivery_relationship:{type:String,default:null},
job_vertical:{type:Number,},
days_started:{type:String,},
tookan_shared_secret:{type:String,},
distance_in:{type:String,},
access_token:{type:String,},
domain:{type:String,},
agent_workflow:{type:Number,},
is_merchant:{type:Number,},
fleet_name:{type:String,},
fleet_email:{type:String,},
fleet_phone:{type:String,},
fleet_latitude:{type:String,},
fleet_longitude:{type:String,},
transport_type:{type:Number,},
license:{type:String,},
transport_desc:{type:String,},
  fleet_image:{type:String,},
  job_details_by_fleet:{type:Number,} ,
  external_fleet_id:{type:String,default:null} ,
  fleet_vehicle_type: {type:Number,},
  fleet_vehicle_color:{type:String,} ,
  fleet_vehicle_description: {type:String,},
  mission_id:{type:String,default:null} ,
  mission_status:{type:String,default:null} ,
  task_status:{type:Number,},
  promo_used:{type:String,} ,
  custom_fields: [
    {
      label: {type:String},
      display_name:{type:String},
      data_type:{type:String} ,
      app_side:{type:String} ,
      required:{type:Number} ,       

      value: {type:Number},
      data:{type:String} ,
      input:{type:String} ,
      template_id:{type:String} ,
      before_start:{type:Number} ,
      dropdown: [
        { id:{type:Number} , value:{type:String}  },
        { id:{type:Number} , value: {type:String} }
      ],
      fleet_data:{type:String}
    },
    {
      label:{type:String} ,
      display_name:{type:String} ,
      data_type:{type:String},
      app_side: {type:String},
      required: {type:Number},
      value: {type:Number},
      data:{type:String} ,
      input:{type:String} ,
      before_start: {type:Number},
      template_id: {type:String},
    },
    {
      label:{type:String} ,
      display_name:{type:String} ,
      data_type:{type:String} ,
      app_side: {type:String},
      required:{type:Number} ,
      value:{type:Number} ,
      data:{type:String} ,
      input:{type:String} ,
      before_start:{type:Number} ,
      template_id: {type:String}
    },
    {
      label: {type:String},
      display_name:{type:String} ,
      data_type:{type:String} ,
      app_side: {type:String},
      required:{type:Number} ,
      value:{type:Number} ,
      data:{type:String} ,
      input:{type:String} ,
      before_start:{type:Number} ,
      template_id:{type:String} 
    },
    {
      label:{type:String},
      display_name:{type:String} ,
      data_type: {type:String},
      app_side:{type:String} ,
      required: {type:Number},
      value: {type:Number},
      data:{type:String},
      input:{type:String} ,
      before_start: {type:Number},
      template_id:{type:String}
    }
  ],
  ref_images:{type:Array},
  tracking_link:{type:String},
  task_history:{type:Array} ,
  job_state:{type:String} ,
  task_state: {type:String},
  acknowledged_datetime_formatted:{type:String} ,
  job_token:{type:String} ,
  job_time_formatted:{type:String},
  job_pickup_datetime_formatted:{type:String} ,
  job_delivery_datetime_formatted:{type:String} ,
  total_distance:{type:String},
  webhook_type: {type:Number},
  format:{type:String},
  template_key:{type:String} ,
  is_internal:{type:Number} ,
  full_tracking_link:{type:String},
  isSent:{type:Boolean,default:true}
})
module.exports = mongoose.model('data',data);