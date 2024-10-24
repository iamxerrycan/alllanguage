// short array of which consit 0,1,2 elements

function short012(arr) {
  let low = 0; mid = 0; high = arr.length - 1;
  
  while(mid <= high) {
    if(arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if(arr[mid] === 1) {
      mid++;
    } else if(arr[mid] === 2) {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
  return arr
}

console.log(short012([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]));
