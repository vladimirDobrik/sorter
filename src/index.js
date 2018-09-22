class Sorter {
    constructor() {
        this.data = [];
        this.compare = (a, b) => a - b;
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

        //                indices.sort((a, b) => a - b);
        //                var deleted = this.data.splice(indices[0], indices.length);
        //                deleted.sort(this.compare);
        //                this.data.splice(indices[0],0,...deleted);

        var indicesLength = indices.length;
        indices.sort((a, b) => b - a);
        var temp = [];

        for (var i = 0; i < indicesLength; i++) {
            var deleted = this.data.splice(indices[i], 1);
            temp.push(deleted.pop());
        }

        temp.sort(this.compare);

        indices.sort((a, b) => a - b);

        for (var j = 0; j < indicesLength; j++) {
            this.data.splice(indices[j], 0, temp.shift());
        }
    }

    setComparator(compareFunction) {
        return this.compare = compareFunction || ((a, b) => a - b);
    }
}

module.exports = Sorter;
