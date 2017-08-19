# warsawjs-workshop-9-mutable-vs-immutable

> :ledger: Testing performance of mutable vs immutable object during detect changes

## Demo

Click: https://piecioshka.github.io/warsawjs-workshop-9-mutable-vs-immutable/

## Results

Number of items in list:

* 1 item

```
isTheSameMutableList true
Compare mutable list: 3.928955078125ms

isTheSameImmutableList false
Create immutable list: 0.318115234375ms
```

* 10 items

```
isTheSameMutableList true
Compare mutable list: 3.56494140625ms

isTheSameImmutableList false
Create immutable list: 0.30712890625ms
```

* 100 items

```
isTheSameMutableList true
Compare mutable list: 4.14208984375ms

isTheSameImmutableList false
Create immutable list: 0.30712890625ms
```

* 1000 items

```
isTheSameMutableList true
Compare mutable list: 12.831787109375ms

isTheSameImmutableList false
Create immutable list: 0.343994140625ms
```

* 10000 items

```
isTheSameMutableList true
Compare mutable list: 575.919189453125ms

isTheSameImmutableList false
Create immutable list: 2.036865234375ms
```

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2017
