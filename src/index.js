class Sorter {
    constructor() {
        this.data = [];
        this.compare = (a,b) => a - b;
    }

    add(element) {
        this.data.push(element);
    }

    at(index) {
        return this.data[index];
    }

    get length() {
        return this.data.length;
    }

    toArray() {
        return this.data;
    }

    sort(indices) {

                indices.sort((a, b) => a - b);
                var deleted = this.data.splice(indices[0], indices.length);
                deleted.sort(this.compare);
                this.data.splice(indices[0],0,...deleted);
            
//        var indicesLength = indices.length;
//        indices.sort((a, b) => b - a);
//        var temp = [];
//
//        for (var i = 0; i < indicesLength; i++) {
//            var deleted = this.data.splice(indx[i], 1);
//            temp.push(deleted.pop());
//        }
//
//        temp.sort(this.compare);
//
//        indices.sort((a, b) => a - b);
//
//        for (var j = 0; j < indicesLength; j++) {
//            this.data.splice(indx[j], 0, temp.shift());
//        }
    }

    setComparator(compareFunction) {
        return this.compare = compareFunction || ((a, b) => a - b);
    }
}

module.exports = Sorter;

//const sorter = new Sorter();

//function customSort(indx = [2, 1, 5]) {
//    var arr = [2, 200, 1, 5, 10, 3, 6];
//        console.log(arr);
//    var indxLength = indx.length;
//    indx.sort((a, b) => b - a);
//    var temp = [];
//
//
//    for (var i = 0; i < indxLength; i++) {
//        var deleted = arr.splice(indx[i], 1);
//        temp.push(deleted.pop());
//    }
//        console.log(temp);
//        console.log(arr);
//    
//    temp.sort((a, b) => a - b);
//    
//        console.log(temp);
//
//    indx.sort((a, b) => a - b);
//
//    for (var j = 0; j < indxLength; j++) {
//        arr.splice(indx[j], 0, temp.shift());
//    }
//
//    return console.log(arr);
//}

//customSort();
