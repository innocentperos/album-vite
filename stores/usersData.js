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
  
export const WORDS = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, est?".split(" ")

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
