# mutable-vs-immutable

:ledger: Testing performance of mutable vs immutable object during detect changes

## Preview 🎉

<https://piecioshka.github.io/mutable-vs-immutable/>

## Results

* **1 item** in list

```text
isTheSameMutableList true
Compare mutable list: 3.928955078125ms

isTheSameImmutableList false
Create immutable list: 0.318115234375ms
```

* **10 items** in list

```text
isTheSameMutableList true
Compare mutable list: 3.56494140625ms

isTheSameImmutableList false
Create immutable list: 0.30712890625ms
```

* **100 items** in list

```text
isTheSameMutableList true
Compare mutable list: 4.14208984375ms

isTheSameImmutableList false
Create immutable list: 0.30712890625ms
```

* **1000 items** in list

```text
isTheSameMutableList true
Compare mutable list: 12.831787109375ms

isTheSameImmutableList false
Create immutable list: 0.343994140625ms
```

* **10000 items** in list

```text
isTheSameMutableList true
Compare mutable list: 575.919189453125ms

isTheSameImmutableList false
Create immutable list: 2.036865234375ms
```

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2017
