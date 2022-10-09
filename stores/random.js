import { defineStore } from 'pinia'

import {ref} from "vue"

const Users = [
  {
    first_name:"Innocent",
    last_name:"Peros",
    username:"innocentperos",
    avatar:"avatar1.jpg"
  }
  ]

export function random (max){
  let r = Math.random()
  let index = r * max
  let pickIndex = Math.floor(index)
  return pickIndex;
}

Array.prototype.random = function() {
  let r = Math.random()
  let index = r * this.length
  let pickIndex = Math.floor(index)

  return this[pickIndex]
}


Array.prototype.head = function(count) {
  let lim = 3
  if (count > 0) {
    lim = count
  }
  let head = []

  if (lim > this.length) return this
  for (let i = 0; i < lim; i++) {
    head.push(this[i])
  }

  return head
}


Array.prototype.tailFrom = function(start, length) {
  return this.slice(start, length)
}

Array.generate = function({ from = 0, to = 1, step = 1 }) {
  let array = []
  for (let i = from; i < to; i = i + step) {
    array.push(i)
  }

  
  return array
}
Array.randomArray = function(length, max = 100, min = 1 ) {
  let array = []
  while (array.length < length) {
    
    let c = (random(max))
    c = c > min ? c : c + min
    if(!array.includes(c)) array.push(c)
  }
  return array
}

export function uniqueArray(length, max = 100, min = 1) {
  
  let array = []
  while (array.length < length) {

    let c = (random(max))
    c = c > min ? c : c + min
    if (!array.includes(c)) array.push(c)
  }
  return array
}

export function randomArray(length, max = 100, min = 1) {
  let array = []
  for (let i = 0; i<length; i++){
    let c = (random(max))
    c = c > min ? c : c + min
    array.push(c)
  }
  return array
}
export const NAMES = [
  "Innocent", "peros", "joshua", "mathew", "joy", "dorcas", "emmanuel", "esther", "stella", "jonathan", "haggai", "richard", "richmond", "faith", "blessing", "david", "joseph", "jude", "beauty", "elizabeth", "paul"
  ]
export const AVATARS = [
  "/images/avatar1.jpg", 
  "/images/avatar2.jpg",
  "/images/avatar3.jpg",
  "/images/avatar4.jpg",
  "/images/avatar5.jpg",
  "/images/avatar6.jpg",
  "/images/avatar7.jpg",
  "/images/avatar8.jpg",
  "/images/avatar9.jpg",

  ]
  
export const WORDS = `The term social in regard to media suggests that platforms are user - centric and enable comm unal activity.As such, social media can be viewed as online facili tators or enhancers of human networks— webs of individuals who enhance social connec tivity 
Users usually access social media ser vices through web - based apps on desk tops or down load services that offer social media functio nality to their mobile devices(e.g., smart phones and tablets As users engage with these electronic services, they create highly interactive platforms which indivi duals, commu nities, and organize actions can share, co - create, discuss, participate, and modify user - generated or self - curated content posted online Additio nally, social media are document memories, learn about and explore things, advertise oneself, and form friendships along with the growth of ideas from the creation of blogs, podcasts, videos, and gaming sites This changing relationship between humans and technology is the focus of the emerging field of technological self - studies. Some of the most popular social media websites, with more than 100 million registered users, include Facebook its associated Facebook Messenger, TikTok, WeChat, Instagram, QZone, Weibo, Twitter, Tumblr, Baidu Tieba, and LinkedIn.Depending on interpretation, other popular platforms that are some times referred to as social media services include YouTube, QQ, Quora, Telegram, WhatsApp, Signal, LINE, Snapchat, Pinterest, Viber, Reddit, Discord, VK, Microsoft Teams, and more.Wikis are examples of collaborative content creation. 
Social media outlets differ from traditional media`.split(" ")

export function randomName() {
  return NAMES.random()
}

export function randomNames(n) {
  let names = []

  for (i = n; i > 0; i--) {
    names.push(NAMES.random())
  }
  return names.join(" ")
}

export function randomText(count){
  let words = []
  
  for (let i = count; i > 0; i--) {
    words.push(WORDS.random())
  }
  return words.join(" ")
}
