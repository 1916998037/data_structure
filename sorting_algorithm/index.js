// 主要快速过一下五种排序算法：冒泡，选择，插入，希尔，快速

class CreateTestSort {
  constructor() {
    this.arr = []
  }
  inserted() {
    this.arr.push(...arguments)
  }
  swap(m, n) {
    const temp = this.arr[m]
    this.arr[m] = this.arr[n] 
    this.arr[n] = temp
  }
  // 冒泡排序
  bubbleSort() {
    for(let j = this.arr.length - 1; j > 0; j--) {
      for(let i = 0; i < j; i++) {
        if(this.arr[i] > this.arr[i+1]) {
          this.swap(i, i + 1)
        }
      }
    }
  }
  // 选择排序
  selectionSort() {
    const length = this.arr.length
    for(let i = 0; i < length - 1; i++) {
      for(let j = i + 1; j < length; j++) {
        if(this.arr[j] < this.arr[i]) {
          this.swap(i, j)
        }
      }
    }
  }
  // 插入排序
  insertedSort() {
    const length = this.arr.length
    for(let i = 1; i < length; i ++){
      const temp = this.arr[i]
      let j = i
      while(this.arr[j-1] > temp && j > 0) {
        this.arr[j] = this.arr[j - 1]
        j--
      }
      this.arr[j] = temp
    }
  }

  // 希尔排序
  shellSort() {
    const length = this.arr.length
    let gap = Math.floor(length / 2)

    while(gap >= 1) {
      for(let i = gap; i < length; i++) {
        const temp = this.arr[i]
        let j = i
        while(this.arr[j - gap] > this.arr[j] && j > gap -1) {
          this.arr[j] = this.arr[j - gap]
          j -= gap
        }
        this.arr[j] = temp
      }
      gap = Math.floor(gap / 2)
    }
  }

  //快速排序
  medium(left, right) {
    const center = Math.floor((left + right) / 2)
    if(this.arr[left] > this.arr[center]) {
      this.swap(left, center)
    }
    if(this.arr[center] > this.arr[right]) {
      this.swap(center, right)
    }
    if(this.arr[center] < this.arr[left]) {
      this.swap(center, left) 
    }
    this.swap(center, right -1)
    return this.arr[right - 1]
  }
  
  quickSort() {
    const length = this.arr.length
    this.quick(0, length - 1)
  }

  quick(left, right) {
    if(left >= right) return
    const pivot = this.medium(left, right)
    let i = left
    let j = right - 1

    while(i < j) {
      while(this.arr[++i] < pivot) {}
      while(this.arr[--j] > pivot) {}
      if(i < j) {
        this.swap(i, j)
      } else {
        break
      }
    }
    
    this.swap(i, right - 1)
    this.quick(left, i - 1)
    this.quick(i + 1, right)
  }
}

const sort = new CreateTestSort()
sort.inserted(14,18,8,9,7)
console.log("原序列：", sort.arr)
sort.quickSort()
console.log("后序列", sort.arr)