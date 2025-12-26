const express=require("express")
const app=express()
const mongoose=require("mongoose")

//mongodb+srv://book:book@cluster0.uvydzhs.mongodb.net/

app.use(express.json())

main().catch(err => console.log(err));
async function main(){
    await mongoose.connect("mongodb+srv://book:book@cluster0.uvydzhs.mongodb.net/bookingapp")
}

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
    }

})

const Trip= mongoose.model("Trip",tripSchema)

const bookingSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    tripId:{
        type:String,
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
        let info={};
        if(req.query.from){
            info.from=req.query.from
        };

        if(req.query.to){
            info.to=req.query.to
        }

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
        //     to:"Banglore",
        //     date:"2025-12-25",
        //     depature:"22:00",
        //     arrival:"06:00",
        //     oprators:"Shanmukh Travels"
        // }

       console.log(info)
        const specfictrips=await Trip.find(info)
        res.json(specfictrips)

    } catch (error) {
        res.send(error)
    }

})




app.listen(8888,()=>{
    console.log("Server is running")
})