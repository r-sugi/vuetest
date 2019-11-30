import Counter from '@/test/counter'
const counter= new Counter()
console.log(counter.incr())
console.log(counter.getCount())
console.log(Counter.getPublicStatic())
console.log(Counter.getPrivateStatic())
