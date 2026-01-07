const express=require("express")
const app=express()
const mongoose=require("mongoose")
const cors = require("cors")

//mongodb+srv://book:book@cluster0.uvydzhs.mongodb.net/

app.use(express.json())
app.use(cors())

main().catch(err => console.log(err));
async function main(){
    await mongoose.connect("mongodb+srv://book:book@cluster0.uvydzhs.mongodb.net/bookingapp")
}

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:String,

})

const User= mongoose.model("User",userSchema)


const tripSchema=new mongoose.Schema({
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    departure:{
        type:String,
        required:true

    },
    arrival:{
        type:String,
        required:true
    },
    operators:{
        type:String,
        required:true
    },
    price:{
        type:Number
       
    },
    rating:{
        type:Number
        
    },
    capacity:{
        type:Number,
        default:50
    },
    bookedUsers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"

    }]

    // bookedUser:[dgajgaggahgj,aggghdaghgjda,gfgagyaugeiia]

})

const Trip= mongoose.model("Trip",tripSchema)

const bookingSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    
    tripId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Trip",
        required:true
    },
    seat:{
        type:String,
        required:true
    },
    bookedAt:{
        type:Date,
        default:Date.now

    }

})

const Booking=mongoose.model("Booking",bookingSchema)

//localhost:8888/api/users
app.post("/api/users",async(req,res)=>{
    try {
        const newuser=await User.create(req.body);
        res.send("User Added Successfully")
        
    } catch (error) {
        res.send(error)
    }

})
//localhost:8888/api/trips
app.post("/api/trips",async(req,res)=>{
    try{
        console.log(req.body)
        const newtrip=await new Trip(req.body).save();
        res.send("Trip Added Successfully")


    }catch(err){
        res.send(err)
    }

})

app.get("/trips",async(req,res)=>{
    const alltrips= await Trip.find()
    res.send(alltrips)

})

// /find/trips?from=Hyderabad&to=Banglore
app.get("/find/trip",async(req,res)=>{
    try {
        //query={from:"hyderabad",to:"Banglore"}
        let info={};
        if(req.query.from){
            info.from=req.query.from
        };
        //info={from:"hyderabad"}

        if(req.query.to){
            info.to=req.query.to
        }
        //info={from:"hyderabad",to:"Banglore"}

        if(req.query.date){
            info.date=req.query.date
        }
        if(req.query.departure){
            info.departure=req.query.departure
        }

        if(req.query.arrival){
            info.arrival=req.query.arrival
        }

        if(req.query.operators){
            info.operators=req.query.operators
        }

        // info={
        //     from:"hyderabad",
        //     to:"Delhi",
        //    
        // }

       console.log(info)
        const specfictrips=await Trip.find(info)
        res.json(specfictrips)


    } catch (error) {
        res.send(error)
    }

})


app.post("/api/bookings",async(req,res)=>{
    try{
        console.log(req.body)
        const {email,tripId}=req.body;
        const user=await User.findOne({email:email});
        const userId=user._id;
        console.log(userId,tripId)
        

        let trip=await Trip.findById(tripId);
        if(trip.capacity>0){
            const newbooking=await Booking.create({
                userId:userId,
                tripId:tripId,
                seat:`S${trip.capacity}`
            });
            trip.bookedUsers.push(userId);
            trip.capacity-=1;
             await trip.save();
             res.send("Booking Successful")
        }else{
            res.send("No Seats Available")
        }







    }catch(err){
        res.send(err)
    }

})


app.listen(8888,()=>{
    console.log("Server is running")
})