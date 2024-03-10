const date = document.querySelector('#date')
const date2 = document.querySelector('#date2')
const month1 = document.querySelector('month1')
const year1 = document.querySelector('year1')

const now = new Date()

const today = now.getDate() < 10 ? '0' + now.getDate() : now.getDate()
const month = now.getMonth()
const year = now.getFullYear()

const months = [
    'Yanvar',
    'Fevral',
    'Mart',
    'Aprel',
    'May',
    'Iyun',
    'Iyul',
    'Avgust',
    'Sentabr',
    'Oktabr',
    'Noyabr',
    'Dekabr',
] 



date.innerHTML = `${today}-${months[month]}.${year}`
date2.innerHTML = `${today}-${months[month]}.${year}`






