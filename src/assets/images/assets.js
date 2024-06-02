import DoubleVip_room from './DoubleVip_rooms.jpg';
import Double_room from './Double_rooms.jpg';
import family_room from './family_rooms.jpg';
import Hollywood_room from './Hollywood_rooms.jpg';
import King_room from './King_rooms.jpg';
import Quad_room from './Quad_rooms.jpg';
import Queen_room from './Queen_rooms.jpg';
import single_room from './single_rooms.jpg';
import singletype1_room from './singletype1_rooms.jpg';
import Studio_room from './Studio_rooms.jpg';
import Suite_room from './Suite_rooms.jpg';
import SuiteVip_room from './SuiteVip_rooms.jpg';
import Triple_room from './Triple_rooms.jpg';
import View_room from './View_rooms.jpg';
import Vip_room from './Vip_rooms.jpg'




export const room_list =[
    {
        id: "1",
        name: "Double Vip room",
        photo: DoubleVip_room,
        roomPrice: 300,
        description: "A room assigned to two people. May have one or more beds.The room size or area of Double Rooms are generally between 40 m² to 45 m².",
        roomType: "Double room"
    },
    {
        id: "2",
        name: "Double room",
        photo: Double_room,
        roomPrice: 120,
        description: "A room assigned to two people. May have one or more beds.The room size or area of Double Rooms are generally between 40 m² to 45 m².",
        roomType: "Double room"
    },
    {
        id: "3",
        name: "Family room",
        photo: family_room,
        roomPrice: 150,
        description: "A room assigned to one person. May have one or more beds.The room size or area of Single Rooms is generally between 37 m² to 45 m².",
        roomType: "Family room"
    },
    {
        id: "4",
        name: "Hollywood room",
        photo: Hollywood_room,
        roomPrice: 150,
        description: `A room that can accommodate two persons with two twin beds joined together by a common headboard. Most of budget hotels tend to provide many of these room settings which cater for both couples and parties in two.
        The room size or area of Hollywood Twin Rooms is generally between 32 m² to 40 m².`,
        roomType: "Hollywood room"
    },
    {
        id: "5",
        name: "King room",
        photo: King_room,
        roomPrice: 150,
        description: `A room with a king-sized bed. May be occupied by one or more people.
        The room size or area of King Rooms is generally between 32 m² to 50 m².`,
        roomType: "King room"
    },
    {
        id: "6",
        name: "Quad room",
        photo: Quad_room,
        roomPrice: 150,
        description: `A room assigned to four people. May have two or more beds.
        The room size or area of Quad Rooms is generally between 70 m² to 85 m².`,
        roomType: "Quad room"
    },
    {
        id: "7",
        name: "Queen room",
        photo: Queen_room,
        roomPrice: 150,
        description: `A room with a queen-sized bed. May be occupied by one or more people.
        The room size or area of Queen Rooms is generally between 32 m² to 50 m².`,
        roomType: "Queen room"
    },
    {
        id: "8",
        name: "Single room",
        photo: single_room,
        roomPrice: 150,
        description: `A room assigned to one person. May have one or more beds.
        The room size or area of Single Rooms is generally between 37 m² to 45 m².`,
        roomType: "Single room"
    },
    {
        id: "9",
        name: "Single Vip room",
        photo: singletype1_room,
        roomPrice: 150,
        description: `A room assigned to one person. May have one or more beds.
        The room size or area of Single Rooms is generally between 37 m² to 45 m².`,
        roomType: "Single room"

    },
    {
        id: "10",
        name: "Studio room",
        photo: Studio_room,
        roomPrice: 150,
        description: `A room with a studio bed- a couch which can be converted into a bed.
        May also have an additional bed.`,
        roomType: "Studio room"
         
    },
    {
        id: "11",
        name: "Suite room",
        photo: Suite_room,
        roomPrice: 150,
        description: `A parlour or living room connected with to one or more bedrooms. (A room with one or more bedrooms and a separate living space.)
        The room size or area of Suite rooms is generally between 70 m² to 100 m².`,
        roomType: "Suite room"
         
    }
    ,
    {
        id: "12",
        name: "Suite Vip room",
        photo: SuiteVip_room,
        roomPrice: 150,
        description: `A parlour or living room connected with to one or more bedrooms. (A room with one or more bedrooms and a separate living space.)
        The room size or area of Suite rooms is generally between 70 m² to 100 m².`,
        roomType: "SuiteVip room"
         
    },
    {
        id: "13",
        name: "Triple room",
        photo: Triple_room,
        roomPrice: 150,
        description: `A room with a studio bed- a couch which can be converted into a bed.
        May also have an additional bed.`,
        roomType: "Triple room" 
    },
    {
        id: "14",
        name: "View room",
        photo: View_room,
        roomPrice: 150,
        description: `This room type is mainly designed for disabled guests and it is required by law that hotels must provide a certain number of accessible rooms to avoid discrimination.
        The room size or area of Accessible Room Types is generally between 30 m² to 42 m².`,
        roomType: "View room" 
    },
    {
        id: "15",
        name: "Vip room",
        photo: Vip_room,
        roomPrice: 150,
        description: `Rooms close to each other, perhaps across the hall.
        The room size or area of Adjacent Room Types is generally between 30 m² to 45 m².`,
        roomType: "Vip_room" 

    }
];



export const booking_room =[
    {
        id: "1",
        numOfAdults: 2,
        numOfChildren:1,
        bookingConfirmationCode:"6252183955",
        checkInDate:"2024-04-27",
        checkOutDate:"2024-04-30",
        guestEmail:"chanh@gmail.com",
        guestFullName:"dangchanh",
        roomId: "1",
    },
    {
        id: "2",
        numOfAdults: 1,
        numOfChildren:1,
        bookingConfirmationCode:"6844061853",
        checkInDate:"2024-04-23",
       checkOutDate:"2024-04-24",
        guestEmail:"oanh@gmail.com",
        guestFullName:"dangoanh",
        roomId: "2",

    },
    { 
        id: "3",
        numOfAdults: 2,
        numOfChildren:1,
        bookingConfirmationCode:"8170312690",
        checkInDate:"2024-05-01",
        checkOutDate:"2024-05-03",
        guestEmail:"phuong@gmail.com",
        guestFullName:"dangkimphuong",
        roomId:"3",
    },
    {
        id: "4",
        numOfAdults: 1,
        numOfChildren:1,
        bookingConfirmationCode:"8980089960",
        checkInDate:"2024-05-06",
        checkOutDate:"2024-05-08",
        guestEmail:"xo@gmail.com",
        guestFullName:"dangxo",
        roomId:"4",
    },
    {
        id: "5",
        numOfAdults: 2,
        numOfChildren:2,
        bookingConfirmationCode:"4784318900",
        checkInDate:"2024-05-12",
        checkOutDate:"2024-05-13",
        guestEmail:"nuong@gmail",
        guestFullName:"dangnuong",
        roomId:"5",

    },
    {
        id: "6",
        numOfAdults: 2,
        numOfChildren:0,
        bookingConfirmationCode:"9474520597",
        checkInDate:"2024-05-18",
        checkOutDate:"2024-05-19",
        guestEmail:"son@gmail.com",
        guestFullName:"dangson",
        roomId:"6",

    }
    ,
    {
        id: "7",
        numOfAdults: 2,
        numOfChildren:1,
        bookingConfirmationCode:"3269253248",
        checkInDate:"2024-05-14",
        checkOutDate:"2024-05-17",
        guestEmail:"phuong@email",
        guestFullName:"dangkimphuong",
        roomId:"7",

    }
    ,
    {
        id: "8",
        numOfAdults: 2,
        numOfChildren:3,
        bookingConfirmationCode:"12882286308",
        checkInDate:"2024-05-05",
        checkOutDate:"2024-05-06",
        guestEmail:"oanh@email.com",
        guestFullName:"oanhdang",
        roomId:"8",
    },
    {  
        id: "9",
        numOfAdults: 1,
        numOfChildren:1,
        bookingConfirmationCode:"6604962167",
        checkInDate:"2024-05-04",
        checkOutDate:"2024-05-05",
        guestEmail:"thuy@email.com",
        guestFullName:"thuy",
        roomId:"9",
    }

];
export const admin = [
    {
        email: "nuongdang@gmail.com",
        password:"12345678",
    }

];

export const user =[
    {

    }
];
