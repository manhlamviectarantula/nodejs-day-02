
const Kth_greatest_in_array = (arr, k) => {
    for (let i = 0; i < k; i++) {
      let max_index = i,
        tmp = arr[i];
  
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] > arr[max_index]) {
          max_index = j;
        }
      }
  
      arr[i] = arr[max_index];
      arr[max_index] = tmp;
    }
  
    return arr[k - 1];
  };
  
  console.log(Kth_greatest_in_array([1, 2, 6, 4, 5], 3));      