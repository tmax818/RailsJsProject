# 'this' Sucks!!!

Not really... I thought 'this' would be easy. It seemed too easy. I finished my Rails project and I thought, "all I have to do is add a JavaScript front-end to this!"

<iframe src="https://giphy.com/embed/RJOYRvEEeMlby" width="480" height="206" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/indiana-jones-RJOYRvEEeMlby"></a></p>

I have to say that looking back on this experience, I have learned as much about myself as I have about web development. I am in a unique position as I write this. I am almost done! I can see the finish line!

So, what is the 'this' of my title? When you don't know what the hell you're talking about, it's best to quote someone who does. Do yourself a huge favor. Check out [JavaScript: Understanding the Weird Parts](https://www.udemy.com/understand-javascript/) on Udemy. Don't pay $175 for it. It goes on sale all the time for ten bucks. You can watch the first three hours of the course for free on YouTube and there is a link in the curriculum. The following has been 'borrowed' from this course.

```JavaScript
// filename: app.js

let a = 'Hello World';
let c;

function b() {
  let c = 'Hello Function';
  console.log(a)
  console.log(c);
}

b();
console.log(a);
console.log(c);
```

Running the above code using Node.js will result in the following:

```Bash
$ node app.js
Hello World
Hello Function
Hello World
undefined
```

Why `undefined` for the second `console.log(c)`? How can the first `console.log(a)` 'see' the a variable from inside the function `b()`? All this involves understanding execution context, hoisting and the 'this' keyword. Trying to understand this can be a bit like this:

<iframe src="https://giphy.com/embed/3ov9jQX2Ow4bM5xxuM" width="480" height="390" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/homer-simpson-the-simpsons-3ov9jQX2Ow4bM5xxuM"></a></p>

Yes. Vertigo. Nausea. Perhaps an existential crisis. Here is the code again with comments that attempt to explain what's going on. We start in what is called the 'Global' execution context.

```JavaScript
// Global execution context

let a = 'Hello World';
let c;
```

The 'Global' execution context ends as soon as a function is declared. Just assume that 'Global' means not inside a function. The function creates a new execution context. This execution context has access to the outer or Global execution context.

```JavaScript
// local or function execution context

function b() {
let c = 'Hello Function';
console.log(a) // Hello World (1)
console.log(c); // Hello Function (2)
}
```

Now we are back in the Global execution context. Invoking function `b` is how (1) and (2) above are run. After that, we are back in the Global execution context.

```JavaScript
// Global execution context
b();
console.log(a); // Hello World (3)
console.log(c); // undefined  (4)
```

A local execution context can see its outer execution context, but not the other way around. That is why (4) or the last `console.log(c)` is `undefined`.

One may ask what this has to do with my Rails/JavaScript project. My point is that the transition from Ruby to JavaScript can be a difficult one. Ruby just works. It is designed for 'programmer happiness'. Ruby is like the guitar. It's easy to learn, but difficult to master. JavaScript is just plain hard! However, the efforts required to learn it pay off in the end.
