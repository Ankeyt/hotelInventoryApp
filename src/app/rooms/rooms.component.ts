import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  hotelName = 'Marriot wala'

  numberofRooms=11

  hideRooms=false

  room: Room={
    totalRooms:22,
    availableRooms:10,
    bookedRooms:10
  }

  roomList : RoomList[]=[{
    roomNumber:1,
    roomType:'Deluxe Room',
    amenities:'AC, Wifi,Water,TV,almirah',
    price:1000,
    photos:"https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221__340.jpg",
    checkinTime: new Date('11-Oct-2022'),
    checkoutTime: new Date('12-Oct-2022'),
    rating:4.5
  },
{
  roomNumber:6,
  roomType:'Deluxe Room',
  amenities:'AC, Wifi,Water,TV,almirah',
  price:100,
  photos:"https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221__340.jpg",
  checkinTime: new Date('17-Oct-2022'),
  checkoutTime: new Date('19-Oct-2022'),
  rating:4.2
},
{
  roomNumber:5,
  roomType:'Deluxe Room new',
  amenities:'AC, Wifi,Water,TV,almirah',
  price:1200,
  photos:"https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221__340.jpg",
  checkinTime: new Date('20-Oct-2022'),
  checkoutTime: new Date('21-Oct-2022'),
  rating:3.5
}]

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.hideRooms=!this.hideRooms
  }
}
