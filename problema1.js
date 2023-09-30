var array = [0,10,3,2,3,5,2,2,4,5,6,10,2,3,4,5,2,3,4,2,2,2,3,4,5,2,0,10000,1,1,12,1,4,12,1,45,1,1,12,1,4,12,1,45,1,1,12,1,4,12,1,45,1,1,12,1,4,12,1,45,1,1,12,1,4,12,1,45,1,1,12,1,4,12,1,45,1,1,12,1,4,12,1,45,1,1,12,1,4,12,1,45,1,1,12,1,4,12,1,45,1,1,12,1,4,12,1,45,1,1,12,1,4,12,1,45,1,1,12,1,4,12,1,45,1,1,12,1,4,12,1,45,1,1,12,1,4,12,1,45,45,45,45,45,4,5,4,5,12,1,2,1,35,3,111,2,311,3,4,13,4,5,6,1,2,3,4,4,4553,23,23,0,10000];
var hola;
var i = 0;
var a=0

function orden(array, i) {
    console.log(array)
    if (i > array.length || i<0) {
        return
    } else{
        if (array[i] <= array[i + 1]) {
            hola = array[i];
            array[i] = array[i + 1];
            array[i + 1] = hola;
         orden(array, i + 1);
        
        } 
        if(array[i]>array[i-1]){
            hola = array[i];
            array[i] = array[i-1];
            array[i-1] = hola;
            if(i>=0) orden(array,i--);

        }
        i=0
        orden(array ,a++)
        if (array[i] <= array[i + 1]) {
            hola = array[i];
            array[i] = array[i + 1];
            array[i + 1] = hola;
        } 
    }
}
orden(array, 0)

console.log(array);