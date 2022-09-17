const readpermission=4;
const writepermission=2;
const executepermission=1;
let mypermission=0;

mypermission=mypermission | writepermission;
let message=(mypermission & readpermission) ? 'yes':'No';

console.log(message);