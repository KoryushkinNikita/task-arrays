/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data) {
  let arr = data.split(",")
  for (let i = 0;i< arr.length;i++){
      arr[i] = parseInt(arr[i])
  }

  arr = arr.sort(function(a,b){
      return a-b
  })
  data = arr.toString()
  return data
}

/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
    let index
    for (let i = 0;i < data.length;i++){
        if (data[i] > 100) {data.splice(i,1);i--}
    }
    return data
}

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
    let arr3 = []
    let i = 0
    while(i<array1.length){
        arr3.push(array1[i])
        arr3.push(array2[i])
        i++
    }
    return arr3
}
