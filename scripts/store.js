'use strict';
import item from './item.js';

let items = [];
let hideCheckedItems = false;

const findById = function(id){
  this.items.find(item => item.id === id);
}

const addItem = function(name){
  try {
    item.validateName(name);
    item.create(name);
    this.items.push({ id: cuid(), name: name, checked: false });
    render();
  } catch(error){
    console.log(`Cannot add item: ${error.message}`);
  }
}

const findAndToggleChecked = function(id){
  console.log(id)
    let itemFound = this.findById(id);
    console.log(itemFound);
  //itemFound.checked = !itemFound.checked;
  
}


const findAndUpdateName = function(id, newName){
  try {
    item.validateName(newName);
    let itemFound = store.items.find(item => item.id === id);
    itemFound.name = newName;
  } catch {
    console.log(`Cannot update name: ${error.message}`);
  }
}

const findAndDelete = function(id){
  let itemFound = this.items.find(item => item.id === id);
  console.log(itemFound); //return the entire object and properties
  let itemIndex = this.items.indexOf(itemFound);
  console.log(itemIndex);
  this.items.splice(itemIndex, 1);
}

export default {
  items,
  hideCheckedItems,
  findById, 
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
};
